import { StatusBoardService } from './../../services/status-board.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Ticket, TicketStatus } from '../../../../model/ticket.model';

// As per https://github.com/web-dave/provide-in-test/issues/1

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBoardComponent implements OnInit {

  departments: any[] = [];

  displayedColumns: string[] = [
    'title',
    'status',
    'department',
    'creator',
    'asignee'
  ];

  dataSource = [];

  constructor(private service: StatusBoardService) { }

  ngOnInit() {

    this.dataSource = this.service.getTickets();

    this.service.getDepartments().subscribe(
      departments => {
        this.departments = departments;
      }
    );
  }

  openAddDepartmentModal() {

  }

}
