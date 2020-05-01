import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMcurativaListTesteComponent } from './pedido-mcurativa-list-teste.component';

describe('PedidoMcurativaListTesteComponent', () => {
  let component: PedidoMcurativaListTesteComponent;
  let fixture: ComponentFixture<PedidoMcurativaListTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMcurativaListTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMcurativaListTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
