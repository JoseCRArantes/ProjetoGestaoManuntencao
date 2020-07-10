import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencaoAddUserHomePageComponent } from './intervencao-add-user-home-page.component';

describe('IntervencaoAddUserHomePageComponent', () => {
  let component: IntervencaoAddUserHomePageComponent;
  let fixture: ComponentFixture<IntervencaoAddUserHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervencaoAddUserHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervencaoAddUserHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
