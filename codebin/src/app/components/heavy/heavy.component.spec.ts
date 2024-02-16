import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyComponent } from './heavy.component';

describe('HeavyComponent', () => {
  let component: HeavyComponent;
  let fixture: ComponentFixture<HeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
