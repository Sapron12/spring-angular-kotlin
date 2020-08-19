package com.example.demo.repositories

import com.example.demo.entities.Book
import org.springframework.data.repository.CrudRepository

interface BookRepositiry : CrudRepository<Book, Long> {
    fun findBooksByTitle(title: String): List<Book>?
}