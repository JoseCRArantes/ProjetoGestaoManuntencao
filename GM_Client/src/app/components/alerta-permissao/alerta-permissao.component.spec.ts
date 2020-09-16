import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaPermissaoComponent } from './alerta-permissao.component';

describe('AlertaPermissaoComponent', () => {
  let component: AlertaPermissaoComponent;
  let fixture: ComponentFixture<AlertaPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
