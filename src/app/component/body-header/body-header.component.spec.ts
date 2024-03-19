import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHeaderComponent } from './body-header.component';

describe('BodyHeaderComponent', () => {
  let component: BodyHeaderComponent;
  let fixture: ComponentFixture<BodyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
