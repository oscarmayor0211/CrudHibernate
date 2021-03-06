/**
 * 
 */
package com.PruebaCrud.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

/**
 * @author Oscar Mayor
 *
 */
@Data
@Entity
@Table(name="empleados")
public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "apellido")
	private String apellido;
	
	@Column(name ="cedula")
	private long cedula;
	
	@Column(name ="correo")
	private String correo;
	
	@Column(name = "telefono")
	private long telefono;
	
	@CreationTimestamp
	private Date createAt;
	
	@UpdateTimestamp
	private Date updateAt;
}
