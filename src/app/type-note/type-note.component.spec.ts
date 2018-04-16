import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNoteComponent } from './type-note.component';

describe('TypeNoteComponent', () => {
  let component: TypeNoteComponent;
  let fixture: ComponentFixture<TypeNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
