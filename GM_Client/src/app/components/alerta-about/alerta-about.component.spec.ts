import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaAboutComponent } from './alerta-about.component';

describe('AlertaAboutComponent', () => {
  let component: AlertaAboutComponent;
  let fixture: ComponentFixture<AlertaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
