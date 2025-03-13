import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomFormComponent } from './nom-form.component';

describe('NomFormComponent', () => {
  let component: NomFormComponent;
  let fixture: ComponentFixture<NomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
