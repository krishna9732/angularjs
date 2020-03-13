import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassuseComponent } from './ngclassuse.component';

describe('NgclassuseComponent', () => {
  let component: NgclassuseComponent;
  let fixture: ComponentFixture<NgclassuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
