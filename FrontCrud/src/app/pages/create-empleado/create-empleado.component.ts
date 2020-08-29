import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmpleadoService } from "../../services/empleado.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-create-empleado",
  templateUrl: "./create-empleado.component.html",
  styleUrls: ["./create-empleado.component.css"],
})
export class CreateEmpleadoComponent implements OnInit {
  forma: FormGroup;
  seGuardo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService
  ) {
    this.crearFormulario();
  }

  ngOnInit() {}

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      cedula: ["", [Validators.required, Validators.minLength(5)]],
      correo: [
        "",
        [
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
          Validators.required,
        ],
      ],
      telefono: ["", [Validators.required, Validators.minLength(5)]],
    });
  }
  get NombreInvalid() {
    return this.forma.get("nombre").invalid && this.forma.get("nombre").touched;
  }
  get ApellidoInvalid() {
    return (
      this.forma.get("apellido").invalid && this.forma.get("apellido").touched
    );
  }
  get CedulaInvalid() {
    return this.forma.get("cedula").invalid && this.forma.get("cedula").touched;
  }
  get CorreoInvalid() {
    return this.forma.get("correo").invalid && this.forma.get("correo").touched;
  }
  get TelefonoInvalid() {
    return (
      this.forma.get("telefono").invalid && this.forma.get("telefono").touched
    );
  }
  postEmpleado() {
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAllAsTouched();
          });
        } else {
          control.markAllAsTouched();
        }
      });
    } else {
      this.empleadoService
        .postEmpleado(this.forma.value)
        .subscribe((empleado) => {
          Swal.fire("Usuario Registrado");
          this.resetFormulario();
        });
    }
  }

  resetFormulario() {
    this.forma.reset({
      nombre: "",
      apellido: "",
      cedula: "",
      correo: "",
      telefono: "",
    });
  }
}
