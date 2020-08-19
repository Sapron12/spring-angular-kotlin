package com.example.demo.controllers

import com.example.demo.entities.Book
import com.example.demo.repositories.BookRepositiry
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RestController
class BookController(val repositiry: BookRepositiry) {

    @PostMapping("/book")
    fun addBook(@RequestBody book: Book) {
        repositiry.save(book)
    }

    @GetMapping("/books")
    fun getAllBooks() = repositiry.findAll().toList();

    @GetMapping("/books/{title}")
    fun getBookByTitle(@PathVariable("title") title: String): List<Book>? = repositiry.findBooksByTitle(title)

}