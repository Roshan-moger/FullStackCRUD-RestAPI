package com.Project.backendCRUD.Service;

import java.util.List;

import com.Project.backendCRUD.EmployeeDto;

public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long EmployeeId);
	
	List<EmployeeDto> getAllEmployee();
	EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee );
	
	
	void deleteEmployee(Long employeeId);
	
	
	
}
