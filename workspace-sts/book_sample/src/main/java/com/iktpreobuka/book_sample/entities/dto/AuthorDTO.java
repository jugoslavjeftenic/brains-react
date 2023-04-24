package com.iktpreobuka.book_sample.entities.dto;

import java.util.ArrayList;
import java.util.List;

import com.iktpreobuka.book_sample.entities.Author;
import com.iktpreobuka.book_sample.entities.Book;

public class AuthorDTO {
	protected Long id;

	String name;

	protected List<BookDTO> books;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<BookDTO> getBooks() {
		return books;
	}

	public void setBooks(List<BookDTO> books) {
		this.books = books;
	}

	public AuthorDTO() {
		super();
		this.books = new ArrayList<>();
	}
	
	public AuthorDTO(Author a) {
		super();
		this.name = a.getName();
		this.id = a.getId();
		this.books = new ArrayList<>();
		for(Book b : a.getBooks()) {
			BookDTO bd = new BookDTO(b);
			this.books.add(bd);
		}
	}
}
