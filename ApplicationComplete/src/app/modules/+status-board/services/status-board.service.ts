import { StatusBoardDataService } from './../data/status-board.data.service';
import { Injectable } from "@angular/core";

@Injectable()
export class StatusBoardService {
    constructor(private service: StatusBoardDataService) {}

    getDepartments() {
        console.log('2');
        return this.service.getDepartments();
    }
}