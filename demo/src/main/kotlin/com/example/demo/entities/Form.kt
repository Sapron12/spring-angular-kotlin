package com.example.demo.entities

import java.io.File
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.ManyToOne


@Entity
class Form(@Id @GeneratedValue var id: Long, @ManyToOne var user: User, var text: String, var date: Date, var file: File) {
}

