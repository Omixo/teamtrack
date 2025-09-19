package com.example.mysqljava.Controller;

import com.example.mysqljava.Entity.EmployeeProject;
import com.example.mysqljava.Repository.EmployeeProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee-projects")
public class EmployeeProjectController {

    @Autowired
    private EmployeeProjectRepository employeeProjectRepository;

    // Get all mappings
    @GetMapping("/readall")
    public List<EmployeeProject> getAll() {
        return employeeProjectRepository.findAll();
    }

    // Get mapping by ID
    @GetMapping("/read/{id}")
    public ResponseEntity<EmployeeProject> getById(@PathVariable Integer id) {
        return employeeProjectRepository.findById(id)
                .map(ep -> ResponseEntity.ok(ep))
                .orElse(ResponseEntity.notFound().build());
    }

    // Add new mapping
    @PostMapping("/add")
    public ResponseEntity<EmployeeProject> add(@RequestBody EmployeeProject ep) {
        EmployeeProject saved = employeeProjectRepository.save(ep);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Update mapping
    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeProject> update(@PathVariable Integer id, @RequestBody EmployeeProject updated) {
        return employeeProjectRepository.findById(id)
                .map(ep -> {
                    ep.setEmployeeId(updated.getEmployeeId());
                    ep.setProjectId(updated.getProjectId());
                    EmployeeProject saved = employeeProjectRepository.save(ep);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete mapping
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (!employeeProjectRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        employeeProjectRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
