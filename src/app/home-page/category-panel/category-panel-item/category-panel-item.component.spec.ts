import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPanelItemComponent } from './category-panel-item.component';

describe('CategoryPanelItemComponent', () => {
  let component: CategoryPanelItemComponent;
  let fixture: ComponentFixture<CategoryPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
