import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypicklistComponent } from './mypicklist.component';

describe('MypicklistComponent', () => {
  let component: MypicklistComponent;
  let fixture: ComponentFixture<MypicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
