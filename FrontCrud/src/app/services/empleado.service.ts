import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICE } from "../config/config";
import { Empleado } from "../models/Empleado.model";

@Injectable({
  providedIn: "root",
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  getAllEmpleados() {
    let url = URL_SERVICE;
    return this.http.get(url);
  }

  getAllEmpleadoById(id: number) {
    let url = URL_SERVICE + "/" + id;
    return this.http.get(url);
  }
  postEmpleado(empleado: Empleado) {
    let url = URL_SERVICE;
    return this.http.post(url, empleado);
  }

  putEmpleado(empleado: Empleado) {
    let url = URL_SERVICE + "/" + empleado.id + "/edit";
    return this.http.put(url, empleado);
  }

  deleteEmpleado(id: number) {
    let url = URL_SERVICE + "/" + id + "/delete";
    return this.http.delete(url);
  }
}
