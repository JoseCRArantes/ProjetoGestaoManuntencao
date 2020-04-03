import { TestBed } from '@angular/core/testing';

import { GrupoMaquinaService } from './grupomaquina.service';

describe('EquipamentoService', () => {
  let service: GrupoMaquinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoMaquinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
