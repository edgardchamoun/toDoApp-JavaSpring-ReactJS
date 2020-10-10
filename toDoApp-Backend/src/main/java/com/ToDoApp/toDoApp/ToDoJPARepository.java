package com.ToDoApp.toDoApp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoJPARepository extends JpaRepository<ToDo, Long> {
	List<ToDo> findByUsername(String username);
}
