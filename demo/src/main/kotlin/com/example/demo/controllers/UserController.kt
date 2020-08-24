package com.example.demo.controllers

import com.example.demo.entities.User
import com.example.demo.repositories.UserRepository
import com.example.demo.services.UserService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RestController
@RequestMapping("/user/")
class UserController(val userService: UserService) {

    @PostMapping("add")
    fun addUser(@RequestBody user: User) = userService.add(user)

    @GetMapping("all")
    fun getAllUsers() = userService.all()

    @GetMapping("{name}")
    fun getUserByName(@PathVariable("name") name: String): List<User>? = userService.getByName(name)

}
