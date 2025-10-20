import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Languaje } from './languaje';

describe('Languaje', () => {
  let component: Languaje;
  let fixture: ComponentFixture<Languaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Languaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Languaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
