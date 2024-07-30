import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroprojectComponent } from './microproject.component';

describe('MicroprojectComponent', () => {
  let component: MicroprojectComponent;
  let fixture: ComponentFixture<MicroprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
