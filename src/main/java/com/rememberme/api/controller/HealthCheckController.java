package com.rememberme.api.controller;

import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HealthCheckController {

    @GetMapping("/health")
    public Object health() {
        return ResponseEntity.ok(Map.of(
            "status", "ok",
            "service", "remember-me-api"
        ));
    }
}