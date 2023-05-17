import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersExampleComponent } from './servers-example.component';

describe('ServersExampleComponent', () => {
  let component: ServersExampleComponent;
  let fixture: ComponentFixture<ServersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
