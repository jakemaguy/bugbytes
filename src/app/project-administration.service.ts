import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Project { name: string, category: string, access: string }

@Injectable({
  providedIn: 'root'
})
export class ProjectAdministrationService {

  private projectObject = new Subject<any>();

  projectStream$ = this.projectObject.asObservable();

  // submitProject(project: any) {
  //   console.log(project)
  //   this.projectObject.next(project);
  // }

  constructor(private angularFirestore: AngularFirestore) { }

  getProjects() {
    return this.angularFirestore.collection('/projects').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { ...data as Project };
      }))
    );
  }

  addProject(project: Project) {
    return this.angularFirestore.collection('projects').add({
      name: project.name,
      category: project.category,
      access: project.access
    });
  }
}
