import { Component, OnInit } from '@angular/core';
import { GrupoMaquinaService } from '../../shared/grupomaquina.service';

@Component({
  selector: 'app-grupomaquina-list',
  templateUrl: './grupomaquina-list.component.html',
  styleUrls: ['./grupomaquina-list.component.css']
})
export class GrupoMaquinaListComponent implements OnInit {

  GrupoMaquinaList: any = [];


  ngOnInit() {
    this.loadGrupoMaquinas();
  }

  constructor(
    public grupoMaquinaService: GrupoMaquinaService
  ){ }

   // lista grupos de máquinas
   loadGrupoMaquinas() {
    return this.grupoMaquinaService.GetGruposMaquina().subscribe((data: {}) => {
      this.GrupoMaquinaList = data;
    })
    
  }


}