package com.example.mysqljava.Controller;

import com.example.mysqljava.Entity.Department;
import com.example.mysqljava.Repository.DepartmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    // Get all departments
    @GetMapping("/readall")
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    // Get department by ID
    @GetMapping("/read/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable Integer id) {
        return departmentRepository.findById(id)
                .map(department -> ResponseEntity.ok(department))
                .orElse(ResponseEntity.notFound().build());
    }

    // Add new department
    @PostMapping("/add")
    public ResponseEntity<Department> addDepartment(@RequestBody Department dept) {
        Department saved = departmentRepository.save(dept);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Update department
    @PutMapping("/update/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable Integer id, @RequestBody Department updatedDept) {
        return departmentRepository.findById(id)
                .map(dept -> {
                    dept.setDeptName(updatedDept.getDeptName());
                    Department saved = departmentRepository.save(dept);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete department
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Integer id) {
        if (!departmentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        departmentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
