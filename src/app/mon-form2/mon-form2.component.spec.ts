import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonForm2Component } from './mon-form2.component';

describe('MonForm2Component', () => {
  let component: MonForm2Component;
  let fixture: ComponentFixture<MonForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
