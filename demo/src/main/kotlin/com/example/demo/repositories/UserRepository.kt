package com.example.demo.repositories

import com.example.demo.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.security.core.userdetails.UserDetails

interface UserRepository : JpaRepository<User, Long> {
    fun findUserByUsername(title: String): User?
}
