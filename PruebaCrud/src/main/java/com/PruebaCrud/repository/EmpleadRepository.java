/**
 * 
 */
package com.PruebaCrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PruebaCrud.model.Empleado;

/**
 * @author Oscar Mayor
 *
 */
public interface EmpleadRepository extends JpaRepository<Empleado, Long> {

}
