import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpleadosComponent } from "./pages/empleados/empleados.component";
import { CreateEmpleadoComponent } from "./pages/create-empleado/create-empleado.component";
import { EditEmpleadoComponent } from "./pages/edit-empleado/edit-empleado.component";

const routes: Routes = [
  { path: "empleados", component: EmpleadosComponent },
  { path: "empleados/create", component: CreateEmpleadoComponent },
  { path: "empleados/:id/edit", component: EditEmpleadoComponent },
  { path: "**", redirectTo: "empleados", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
