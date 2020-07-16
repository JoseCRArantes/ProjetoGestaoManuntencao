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
  selector: "app-intervencao-preventiva-add",
  templateUrl: "./intervencao-preventiva-add.component.html",
  styleUrls: ["./intervencao-preventiva-add.component.css"],
})
export class IntervencaoPreventivaAddComponent implements OnInit {
  estadoIntervencaoList: EstadoIntervencao[] = [];
  form: FormGroup;
  idPedido: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public pedidoServ: PedidosPreventivosService
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
        Observacoes: values.descricao,
        PedidoManutPreventivaID: this.idPedido,
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
