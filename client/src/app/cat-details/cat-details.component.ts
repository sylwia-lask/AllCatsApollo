import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { SINGLE_CAT_QUERY, INCREMENT_CAT_LIKES_MUTATION } from '../graphql';
import { Cat } from '../types';

type Response = {
    cat: Cat;
}

@Component({
    selector: 'app-cat-details',
    templateUrl: './cat-details.component.html',
    styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
    cat: Cat;
    loading: boolean = false;

    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute,
        private apollo: Apollo) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.querySubscription = this.apollo.watchQuery<Response>({
                query: SINGLE_CAT_QUERY,
                variables: {
                    catId: id
                }
            }).valueChanges
                .subscribe(({ data }) => {
                    this.cat = data.cat;
                });
        });
    }

    incrementLike() {
        this.loading = true;
        this.apollo.mutate({
            mutation: INCREMENT_CAT_LIKES_MUTATION,
            variables: {
                catId: this.cat.id
            },
            optimisticResponse: {
                incrementLikes: {
                    id: this.cat.id,
                    likes: this.cat.likes++,
                    __typename: 'Mutation'
                }
            }
        }).subscribe(() => {
            this.loading = false;
        });
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
}
