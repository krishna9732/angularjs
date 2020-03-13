import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribindingComponent } from './atribinding.component';

describe('AtribindingComponent', () => {
  let component: AtribindingComponent;
  let fixture: ComponentFixture<AtribindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtribindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
