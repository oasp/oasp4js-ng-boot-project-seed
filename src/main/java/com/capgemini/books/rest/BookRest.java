package com.capgemini.books.rest;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/services/rest")
public class BookRest {

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public List<Book> getBooks() {
        return Arrays.asList(
            new Book(1000L, "John Example", "Super book..."),
            new Book(1001L, "Gavin King", "Hibernate in Action")
        );
    }
}
