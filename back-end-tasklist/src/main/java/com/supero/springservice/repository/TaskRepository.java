package com.supero.springservice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.supero.springservice.entity.Task;

/**
 *
 * This class implements by spring @RepositoryRestResource annotation the
 * "automatic" creation of a repository rest with the standard http methods for
 * a basic crud.
 * 
 * For more information see:
 * https://docs.spring.io/spring-data/rest/docs/current/reference/html/
 * 
 * Here is also implemented through the @CrossOrigin annotation the pointing to
 * the front-end server.
 * 
 * For more information see:
 * https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/CrossOrigin.html
 * 
 */

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
public interface TaskRepository extends CrudRepository<Task, Integer> {
}
