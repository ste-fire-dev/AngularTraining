import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { StatusBoardComponent } from './components/main/status-board.component';
import { StatusBoardRoutingModule } from './status-board.routing.module';
import { StatusBoardService } from './services/status-board.service';
import { StatusBoardDataService } from './data/status-board.data.service';

@NgModule({
  declarations: [
    StatusBoardComponent
  ],
  imports: [  
    CommonModule,
    StatusBoardRoutingModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    StatusBoardService,
    StatusBoardDataService
  ]
})
export class StatusBoardModule { }
