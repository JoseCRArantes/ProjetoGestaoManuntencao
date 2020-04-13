import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadorEditComponent } from './utilizador-edit.component';

describe('UtilizadorEditComponent', () => {
  let component: UtilizadorEditComponent;
  let fixture: ComponentFixture<UtilizadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
