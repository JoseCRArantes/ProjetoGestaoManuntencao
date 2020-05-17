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

@Component({
  selector: "app-intervencao-curativa-add",
  templateUrl: "./intervencao-curativa-add.component.html",
  styleUrls: ["./intervencao-curativa-add.component.css"],
})
export class IntervencaoCurativaAddComponent implements OnInit {
  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  estadoIntervencaoList: EstadoIntervencao[] = [];

  form: FormGroup;
  //description: string;

  idPedido: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public pedidoServ: PedidosService
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

      //if (body.DataInicioIntervencao.getTime() > body.DataFimIntervencao.getTime())

      console.log(body);
      this.pedidoServ.postIntervencao(body);
      //http enviar o body para a api
    } else {
      //show dialog a dizer que falta merda
    }
  }

  loadEstadosIntervencao() {
    return this.pedidoServ
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }
}
