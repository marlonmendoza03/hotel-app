import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversationListComponent } from './reservation-list.component';

describe('ReversationListComponent', () => {
  let component: ReversationListComponent;
  let fixture: ComponentFixture<ReversationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReversationListComponent]
    });
    fixture = TestBed.createComponent(ReversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
