package com.example.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // Lombok magic for getters/setters
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password; // Keep this plain text for the pentesting activity
    private String subject;
    private Double grade;
}