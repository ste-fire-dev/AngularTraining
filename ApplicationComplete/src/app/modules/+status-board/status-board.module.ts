import { NgModule } from '@angular/core';
import { StatusBoardComponent } from './status-board.component';
import { StatusBoardRoutingModule } from './status-board.routing.module';



@NgModule({
  declarations: [
    StatusBoardComponent
  ],
  imports: [  
    StatusBoardRoutingModule
  ]
})
export class StatusBoardModule { }
