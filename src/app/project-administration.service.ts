import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdministrationService {

  private projectObject = new Subject<any>();

  projectStream$ = this.projectObject.asObservable();

  submitProject(project: any) {
    console.log(project)
    this.projectObject.next(project);
  }

  constructor() { }
}
