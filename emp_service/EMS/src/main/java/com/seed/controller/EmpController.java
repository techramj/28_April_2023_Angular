package com.seed.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.seed.entity.Employee;
import com.seed.service.EmpService;

@RestController
public class EmpController {

	@Autowired
	private EmpService empService;

	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return empService.getAllEmployees();
	}

	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee emp) {
		return empService.addEmployee(emp);
	}

	@DeleteMapping("/employees/{id}")
	public Employee deleteEmployee(@PathVariable Long id) {

		return empService.deleteEmployee(id);
	}

	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
		return empService.updateEmployee(emp);
	}

}
