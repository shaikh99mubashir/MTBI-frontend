import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQurbaniComponent } from './book-qurbani.component';

describe('BookQurbaniComponent', () => {
  let component: BookQurbaniComponent;
  let fixture: ComponentFixture<BookQurbaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookQurbaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookQurbaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
