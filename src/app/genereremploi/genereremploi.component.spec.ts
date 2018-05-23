import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereremploiComponent } from './genereremploi.component';

describe('GenereremploiComponent', () => {
  let component: GenereremploiComponent;
  let fixture: ComponentFixture<GenereremploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereremploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereremploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
