package com.Project.backendCRUD.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.backendCRUD.EmployeeDto;
import com.Project.backendCRUD.Exception.ResourceException;
import com.Project.backendCRUD.Mapper.EmployeeMapper;
import com.Project.backendCRUD.Model.Employee;
import com.Project.backendCRUD.repository.EmployeeReppsitory;


@Service
public class EmployeeServiceImpl  implements EmployeeService{

	
	@Autowired
	private EmployeeReppsitory employeeReppsitory;
	@Override
	
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		
		Employee savedEmployee= employeeReppsitory.save(employee);
		
		
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		
		Employee employee=employeeReppsitory.findById(employeeId).
		orElseThrow(()->new ResourceException("Emloyee is not exist with given id:"+employeeId));
		
		return EmployeeMapper.mapToEmployeeDto(employee);
	}
	@Override
	public List<EmployeeDto> getAllEmployee() {
		List<Employee> employees=employeeReppsitory.findAll();
		return  employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}
	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		
	Employee employee=	employeeReppsitory.findById(employeeId).orElseThrow(()->new ResourceException("Emloyee is not exist with given id:"+employeeId));
		
	employee.setFirstName(updatedEmployee.getFirstName());
	employee.setLastName(updatedEmployee.getLastName());
	employee.setEmail(updatedEmployee.getEmail());
	
	Employee updadatedEmployeeObj=employeeReppsitory.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(updadatedEmployeeObj);
	}
	
	
	
	@Override
	public void deleteEmployee(Long employeeId) {
		
		Employee employee=	employeeReppsitory.findById(employeeId)
				.orElseThrow(()->new ResourceException("Emloyee is not exist with given id:"+employeeId));
		
		employeeReppsitory.deleteById(employeeId);
		
		
	}

}
