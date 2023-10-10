import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhysicianComponent } from './edit-physician.component';

describe('EditPhysicianComponent', () => {
  let component: EditPhysicianComponent;
  let fixture: ComponentFixture<EditPhysicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPhysicianComponent]
    });
    fixture = TestBed.createComponent(EditPhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});