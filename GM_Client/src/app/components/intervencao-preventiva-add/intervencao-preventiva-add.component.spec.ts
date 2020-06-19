import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencaoPreventivaAddComponent } from './intervencao-preventiva-add.component';

describe('IntervencaoPreventivaAddComponent', () => {
  let component: IntervencaoPreventivaAddComponent;
  let fixture: ComponentFixture<IntervencaoPreventivaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervencaoPreventivaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervencaoPreventivaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
