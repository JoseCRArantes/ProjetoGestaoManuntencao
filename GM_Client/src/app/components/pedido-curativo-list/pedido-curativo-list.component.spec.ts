import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCurativoListComponent } from './pedido-curativo-list.component';

describe('PedidoCurativoListComponent', () => {
  let component: PedidoCurativoListComponent;
  let fixture: ComponentFixture<PedidoCurativoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCurativoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCurativoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
