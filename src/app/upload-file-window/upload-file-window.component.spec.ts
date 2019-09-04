import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileWindowComponent } from './upload-file-window.component';

describe('UploadFileWindowComponent', () => {
  let component: UploadFileWindowComponent;
  let fixture: ComponentFixture<UploadFileWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
