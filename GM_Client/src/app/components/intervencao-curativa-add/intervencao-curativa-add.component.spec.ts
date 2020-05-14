import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencaoCurativaAddComponent } from './intervencao-curativa-add.component';

describe('IntervencaoCurativaAddComponent', () => {
  let component: IntervencaoCurativaAddComponent;
  let fixture: ComponentFixture<IntervencaoCurativaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervencaoCurativaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervencaoCurativaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
