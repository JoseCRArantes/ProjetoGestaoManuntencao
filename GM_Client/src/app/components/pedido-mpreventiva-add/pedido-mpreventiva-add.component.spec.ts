import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMpreventivaAddComponent } from './pedido-mpreventiva-add.component';

describe('PedidoMpreventivaAddComponent', () => {
  let component: PedidoMpreventivaAddComponent;
  let fixture: ComponentFixture<PedidoMpreventivaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMpreventivaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMpreventivaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
