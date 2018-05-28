import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteinfosComponent } from './noteinfos.component';

describe('NoteinfosComponent', () => {
  let component: NoteinfosComponent;
  let fixture: ComponentFixture<NoteinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
