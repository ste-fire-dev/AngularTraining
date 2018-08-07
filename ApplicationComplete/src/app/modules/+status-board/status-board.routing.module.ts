import { StatusBoardComponent } from './components/main/status-board.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: StatusBoardComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
    declarations: []
})
export class StatusBoardRoutingModule {}