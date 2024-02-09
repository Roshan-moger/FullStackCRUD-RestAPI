package com.Project.backendCRUD.Mapper;

import com.Project.backendCRUD.EmployeeDto;
import com.Project.backendCRUD.Model.Employee;

public class EmployeeMapper {

	
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getEmail()
				);
				
	}
	
	public static Employee mapToEmployee(EmployeeDto employeeDto) {
		return new Employee(
				employeeDto.getId(),
				employeeDto.getFirstName(),
				employeeDto.getLastName(),
				employeeDto.getEmail());
				
	}
}
