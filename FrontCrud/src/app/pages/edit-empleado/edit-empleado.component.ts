import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmpleadoService } from "../../services/empleado.service";
import { Empleado } from "../../models/Empleado.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-empleado",
  templateUrl: "./edit-empleado.component.html",
  styleUrls: ["./edit-empleado.component.css"],
})
export class EditEmpleadoComponent implements OnInit {
  forma: FormGroup;
  seEdito: boolean = false;
  empleado: Empleado;
  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.createFormulario();
    this.getAllEmpleadoById(id);
  }

  ngOnInit() {}

  createFormulario() {
    this.forma = this.fb.group({
      id: [""],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      cedula: ["", Validators.required],
      telefono: ["", Validators.required],
      correo: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
    });
  }

  putEmpleado() {
    this.empleadoService.putEmpleado(this.forma.value).subscribe((empleado) => {
      this.seEdito = true;
    });
  }

  getAllEmpleadoById(id: number) {
    this.empleadoService.getAllEmpleadoById(id).subscribe((empleado: any) => {
      this.empleado = empleado;
      this.forma.setValue({
        id: this.empleado.id,
        nombre: this.empleado.nombre,
        apellido: this.empleado.apellido,
        correo: this.empleado.correo,
        cedula: this.empleado.cedula,
        telefono: this.empleado.telefono,
      });
    });
  }
}
