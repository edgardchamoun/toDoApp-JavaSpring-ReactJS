package com.ToDoApp.toDoApp;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoJPAController {
	
	@Autowired
	private ToDoJPARepository toDoJPARepository;
	
	@GetMapping(path = "/jpa/users/{username}/todos")
	public List<ToDo> getAllToDos(@PathVariable String username) {
		return toDoJPARepository.findByUsername(username);
//		return toDoJPARepository.findAll();
	}
	
	@GetMapping(path = "/jpa/users/{username}/todos/{id}")
	public ToDo getTodo(@PathVariable String username, @PathVariable Long id) {
		return toDoJPARepository.findById(id).get();
	}
	
	
	@DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		toDoJPARepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(path = "/jpa/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody ToDo todo) {
		todo.setUsername(username);
		ToDo updatedTodo = toDoJPARepository.save(todo);
		return new ResponseEntity<ToDo>(updatedTodo, HttpStatus.OK);
	}
	
	@PostMapping(path = "/jpa/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody ToDo todo) {
		todo.setUsername(username);
		
		ToDo createdTodo = toDoJPARepository.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
