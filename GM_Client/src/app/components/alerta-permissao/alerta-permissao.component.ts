
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { NgForm, RequiredValidator } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-alerta-permissao',
  templateUrl: './alerta-permissao.component.html',
  styleUrls: ['./alerta-permissao.component.css']
})
export class AlertaPermissaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
  ) {
    
  }

  ngOnInit(): void {
  }

}
