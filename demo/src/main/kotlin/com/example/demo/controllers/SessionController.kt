package com.example.demo.controllers

import com.example.demo.entities.User
import com.example.demo.services.UserService
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:4200"], allowedHeaders = ["Accept"])
@RestController
@RequestMapping("/session/")
class SessionController(val userService: UserService) {

    @GetMapping("/current-user")
    fun getUser(): User? = userService.getByName(SecurityContextHolder.getContext().authentication.name)

}
