package com.iktpreobuka.book_sample.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.iktpreobuka.book_sample.entities.Book;

public interface BookRepository extends CrudRepository<Book, Long>{
	List<Book> findByTitleContainingIgnoreCase(String title);
}
