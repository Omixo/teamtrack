package com.example.mysqljava.Repository;

import com.example.mysqljava.Entity.EmployeeProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeProjectRepository extends JpaRepository<EmployeeProject, Integer> {
}
