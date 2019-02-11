import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatCreateComponent } from './cat-create/cat-create.component';

const routes: Routes = [
    { path: ':id/detail', component: CatDetailsComponent },
    { path: 'create', component: CatCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
