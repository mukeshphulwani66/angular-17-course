import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1Component } from './b1.component';

describe('B1Component', () => {
  let component: B1Component;
  let fixture: ComponentFixture<B1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
