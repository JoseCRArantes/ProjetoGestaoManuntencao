import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermissaoComponent } from './edit-permissao.component';

describe('EditPermissaoComponent', () => {
  let component: EditPermissaoComponent;
  let fixture: ComponentFixture<EditPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
