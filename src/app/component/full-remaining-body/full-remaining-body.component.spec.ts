import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRemainingBodyComponent } from './full-remaining-body.component';

describe('FullRemainingBodyComponent', () => {
  let component: FullRemainingBodyComponent;
  let fixture: ComponentFixture<FullRemainingBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullRemainingBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullRemainingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
