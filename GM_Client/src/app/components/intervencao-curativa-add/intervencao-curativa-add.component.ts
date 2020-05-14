import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-intervencao-curativa-add',
  templateUrl: './intervencao-curativa-add.component.html',
  styleUrls: ['./intervencao-curativa-add.component.css']
})
export class IntervencaoCurativaAddComponent implements OnInit {

  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  form: FormGroup;
  description:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder ){}



  

  ngOnInit() {

      }
  

}
