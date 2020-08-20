package com.example.demo.controllers

import com.example.demo.entities.Person
import com.example.demo.repositories.PersonRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RestController
class PersonController(val repositiry: PersonRepository) {

    @PostMapping("/person")
    fun addPerson(@RequestBody person: Person) = repositiry.save(person)

    @GetMapping("/persons")
    fun getAllPersons() = repositiry.findAll().toList();

    @GetMapping("/person/{title}")
    fun getPersonByName(@PathVariable("title") title: String): List<Person>? = repositiry.findPersonByName(title)

}
