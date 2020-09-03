package com.example.demo.services

import com.example.demo.entities.Role
import com.example.demo.entities.User
import com.example.demo.repositories.UserRepository
import org.springframework.stereotype.Service
import java.util.*
import java.util.Collections.singleton

@Service
class UserService(val userRepository: UserRepository) {

    fun all(): List<User>? = userRepository.findAll()

    fun add(user: User): Boolean {
        return Optional.ofNullable(userRepository.findUserByUsername(user.username))
                .map { false }
                .orElseGet {
                    user.setAuthorities(singleton(Role.USER))
                    userRepository.save(user)
                    true
                }
    }

    fun getByName(name: String): User? = userRepository.findUserByUsername(name)

    fun delete(id: Long) = userRepository.deleteById(id)
}
