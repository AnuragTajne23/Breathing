import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepsongsComponent } from './sleepsongs.component';

describe('SleepsongsComponent', () => {
  let component: SleepsongsComponent;
  let fixture: ComponentFixture<SleepsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
