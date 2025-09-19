package com.example.mysqljava.Controller;

import com.example.mysqljava.Entity.Project;
import com.example.mysqljava.Repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    // Get all projects
    @GetMapping("/readall")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    @GetMapping("/read/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Integer id) {
        return projectRepository.findById(id)
                .map(project -> ResponseEntity.ok(project))
                .orElse(ResponseEntity.notFound().build());
    }

    // Add new project
    @PostMapping("/add")
    public ResponseEntity<Project> addProject(@RequestBody Project project) {
        Project saved = projectRepository.save(project);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Update project
    @PutMapping("/update/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Integer id, @RequestBody Project updatedProject) {
        return projectRepository.findById(id)
                .map(project -> {
                    project.setProjectName(updatedProject.getProjectName());
                    project.setDescription(updatedProject.getDescription());
                    Project saved = projectRepository.save(project);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete project
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Integer id) {
        if (!projectRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        projectRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
