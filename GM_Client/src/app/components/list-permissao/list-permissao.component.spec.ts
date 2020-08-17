import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermissaoComponent } from './list-permissao.component';

describe('ListPermissaoComponent', () => {
  let component: ListPermissaoComponent;
  let fixture: ComponentFixture<ListPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
