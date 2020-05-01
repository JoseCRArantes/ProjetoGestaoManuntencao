import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMcurativaAddComponent } from './pedido-mcurativa-add.component';

describe('PedidoMcurativaAddComponent', () => {
  let component: PedidoMcurativaAddComponent;
  let fixture: ComponentFixture<PedidoMcurativaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMcurativaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMcurativaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
