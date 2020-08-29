/**
 * 
 */
package com.PruebaCrud.exception;

/**
 * @author Oscar Mayor
 *
 */
public class ResourceNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 */
	public ResourceNotFoundException(String message) {
		// TODO Auto-generated constructor stub
		super(message);
	}
	
	public ResourceNotFoundException(String message, Throwable throwable) {
		super (message, throwable);
	}

}
