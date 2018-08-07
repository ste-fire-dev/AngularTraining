import { StatusBoardService } from './../../services/status-board.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// As per https://github.com/web-dave/provide-in-test/issues/1

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {

  departments: any[] = [];

  constructor(private service: StatusBoardService) { }

  ngOnInit() {
    console.log('1');
    this.service.getDepartments().subscribe(
      departments => {
        console.log(departments);
        this.departments = departments;
      }
    );
  }

  openAddDepartmentModal() {

  }

}
