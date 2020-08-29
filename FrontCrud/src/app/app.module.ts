import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpleadosComponent } from "./pages/empleados/empleados.component";
import { EditEmpleadoComponent } from "./pages/edit-empleado/edit-empleado.component";
import { CreateEmpleadoComponent } from "./pages/create-empleado/create-empleado.component";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EditEmpleadoComponent,
    CreateEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
