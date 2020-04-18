import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspNetUserListComponent } from './asp-net-user-list.component';

describe('AspNetUserListComponent', () => {
  let component: AspNetUserListComponent;
  let fixture: ComponentFixture<AspNetUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspNetUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspNetUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
