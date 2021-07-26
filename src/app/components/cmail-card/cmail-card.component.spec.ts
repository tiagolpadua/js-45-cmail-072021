import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailCardComponent } from './cmail-card.component';

describe('CmailCardComponent', () => {
  let component: CmailCardComponent;
  let fixture: ComponentFixture<CmailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
