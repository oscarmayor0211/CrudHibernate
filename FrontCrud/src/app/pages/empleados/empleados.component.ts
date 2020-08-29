import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "../../services/empleado.service";
import { Empleado } from "../../models/Empleado.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",
  styleUrls: ["./empleados.component.css"],
})
export class EmpleadosComponent implements OnInit {
  empleado: Empleado[] = [];
  seElimino: boolean = false;
  constructor(private empleadoService: EmpleadoService) {
    this.getAllEmpleados();
  }

  ngOnInit() {}

  getAllEmpleados() {
    this.empleadoService.getAllEmpleados().subscribe((empleado: any) => {
      this.empleado = empleado;
      console.log(empleado);
    });
  }

  deleteEmpleado(id: number) {
    Swal.fire({
      title: "Desear Eliminar el empleado?",
      text: "Eliminar el empleado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
    }).then((borrar) => {
      if (borrar.value) {
        this.empleadoService.deleteEmpleado(id).subscribe((empleado: any) => {
          this.getAllEmpleados();
        });
      }
    });
  }
}
