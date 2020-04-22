import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspNetUserEditComponent } from './asp-net-user-edit.component';

describe('AspNetUserEditComponent', () => {
  let component: AspNetUserEditComponent;
  let fixture: ComponentFixture<AspNetUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspNetUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspNetUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
