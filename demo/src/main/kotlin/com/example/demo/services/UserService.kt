package com.example.demo.services

import com.example.demo.entities.User
import com.example.demo.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(val userRepository: UserRepository) {

    fun all(): List<User> = userRepository.findAll()

    fun add(user: User) = userRepository.save(user)

    fun getByName(name: String): List<User>? = userRepository.findUserByName(name)
}
