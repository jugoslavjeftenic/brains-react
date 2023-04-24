package com.iktpreobuka.book_sample.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.iktpreobuka.book_sample.entities.Genre;

public interface GenreRepository extends CrudRepository<Genre, Long> {
	List<Genre> findByName(String name);
	List<Genre> findByNameContainingIgnoreCase(String name);
}
