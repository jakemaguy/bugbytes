import { AfterViewInit, Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProjectListDataSource, ProjectListItem } from './project-list-datasource';
import { ProjectAdministrationService } from '../project-administration.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProjectListItem>;
  dataSource: ProjectListDataSource;
  project: any;
  subscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  noProjects = true;

  constructor(private projectService: ProjectAdministrationService) {
    this.subscription = projectService.projectStream$.subscribe(
      project => {
        this.project = {
          name: project.name,
          category: project.category,
          access: project.access
        };
        console.log(`from project list component: ${this.project.name}`)
      });
  }
  ngOnInit() {
    this.dataSource = new ProjectListDataSource();
  }

  ngAfterViewInit() {
    if (this.noProjects !== true) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }
  }
}
