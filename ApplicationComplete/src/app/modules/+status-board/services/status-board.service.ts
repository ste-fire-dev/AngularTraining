import { StatusBoardDataService } from './../data/status-board.data.service';
import { Injectable } from "@angular/core";
import { Ticket, TicketStatus } from '../../../model/ticket.model';

@Injectable()
export class StatusBoardService {
    constructor(private service: StatusBoardDataService) {}

    getDepartments() {
        console.log('2');
        return this.service.getDepartments();
    }

    getTickets() {
        const dataSource = [];
        for (let i=0; i < 10; i++) {
            const ticket = new Ticket();
            ticket.title = 'TITLE ' + i;
            ticket.status = (i % 3 === 0 ? TicketStatus.OPEN : TicketStatus.CLOSED);
            ticket.department = 'Department ' + (i % 5 + 1);
            ticket.creator = 'USER ' + i % 3;
            ticket.asignee = 'USER ' + i % 2;
            dataSource.push(ticket);
        }
        return dataSource;
    }
}