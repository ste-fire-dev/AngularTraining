import { LoginComponent } from "./modules/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: LoginComponent },
    { path: 'status-board', loadChildren: './modules/+status-board/status-board.module#StatusBoardModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
    declarations: []
})
export class AppRoutingModule { }