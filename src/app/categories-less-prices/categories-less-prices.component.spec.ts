import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLessPricesComponent } from './categories-less-prices.component';

describe('CategoriesLessPricesComponent', () => {
  let component: CategoriesLessPricesComponent;
  let fixture: ComponentFixture<CategoriesLessPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesLessPricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesLessPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
