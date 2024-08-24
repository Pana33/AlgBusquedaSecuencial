import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInArrayComponent } from './items-in-array.component';

describe('ItemsInArrayComponent', () => {
  let component: ItemsInArrayComponent;
  let fixture: ComponentFixture<ItemsInArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsInArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsInArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
