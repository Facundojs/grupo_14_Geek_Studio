

##DROP database geekdb2;
CREATE database geekdb2;

USE geekdb2;


CREATE TABLE `categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`category_id` INT NOT NULL,
	`price` DECIMAL NOT NULL,
	`discount` INTEGER,
	`image` VARCHAR(255) NOT NULL,
	`features` TEXT NOT NULL, 
	`createdAt` DATE, 
	`updatedAt` DATE,
	`deletedAt` DATE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_type` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`type_name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`telephone` INT NOT NULL,
	`country` VARCHAR(255),
	`avatar` VARCHAR(255),
	`user_type_id` INT NOT NULL,
	`createdAt` DATE,
	`updatedAt` DATE,
	`deletedAt` DATE,
	PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_fk0` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

