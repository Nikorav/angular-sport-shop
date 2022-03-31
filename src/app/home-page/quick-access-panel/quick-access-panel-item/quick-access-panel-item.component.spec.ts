import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessPanelItemComponent } from './quick-access-panel-item.component';

describe('QuickAccessPanelItemComponent', () => {
  let component: QuickAccessPanelItemComponent;
  let fixture: ComponentFixture<QuickAccessPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAccessPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
