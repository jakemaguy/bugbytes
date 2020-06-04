import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectAdministrationService } from '../project-administration.service';

@Component({
  selector: 'app-project-addition',
  templateUrl: './project-addition.component.html',
  styleUrls: ['./project-addition.component.css']
})
export class ProjectAdditionComponent implements OnInit {
  projectName = new FormControl('');
  projectCategory = new FormControl('');
  projectAccess = new FormControl('');
  
  constructor(
    private projectService: ProjectAdministrationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProject() {
    this.projectService.addProject({
      name: this.projectName.value,
      category: this.projectCategory.value,
      access: this.projectAccess.value
    });
    this.router.navigate(['/']);
  }

}
