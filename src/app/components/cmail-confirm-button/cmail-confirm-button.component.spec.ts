import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailConfirmButtonComponent } from './cmail-confirm-button.component';

describe('CmailConfirmButtonComponent', () => {
  let component: CmailConfirmButtonComponent;
  let fixture: ComponentFixture<CmailConfirmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmailConfirmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailConfirmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
