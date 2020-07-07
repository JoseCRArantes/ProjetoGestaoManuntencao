import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoProgHomePageComponent } from './manutencao-prog-home-page.component';

describe('ManutencaoProgHomePageComponent', () => {
  let component: ManutencaoProgHomePageComponent;
  let fixture: ComponentFixture<ManutencaoProgHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoProgHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoProgHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
