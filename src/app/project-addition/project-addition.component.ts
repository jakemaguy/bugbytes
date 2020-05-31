import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  
  constructor(private projectService: ProjectAdministrationService) { }

  ngOnInit(): void {
  }

  sumbitResults() {
    console.log(this.projectName.value);
    console.log(this.projectCategory.value);
    console.log(this.projectAccess.value);
    this.projectService.submitProject({
      name: this.projectName.value,
      category: this.projectCategory.value,
      access: this.projectAccess.value
    });
  }

}
