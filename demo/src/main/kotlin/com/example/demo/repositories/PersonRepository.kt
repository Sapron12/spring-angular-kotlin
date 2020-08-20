package com.example.demo.repositories

import com.example.demo.entities.Person
import org.springframework.data.repository.CrudRepository

interface PersonRepository : CrudRepository<Person, Long> {
    fun findPersonByName(title: String): List<Person>?
}
