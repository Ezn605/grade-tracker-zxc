package com.example.controller;

import com.example.model.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Connects to your React app
public class StudentController {

    @PersistenceContext
    private EntityManager entityManager;

    @PostMapping("/login")
    public List<Student> login(@RequestBody Student loginRequest) {

        String sql = "SELECT * FROM students WHERE username = '" + loginRequest.getUsername() +
                "' AND password = '" + loginRequest.getPassword() + "'";

        System.out.println("Executing SQL: " + sql); // This will show the hack in your IntelliJ console

        Query query = entityManager.createNativeQuery(sql, Student.class);
        return query.getResultList();
    }
}