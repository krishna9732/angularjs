import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcrudComponent } from './angularcrud.component';

describe('AngularcrudComponent', () => {
  let component: AngularcrudComponent;
  let fixture: ComponentFixture<AngularcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
