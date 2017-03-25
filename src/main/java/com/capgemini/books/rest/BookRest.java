package com.capgemini.books.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRest {
    @RequestMapping(path = "/say-hello")
    public String hello() {
        return "Hello World!";
    }
}
