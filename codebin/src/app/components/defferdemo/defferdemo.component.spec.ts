import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferdemoComponent } from './defferdemo.component';

describe('DefferdemoComponent', () => {
  let component: DefferdemoComponent;
  let fixture: ComponentFixture<DefferdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
