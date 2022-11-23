
CREATE SCHEMA red_social;


USE red_social;
       
 
 
 CREATE TABLE usuarios (
 idUsuarios INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 email VARCHAR(100) NOT NULL UNIQUE,
 username varchar(250) NOT NULL UNIQUE,
 contrasenia VARCHAR (100) NOT NULL,
 textoPerfil varchar (250),
 fecha DATE,
 dni int NOT NULL UNIQUE,
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp
 );
 
 
CREATE TABLE posteos (
 idPosteos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 foto varchar(250) NOT NULL,
 textoDescriptivo varchar(500) NOT NULL,
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp,
 
 fkUserId int unsigned,
 foreign key (fkUserId) references usuarios(idUsuarios)
 );
 
 
 CREATE TABLE comentarios (
 idComentarios INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 textoDescriptivo varchar(500) NOT NULL,
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp,
 
 fkUserId int unsigned,
 foreign key (fkUserId) references usuarios(idUsuarios),
 
 fkPostId int unsigned,
 foreign key (fkPostId) references posteos(idPosteos)
 );
 
 
 
 INSERT INTO usuarios
 values (default, 'iaracena@udesa.edu.ar', 'gzzy', 'ignacio2001', '2001-10-10', 43698744);
  

 
 
INSERT INTO posteos
values ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3),('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3), ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3), ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3); 

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);



 
 
 
 
 