package com.supero.springservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 * 
 * This class is used to facilitate the creation and execution of the
 * application that supports the use of rest, bootstrap among other facilities
 * of the spring framework in an "automated" way.
 * 
 * For more information see:
 * https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-spring-application.html
 * 
 */

@Configuration
@ComponentScan
@EnableJpaRepositories
@Import(RepositoryRestMvcConfiguration.class)
@EnableAutoConfiguration
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}