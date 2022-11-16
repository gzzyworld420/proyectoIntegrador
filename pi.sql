CREATE SCHEMA `shoes_social` ;

CREATE TABLE `shoes_social`.`usuarios` (
  `idUsuarios` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(500) NOT NULL,
  `username` VARCHAR(500) NOT NULL,
  `contrasenia` VARCHAR(500) NOT NULL,
  `textoPerfil` VARCHAR(500) NULL DEFAULT NULL,
  `fecha` DATE NULL DEFAULT NULL,
  `dni` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC));

CREATE TABLE `shoes_social`.`posteos` (
  `idPosteos` INT(10) UNSIGNED NOT NULL,
  `imagenNombre` VARCHAR(500) NOT NULL,
  `textoDescriptivo` VARCHAR(500) NOT NULL,
  `posteoFk` INT(10) UNSIGNED NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idPosteos`));


CREATE TABLE `shoes_social`.`comentarios` (
  `postId` INT(10) UNSIGNED NULL DEFAULT NULL,
  `userId` INT(10) UNSIGNED NULL DEFAULT NULL,
  `textoCommentario` VARCHAR(500) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

  ALTER TABLE `shoes_social`.`posteos` 
CHANGE COLUMN `posteoFk` `fkUserId` INT(10) UNSIGNED NOT NULL ;

 ALTER TABLE `shoes_social`.`comentarios` 
ADD COLUMN `idComentarios` INT(10) UNSIGNED NOT NULL FIRST,
CHANGE COLUMN `postId` `fkPostId` INT(10) UNSIGNED NULL DEFAULT NULL ,
CHANGE COLUMN `userId` `fkUserId` INT(10) UNSIGNED NULL ,
CHANGE COLUMN `textoCommentario` `textoDescriptivo` VARCHAR(500) NOT NULL ,
ADD PRIMARY KEY (`idComentarios`);
;

ALTER TABLE `shoes_social`.`posteos` 
CHANGE COLUMN `imagenNombre` `foto` VARCHAR(500) NOT NULL ;

ALTER TABLE `shoes_social`.`comentarios` 
CHANGE COLUMN `fkPostId` `FkPostId` INT(10) UNSIGNED NULL DEFAULT NULL ,
CHANGE COLUMN `fkUserId` `FkUserId` INT(10) UNSIGNED NULL DEFAULT NULL ;
ALTER TABLE `shoes_social`.`posteos` 
CHANGE COLUMN `fkUserId` `FkUserId` INT(10) UNSIGNED NOT NULL ;

ALTER TABLE `shoes_social`.`usuarios` 
CHANGE COLUMN `fecha` `fecha` VARCHAR(500) NULL DEFAULT NULL ;

ALTER TABLE `shoes_social`.`usuarios` 
CHANGE COLUMN `dni` `dni` INT(10) NOT NULL ;

INSERT INTO `shoes_social`.`usuarios` (`idUsuarios`, `email`, `username`, `contrasenia`, `dni`) VALUES ('2', 'udesa.edu.ar@', 'Seggy_ben', '1222', '22');

