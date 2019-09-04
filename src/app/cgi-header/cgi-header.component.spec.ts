import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgiHeaderComponent } from './cgi-header.component';

describe('CgiHeaderComponent', () => {
  let component: CgiHeaderComponent;
  let fixture: ComponentFixture<CgiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
