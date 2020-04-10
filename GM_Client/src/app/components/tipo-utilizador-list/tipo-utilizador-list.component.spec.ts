import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUtilizadorListComponent } from './tipo-utilizador-list.component';

describe('TipoUtilizadorListComponent', () => {
  let component: TipoUtilizadorListComponent;
  let fixture: ComponentFixture<TipoUtilizadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUtilizadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUtilizadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
