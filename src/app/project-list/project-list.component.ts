import { AfterViewInit, Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProjectListDataSource } from './project-list-datasource';
import { ProjectAdministrationService, Project } from '../project-administration.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Project>;
  dataSource: ProjectListDataSource;

  projects: Project[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'category', 'access'];
  noProjects = false;

  constructor(private projectService: ProjectAdministrationService) { }
  
  ngOnInit() {
    this.projectService.getProjects()
    .subscribe((result: Project[]) => {
      this.projects = result;
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
