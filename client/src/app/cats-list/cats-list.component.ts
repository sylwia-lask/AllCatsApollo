import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ALL_CATS_QUERY } from '../graphql';
import { CatListItem } from '../types';
import { map } from 'rxjs/operators';

type Response = {
    cats: CatListItem[];
}

@Component({
    selector: 'cats-list',
    templateUrl: './cats-list.component.html',
    styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
    cats: Observable<CatListItem[]>;

    constructor(private apollo: Apollo) { }

    ngOnInit(): void {
        this.cats = this.apollo.watchQuery<Response>({
            query: ALL_CATS_QUERY
        })
            .valueChanges.pipe(
                map(result => result.data.cats)
            );
    }
}
