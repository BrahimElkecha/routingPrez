import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBackComponent } from './dev-back.component';

describe('DevBackComponent', () => {
  let component: DevBackComponent;
  let fixture: ComponentFixture<DevBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
