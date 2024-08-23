import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgSecuencialComponent } from './alg-secuencial.component';

describe('AlgSecuencialComponent', () => {
  let component: AlgSecuencialComponent;
  let fixture: ComponentFixture<AlgSecuencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgSecuencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgSecuencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
