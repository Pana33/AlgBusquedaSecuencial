import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemToFindComponent } from './modal-item-to-find.component';

describe('ModalItemToFindComponent', () => {
  let component: ModalItemToFindComponent;
  let fixture: ComponentFixture<ModalItemToFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalItemToFindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalItemToFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
