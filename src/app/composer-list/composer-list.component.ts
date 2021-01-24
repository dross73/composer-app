/*
============================================
; Title: Assignment 4.4 – Async Pipe
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-list component
;===========================================
*/
//These are the import statements.
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// This is the ComposerListComponent class
export class ComposerListComponent implements OnInit {
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');
  //This creates an array with 5 composer objects
  constructor(private composerService: ComposerService) {
    //call composer service using dependency injection
    this.composers = this.composerService.getComposers();
    //Any time we enter text in the 'txtSearchControl' it will trigger the 'valueChanges' event and after 500ms we'll call the 'filterComposers' function.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));


   }

  ngOnInit(): void {
  }
  //This calls to the composerService.filterComposers(name) function and assign the results to the composers variable 
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
