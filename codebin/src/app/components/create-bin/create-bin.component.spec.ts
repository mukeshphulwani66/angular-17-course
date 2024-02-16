import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBinComponent } from './create-bin.component';

describe('CreateBinComponent', () => {
  let component: CreateBinComponent;
  let fixture: ComponentFixture<CreateBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
