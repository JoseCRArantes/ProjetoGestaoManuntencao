import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPreventivaListComponent } from './pedido-preventiva-list.component';

describe('PedidoPreventivaListComponent', () => {
  let component: PedidoPreventivaListComponent;
  let fixture: ComponentFixture<PedidoPreventivaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoPreventivaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoPreventivaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
