import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPreventivaProgramadaComponent } from './manutencao-preventiva-programada.component';

describe('ManutencaoPreventivaProgramadaComponent', () => {
  let component: ManutencaoPreventivaProgramadaComponent;
  let fixture: ComponentFixture<ManutencaoPreventivaProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoPreventivaProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPreventivaProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
