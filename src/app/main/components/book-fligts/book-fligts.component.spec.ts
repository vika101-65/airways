import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFligtsComponent } from './book-fligts.component';

describe('BookFligtsComponent', () => {
  let component: BookFligtsComponent;
  let fixture: ComponentFixture<BookFligtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFligtsComponent]
    });
    fixture = TestBed.createComponent(BookFligtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
