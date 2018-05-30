import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteractComponent } from './consulteract.component';

describe('ConsulteractComponent', () => {
  let component: ConsulteractComponent;
  let fixture: ComponentFixture<ConsulteractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulteractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
