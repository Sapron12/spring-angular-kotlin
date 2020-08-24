package com.example.demo.repositories

import com.example.demo.entities.User
import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Long> {
    fun findUserByName(title: String): List<User>?
}
