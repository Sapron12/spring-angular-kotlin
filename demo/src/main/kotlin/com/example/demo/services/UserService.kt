package com.example.demo.services


import com.example.demo.entities.User
import com.example.demo.entities.enums.Role
import com.example.demo.repositories.UserRepository
import java.util.Collections.singleton
import java.util.Optional.ofNullable
import org.springframework.stereotype.Service

@Service
class UserService(val userRepository: UserRepository) {

    fun all(): List<User>? = userRepository.findAll()

    fun add(user: User): Boolean {
        return ofNullable(userRepository.findUserByUsername(user.username))
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
