import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAComponent } from './selector-a.component';

describe('SelectorAComponent', () => {
  let component: SelectorAComponent;
  let fixture: ComponentFixture<SelectorAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
