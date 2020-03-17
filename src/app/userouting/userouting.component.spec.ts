import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroutingComponent } from './userouting.component';

describe('UseroutingComponent', () => {
  let component: UseroutingComponent;
  let fixture: ComponentFixture<UseroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
