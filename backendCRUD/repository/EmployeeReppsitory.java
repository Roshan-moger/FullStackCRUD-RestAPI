package com.Project.backendCRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Project.backendCRUD.Model.Employee;

public interface EmployeeReppsitory extends JpaRepository<Employee, Long> {

}
