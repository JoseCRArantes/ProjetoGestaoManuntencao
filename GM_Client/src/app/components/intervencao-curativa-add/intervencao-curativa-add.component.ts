import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { NgForm, RequiredValidator } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { PedidosService } from "../../shared/pedidoMcurativa-teste/pedidoMcurativa.service";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-intervencao-curativa-add",
  templateUrl: "./intervencao-curativa-add.component.html",
  styleUrls: ["./intervencao-curativa-add.component.css"],
})
export class IntervencaoCurativaAddComponent implements OnInit {
  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  estadoIntervencaoList: EstadoIntervencao[] = [];

  form: FormGroup;
  isValidDate:any;
  idPedido: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public pedidoServ: PedidosService, 
    private _snackBar: MatSnackBar,
  ) {
    this.idPedido = this.data.idPedido;
  }

  ngOnInit() {
    this.loadEstadosIntervencao();
    this.form = this.fb.group({
      descricao: ["", Validators.required],
      estado: [0, Validators.required],
      datainicio: [null],
      datafim: [null],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      var values = this.form.getRawValue();

      var body = {
        Descricao: values.descricao,
        IDPedido: this.idPedido,
        IDEstadoIntervencao: values.estado,
        DataInicioIntervencao: values.datainicio,
        DataFimIntervencao: values.datafim,
      };

      this.isValidDate = this.validateDates(
        body.DataInicioIntervencao,
        body.DataFimIntervencao
      );
      if (this.isValidDate) {
        this.pedidoServ.postIntervencao(body);
      } else {
      }
    }
  }

  //Snack Bar - para mostrar erros ou validações.
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 8000,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }

  validateDates(sDate: string, eDate: string) {
    this.isValidDate = true;
    if (sDate != null && eDate != null && eDate < sDate) {
      this.openSnackBar(
        "Erro. \n A data de fim da intervenção não pode ser anterior à data de início.",
        ""
      );
      this.isValidDate = false;
    }
    return this.isValidDate;
  }

  loadEstadosIntervencao() {
    return this.pedidoServ
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }
}
