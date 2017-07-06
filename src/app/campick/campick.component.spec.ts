import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampickComponent } from './campick.component';

describe('CampickComponent', () => {
  let component: CampickComponent;
  let fixture: ComponentFixture<CampickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
