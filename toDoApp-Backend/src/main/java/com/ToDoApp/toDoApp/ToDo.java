package com.ToDoApp.toDoApp;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ToDo {
	
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private boolean done;
	private Date targetDate;
	
	protected ToDo() {
		
	}
	
	public ToDo(Long id, String username, String description, boolean done, Date targetDate) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.done = done;
		this.targetDate = targetDate;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public boolean getDone() {
		return done;
	}
	
	public void setDone(boolean done) {
		this.done = done;
	}
	
	public Date getTargetDate() {
		return targetDate;
	}
	
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	
	@Override
	public String toString() {
		return "ToDo [id=" + id + ", username=" + username + " description=" + description + ", done=" + done + ", targetDate="
				+ targetDate + "]";
	}
}
