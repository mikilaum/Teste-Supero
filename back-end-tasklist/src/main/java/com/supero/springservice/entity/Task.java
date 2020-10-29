package com.supero.springservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;

/**
 * 
 * This class represents the Task entity, using spring annotations, field links
 * are created with the database.
 *
 * For more information, see:
 * https://docs.oracle.com/javaee/7/api/javax/persistence/package-summary.html
 * 
 */

@Entity
@Table(name = "task_list")
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "task_id")
	private int id;

	@Column(name = "task_name")
	private String taskName;

	@Column(name = "task_description")
	private String taskDescription;

	@Column(name = "task_finished")
	private int taskFinished = 0;

	public int getTaskId() {
		return id;
	}

	public void setTaskId(int taskId) {
		this.id = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	public int getTaskFinished() {
		return taskFinished;
	}

	public void setTaskFinished(int taskFinished) {
		this.taskFinished = taskFinished;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskName=" + taskName + ", taskDescription=" + taskDescription + ", taskFinished="
				+ taskFinished + "]";
	}

}
