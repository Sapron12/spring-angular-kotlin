package com.example.demo.controllers

import com.example.demo.entities.User
import com.example.demo.services.UserService
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:4200"], allowedHeaders = ["Accept"])
@RestController
@RequestMapping("/user/")
class UserController(val userService: UserService) {

    @PostMapping("registration")
    fun addUser(@RequestBody user: User): Boolean = userService.add(user)

    @GetMapping("all")
    fun getAllUsers(): List<User>? = userService.all()

    @GetMapping("{name}")
    fun getUserByName(@PathVariable("name") name: String): User? = userService.getByName(name)

    @DeleteMapping("delete/{id}")
    fun deleteUser(@PathVariable("id") id: Long) = userService.delete(id)
}
