import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChildComponent } from './counter-child.component';

describe('CounterChildComponent', () => {
  let component: CounterChildComponent;
  let fixture: ComponentFixture<CounterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
