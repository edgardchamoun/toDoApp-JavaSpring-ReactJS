package com.ToDoApp.toDoApp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoHardcodedService {

	private static List<ToDo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new ToDo(++idCounter, "User 1", "Learn React", false, new Date()));
		todos.add(new ToDo(++idCounter, "User 2", "Learn Fast", true, new Date()));
		todos.add(new ToDo(++idCounter, "User 3", "Learn Slow", false, new Date()));
	}
	
	public List<ToDo> findAll() {
		return todos;
	}
	
	public ToDo Save(ToDo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public ToDo deleteById(long id) {
		ToDo todo = findById(id);
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	
	public ToDo findById(long id) {
		for(ToDo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
