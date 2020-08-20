package com.example.demo.entities

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Person(@Id @GeneratedValue var id: Long, var name: String, var password: String, var phone: String)

