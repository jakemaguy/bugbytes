import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProjectAdditionComponent } from './project-addition/project-addition.component';


const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'add-project', component: ProjectAdditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
