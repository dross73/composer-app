/*
============================================
; Title: Assignment 4.4 – Async Pipe
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer service
;===========================================
*/
//These are our import files
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//This identifies the class as being injectable.
@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;
  //Here are 5 composer objects.
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Frédéric Chopin", genre: "Classical"
      },
      {
        composerId: 104, fullName: "George Frideric Handel", genre: "Baroque"
      }
    ]
  }
  //This returns the composer list.
  getComposers(): Observable<IComposer[]> {
    //This returns an observable array.
    return of(this.composers);
  }
  //This will loop over the composer list. If the composer ID equals the passed in ID, then return that composer.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  //Give us a new Observable array (map()) where the name parameter has characters in the composer.fullName.
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))

  }
}
