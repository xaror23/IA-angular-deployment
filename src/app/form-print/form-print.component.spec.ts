import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrintComponent } from './form-print.component';

describe('FormPrintComponent', () => {
  let component: FormPrintComponent;
  let fixture: ComponentFixture<FormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
