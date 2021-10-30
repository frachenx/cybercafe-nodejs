import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersArchivedComponent } from './users-archived.component';

describe('UsersArchivedComponent', () => {
  let component: UsersArchivedComponent;
  let fixture: ComponentFixture<UsersArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
