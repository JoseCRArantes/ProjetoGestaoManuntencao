import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { NgForm, RequiredValidator } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { PedidosPreventivosService } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.service";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-intervencao-add-user-home-page',
  templateUrl: './intervencao-add-user-home-page.component.html',
  styleUrls: ['./intervencao-add-user-home-page.component.css']
})
export class IntervencaoAddUserHomePageComponent implements OnInit {

  estadoIntervencaoList: EstadoIntervencao[] = [];
  form: FormGroup;
  IDPedido: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public pedidoServ: PedidosPreventivosService
  ) {
    this.IDPedido = this.data.IDPedido;
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
        Observacoes: values.descricao,
        PedidoManutPreventivaID: this.IDPedido,
        IDEstadoIntervencao: values.estado,
        DataInicioIntervencao: values.datainicio,
        DataFimIntervencao: values.datafim,
      };

      //if (body.DataInicioIntervencao.getTime() > body.DataFimIntervencao.getTime())

      this.pedidoServ.postIntervencao(body);
      //http enviar o body para a api.
    } else {
      //show dialog a dizer que falta algo.
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
