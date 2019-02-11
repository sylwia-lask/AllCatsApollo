import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_CAT_MUTATION, ALL_CATS_QUERY } from '../graphql';

@Component({
    selector: 'cat-create',
    templateUrl: './cat-create.component.html',
    styleUrls: ['./cat-create.component.scss']
})
export class CatCreateComponent {
    catForm = this.fb.group({
        name: ['', Validators.required],
        description: [''],
        color: ['', Validators.required],
        photoUrl: ['', Validators.required]
    })

    constructor(private fb: FormBuilder,
        private router: Router,
        private apollo: Apollo) { }

    addCat() {
        const catFormValue = this.catForm.value;

        this.apollo.mutate({
            mutation: ADD_CAT_MUTATION,
            variables: {
                name: catFormValue.name,
                description: catFormValue.description,
                color: catFormValue.color,
                photoUrl: catFormValue.photoUrl
            },
            refetchQueries: [{ query: ALL_CATS_QUERY }]
        }).subscribe(() => {
            this.router.navigate(['../..']);
        });
    }
}
