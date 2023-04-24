package com.iktpreobuka.book_sample.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.iktpreobuka.book_sample.entities.Author;

public interface AuthorRepository extends CrudRepository<Author, Long>{
	List<Author> findByName(String name);
	List<Author> findByNameContainingIgnoreCase(String name);
}
