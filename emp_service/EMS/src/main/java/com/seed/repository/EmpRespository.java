package com.seed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seed.entity.Employee;

@Repository
public interface EmpRespository extends JpaRepository<Employee, Long> {

}
