import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatCreateComponent } from './cat-create/cat-create.component';
import { CatListItemComponent } from './cat-list-item/cat-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatsListComponent,
    CatDetailsComponent,
    CatCreateComponent,
    CatListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
