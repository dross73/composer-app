/*
============================================
; Title: Assignment 4.4 – Async Pipe
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-details component
;===========================================
*/
//These are the import statements.
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  //Here we imported over ActivatedRoute and use that to be able to access the value inside the path (composerId) of our router file.
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //This will check if the composer ID has a value.
    if (this.composerId){
      //We're using dependency injection to control the creation of the class.
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
