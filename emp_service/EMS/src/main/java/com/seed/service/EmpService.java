package com.seed.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seed.entity.Employee;
import com.seed.repository.EmpRespository;

@Service
public class EmpService {

	@Autowired
	private EmpRespository empRespository;

	public Employee addEmployee(Employee emp) {
		return empRespository.save(emp);
	}

	public Employee deleteEmployee(Long id) {
		Optional<Employee> emp = empRespository.findById(id);
		if (emp.isPresent()) {
			empRespository.delete(emp.get());
		}

		return emp.orElse(null);

	}

	public Employee updateEmployee(Employee emp) {
		return empRespository.save(emp);
	}

	public Employee getEmployeeDetail(Long id) {
		Optional<Employee> emp = empRespository.findById(id);
		return emp.orElse(null);
	}
	
	public List<Employee> getAllEmployees(){
		return empRespository.findAll();
	}

}
