/**
 * 
 */
package com.PruebaCrud.service;

import java.util.List;

import com.PruebaCrud.model.Empleado;

/**
 * @author Oscar Mayor
 *
 */
public interface EmpleadoService {

	Empleado createEmpleado(Empleado empleado);
	
	Empleado updateEmpleado(Empleado empleado);
	
	List<Empleado> getAllEmpleados();
	
	Empleado getEmpleadoById(long id);
	
	void deleteEmpleado(long id);
}
