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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    StatusBoardComponent
  ],
  imports: [  
    CommonModule,
    StatusBoardRoutingModule,
    MatGridListModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    StatusBoardService,
    StatusBoardDataService
  ]
})
export class StatusBoardModule { }
