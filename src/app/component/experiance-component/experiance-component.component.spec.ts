import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianceComponentComponent } from './experiance-component.component';

describe('ExperianceComponentComponent', () => {
  let component: ExperianceComponentComponent;
  let fixture: ComponentFixture<ExperianceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperianceComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperianceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


