import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdditionComponent } from './project-addition.component';

describe('ProjectAdditionComponent', () => {
  let component: ProjectAdditionComponent;
  let fixture: ComponentFixture<ProjectAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
