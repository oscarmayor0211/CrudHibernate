/**
 * 
 */
package com.PruebaCrud.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PruebaCrud.model.Empleado;
import com.PruebaCrud.service.EmpleadoService;

import lombok.RequiredArgsConstructor;

/**
 * @author Oscar Mayor
 *
 */
@RestController
@RequestMapping("/empleados")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoController {
	private final EmpleadoService empService;
	
	@GetMapping
	ResponseEntity<List<Empleado>> getAllEmpleados(){
		return ResponseEntity.ok().body(empService.getAllEmpleados());
	}
	
	@GetMapping("/{id}")
	ResponseEntity<Empleado> getEmpleadoById(@PathVariable Long id){
		return ResponseEntity.ok().body(empService.getEmpleadoById(id));
	}
	
	@PostMapping
	ResponseEntity<Empleado> createEmpleado(@RequestBody Empleado empleado){
		return ResponseEntity.ok().body(this.empService.createEmpleado(empleado));
	}
	
	@PutMapping("/{id}/edit")
	ResponseEntity<Empleado> updateEmpleado(@PathVariable Long id , @RequestBody Empleado empleado){
		empleado.setId(id);
		return ResponseEntity.ok().body(this.empService.updateEmpleado(empleado));
	}
	
	@DeleteMapping("/{id}/delete")
	ResponseEntity<?> deleteEmpleado(@PathVariable Long id){
		this.empService.deleteEmpleado(id);
		return ResponseEntity.noContent().build();
	}

}
