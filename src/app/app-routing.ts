import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodosComponent } from "./MyComponents/todos/todos.component";

export const routes: Routes = [
  { path: "", component: TodosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { useHash: true, scrollPositionRestoration: 'enabled' }*/)],
  exports: [RouterModule],
})
export class AppRouting { }
