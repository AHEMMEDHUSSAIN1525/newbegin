import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrstComponent } from './frst.component';

describe('FrstComponent', () => {
  let component: FrstComponent;
  let fixture: ComponentFixture<FrstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
