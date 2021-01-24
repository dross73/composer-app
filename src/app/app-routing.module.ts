/*
============================================
; Title: Assignment 4.4 – Async Pipe
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the routing module where we can set up our routes.
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//These import statements load the components defined in our routes
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

//These are routes which will load the corresponding component based on the URL path.
const routes: Routes = [
  {
    //This is for the URL http://localhost:4200
    path: '',
    component: ComposerListComponent
  },
  {
    //This is for the URL http://localhost:4200/composer-list
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    //This is for the URL http://localhost:4200/composer-details/IDHERE where IDHERE is the ID of the composer
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    //This is for the URL http://localhost:4200/about
    path: 'about',
    component: AboutComponent
  },
  {
    //This is for the URL http://localhost:4200/contact
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
