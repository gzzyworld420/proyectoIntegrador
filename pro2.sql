
CREATE SCHEMA red_social;


USE red_social;
       
 
 
 CREATE TABLE usuarios (
 id_usuarios INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 email VARCHAR(100) NOT NULL UNIQUE,
 username varchar(250) NOT NULL UNIQUE,
 contrasenia VARCHAR (100) NOT NULL,
 texto_perfil varchar (250),
 fecha DATE,
 dni int NOT NULL UNIQUE,
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp
 );
 
 
CREATE TABLE posteos (
 id_posteos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 foto varchar(250) NOT NULL,
 texto_descriptivo varchar(500) NOT NULL,
 
 
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp,
 
 
 FkUserId int unsigned,
 foreign key (FkUserId) references usuarios(id_usuarios)
 );
 
 
 CREATE TABLE comentarios (
 id_comentarios INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 texto_descriptivo varchar(500) NOT NULL,
 
 
 createdAt timestamp default current_timestamp,
 updatedAt timestamp default current_timestamp on update current_timestamp,
 deletedAt timestamp default current_timestamp,
 
 
 FkUserId int unsigned,
 foreign key (FkUserId) references usuarios(id_usuarios),
 
 FkPostId int unsigned,
 foreign key (FkPostId) references posteos(id_posteos)
 );
 
 
 
 INSERT INTO usuarios (email,username,contrasenia,fecha,dni)
 values ('iaracena@udesa.edu.ar', 'gzzy', 'ignacio2001', '2001-10-10', 43698744);
  
INSERT INTO usuarios (email,username,contrasenia,fecha,dni)
values ('lgarroni@udesa.edu.ar', 'lucas', 'lucas2001', '2002-10-10', 43698745);
 
INSERT INTO usuarios (email,username,contrasenia,fecha,dni)
values ('trombola@udesa.edu.ar', 'rombo', 'rivercampeon', '2003-07-03', 45687544);
 
 
INSERT INTO posteos (foto, texto_descriptivo, FkUserId)
values ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3),('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3), ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3), ('https://github.com/gzzyworld420/proyectoIntegrador/settings/pages','texto para el posteo', 3); 

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);

INSERT INTO comentarios (texto_descriptivo, FkUserId, FkPostId)
values ('texto descriptivo', 3 , 2);
 
 
 
 
 
 
 
 
 