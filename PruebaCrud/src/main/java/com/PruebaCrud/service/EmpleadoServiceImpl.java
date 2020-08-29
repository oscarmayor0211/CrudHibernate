/**
 * 
 */
package com.PruebaCrud.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.PruebaCrud.model.Empleado;
import com.PruebaCrud.repository.EmpleadRepository;

import lombok.RequiredArgsConstructor;

/**
 * @author Oscar Mayor
 *
 */
@Service
@Transactional
@RequiredArgsConstructor
public class EmpleadoServiceImpl implements EmpleadoService{
	private final EmpleadRepository empleadRepository;

	@Override
	public List<Empleado> getAllEmpleados(){
		return empleadRepository.findAll();
	}
	
	@Override
	public Empleado getEmpleadoById(long id) {
		return empleadRepository.findById(id).orElseThrow(()-> new ResourceAccessException("No existe el empleado con el id:"+ id));
	}
	
	@Override
	public Empleado createEmpleado(Empleado empleado) {
		return empleadRepository.save(empleado);
	}
	
	@Override
	public Empleado updateEmpleado(Empleado empleado) {
		Empleado empleadoUpdate = empleadRepository.findById(empleado.getId()).orElseThrow(()-> new ResourceAccessException("No se encontro el empleado con el id:" + empleado.getId()));
		
		empleadoUpdate.setId(empleado.getId());
		empleadoUpdate.setNombre(empleado.getNombre());
		empleadoUpdate.setApellido(empleado.getApellido());
		empleadoUpdate.setCorreo(empleado.getCorreo());
		empleadoUpdate.setCedula(empleado.getCedula());
		empleadoUpdate.setTelefono(empleado.getTelefono());
		
		empleadRepository.save(empleadoUpdate);
		return empleadoUpdate;
	}
	
	@Override
	public void deleteEmpleado(long id) {
		Empleado empleado = empleadRepository.findById(id).orElseThrow(() -> new ResourceAccessException("No se encontro el empleado con el id:" + id));
		empleadRepository.delete(empleado);
	}

}
