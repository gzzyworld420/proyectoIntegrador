CREATE SCHEMA `red social` ;

CREATE TABLE `red_social`.`posteos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(500) NOT NULL,
  `texto_descripcion` VARCHAR(500) NOT NULL,
  `id_users` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));

CREATE TABLE `red_social`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(500) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NULL DEFAULT '4444',
  `foto_perfil` VARCHAR(100) BINARY NOT NULL,
  `dni` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));
  
CREATE TABLE `red_social`.`comments` (
  `id` INT(10) UNSIGNED NOT NULL,
  `id_posts` INT(10) NULL DEFAULT NULL,
  `id_users` INT(10) NULL DEFAULT NULL,
  `texto_descriptivo` VARCHAR(500) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
ALTER TABLE `red_social`.`posts` 
CHANGE COLUMN `texto_descripcion` `texto_descriptivo` VARCHAR(500) NOT NULL ;
ALTER TABLE `red_social`.`posts` 
ADD COLUMN `user_id` INT NULL DEFAULT NULL AFTER `updated_at`;
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `contrasenia` `contrasenia` VARCHAR(45) NOT NULL ;

ALTER TABLE `red_social`.`posts` 
CHANGE COLUMN `foto` `foto` VARCHAR(500) NULL DEFAULT NULL ;
ALTER TABLE `red_social`.`posts` 
CHANGE COLUMN `texto_descriptivo` `texto_descriptivo` VARCHAR(500) NULL DEFAULT NULL ;
UPDATE `red_social`.`posts` SET `foto` = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fca%2Ft%2Fblazer-mid-77-next-nature-shoes-ZnZJvn&psig=AOvVaw129L1uIzWsyjmuFPmekDje&ust=1668992773394000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC3gt3Iu_sCFQAAAAAdAAAAABAE', `texto_descriptivo` = 'Nike Blzers' WHERE (`id` = '2');
UPDATE `red_social`.`posts` SET `id_users` = '1' WHERE (`id` = '2');
UPDATE `red_social`.`posts` SET `foto` = 'https://static.nike.com/a/images/t_default/a751495d-1cb9-4976-ab4f-9a2189464e8f/blazer-mid-77-next-nature-shoes-ZnZJvn.png' WHERE (`id` = '2');
UPDATE `red_social`.`posts` SET `foto` = 'https://static.nike.com/a/images/t_default/v5qlucvwx3lme7x3slhn/calzado-converse-chuck-taylor-all-star-de-perfil-alto-xX439O.png', `texto_descriptivo` = 'Converse', `id_users` = '2' WHERE (`id` = '3');
UPDATE `red_social`.`posts` SET `foto` = 'http://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-01_3df76d08-2391-4241-9fad-59581aff8423.png?v=1615250938', `texto_descriptivo` = 'Jordan 1s', `id_users` = '1' WHERE (`id` = '4');
UPDATE `red_social`.`posts` SET `foto` = 'https://content.rezetstore.dk/sites/default/files/PIM-images/adidas/2298183/adidas-stan-smith-ftwwht-green-owhite-2298183-v1-763486.png', `texto_descriptivo` = 'Stan Smith', `id_users` = '3' WHERE (`id` = '5');
UPDATE `red_social`.`posts` SET `foto` = 'https://www.thenextsole.com/storage/images/194166-03.png', `texto_descriptivo` = 'Pumas', `id_users` = '3' WHERE (`id` = '6');
UPDATE `red_social`.`posts` SET `texto_descriptivo` = 'Addias Boost', `id_users` = '2' WHERE (`id` = '7');
UPDATE `red_social`.`posts` SET `texto_descriptivo` = 'Dr Mertens', `id_users` = '1' WHERE (`id` = '8');
UPDATE `red_social`.`posts` SET `foto` = 'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/012/939/803/original/23568001.png.png?action=crop&width=750' WHERE (`id` = '8');
DELETE FROM `red_social`.`posts` WHERE (`id` = '9');
UPDATE `red_social`.`posts` SET `foto` = 'https://content.rezetstore.dk/sites/default/files/styles/product_display_teaser_mobile/public/PIM-images/adidas/1387357/adidas-ultra-boost-solar-yellow-solar-y-1387357-v1-744123.png' WHERE (`id` = '7');
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `fecha` `fecha` DATE NULL ;
INSERT INTO `red_social`.`users` (`id`, `email`, `username`, `contrasenia`, `foto_perfil`, `dni`, `created_at`, `updated_at`) VALUES ('1', 'joao@udesa.edu', 'Joao Pedro', '4444', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU', '43988584', '2022-11-19 22:16:43', '2022-11-19 22:27:59');
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `username` `user` VARCHAR(45) NOT NULL ;
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `email` `email` VARCHAR(500) NOT NULL DEFAULT 'segundo.benito@gmail.com' ;
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `email` `email` VARCHAR(500) NULL DEFAULT NULL ,
CHANGE COLUMN `username` `username` VARCHAR(45) NULL DEFAULT NULL ,
CHANGE COLUMN `password` `password` VARCHAR(45) NULL DEFAULT NULL ,
CHANGE COLUMN `profile_picture` `profile_picture` VARCHAR(100) NULL DEFAULT NULL ,
CHANGE COLUMN `dni` `dni` INT(11) NULL DEFAULT NULL ;
DELETE FROM `red_social`.`users` WHERE (`id` = '1');
UPDATE `red_social`.`users` SET `email` = 'joao@udesa.edu', `username` = 'JoaoPedro', `password` = '4444', `profile_picture` = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU', `dni` = '43988584' WHERE (`id` = '2');
UPDATE `red_social`.`users` SET `profile_picture` = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' WHERE (`id` = '2');
UPDATE `red_social`.`users` SET `password` = '727272', `profile_picture` = 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', `dni` = '21322343' WHERE (`id` = '3');
UPDATE `red_social`.`users` SET `email` = 'segundo@yahoo' WHERE (`id` = '3');
INSERT INTO `red_social`.`comments` (`id`, `id_posts`, `id_users`, `texto_descriptivo`, `created_at`, `updated_at`) VALUES ('1', '1', '1', 'Muy Lindas', '2022-11-20 00:17:03', '2022-11-20 00:25:11');

ALTER TABLE `red_social`.`posts` 
ADD COLUMN `comments` VARCHAR(500) NULL DEFAULT NULL AFTER `user_id`;
UPDATE `red_social`.`posts` SET `comments` = 'Very Nice' WHERE (`id` = '2');
UPDATE `red_social`.`posts` SET `comments` = 'Great colors' WHERE (`id` = '3');
UPDATE `red_social`.`posts` SET `comments` = 'incredible' WHERE (`id` = '4');
UPDATE `red_social`.`posts` SET `comments` = 'I dont not like them' WHERE (`id` = '5');
ALTER TABLE `red_social`.`posts` 
CHANGE COLUMN `comments` `comment` VARCHAR(500) NULL DEFAULT NULL ;
UPDATE `red_social`.`posts` SET `usuarios` = 'Segu_benito' WHERE (`id` = '2');
UPDATE `red_social`.`posts` SET `usuarios` = 'Nacho_suarez' WHERE (`id` = '3');
UPDATE `red_social`.`posts` SET `usuarios` = 'Pedro' WHERE (`id` = '4');
UPDATE `red_social`.`posts` SET `usuarios` = 'Ernesto' WHERE (`id` = '5');
UPDATE `red_social`.`posts` SET `usuarios` = 'Cecilia' WHERE (`id` = '6');
UPDATE `red_social`.`posts` SET `usuarios` = 'Maria' WHERE (`id` = '7');
UPDATE `red_social`.`posts` SET `usuarios` = 'Martu' WHERE (`id` = '8');
UPDATE `red_social`.`posts` SET `comment` = 'They look better in Pink' WHERE (`id` = '6');
UPDATE `red_social`.`posts` SET `comment` = 'I think they look old' WHERE (`id` = '7');
UPDATE `red_social`.`posts` SET `comment` = 'Vintage' WHERE (`id` = '8');
INSERT INTO `red_social`.`posts` (`comment`) VALUES ('');
DELETE FROM `red_social`.`posts` WHERE (`id` = '9');
ALTER TABLE `red_social`.`users` 
CHANGE COLUMN `profile_picture` `profile_picture` VARCHAR(500) NULL DEFAULT NULL ;
DELETE FROM `red_social`.`users` WHERE (`id` = '11');
DELETE FROM `red_social`.`users` WHERE (`id` = '8');
DELETE FROM `red_social`.`users` WHERE (`id` = '6');
DELETE FROM `red_social`.`users` WHERE (`id` = '7');
DELETE FROM `red_social`.`users` WHERE (`id` = '9');
DELETE FROM `red_social`.`users` WHERE (`id` = '10');
UPDATE `red_social`.`users` SET `email` = 'ignacio@gmail.com', `username` = 'IAracena23', `password` = '1223', `profile_picture` = 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg', `dni` = '72884936' WHERE (`id` = '4');
UPDATE `red_social`.`users` SET `email` = 'martin@gmail.com', `username` = 'martin44', `password` = '7123', `profile_picture` = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', `dni` = '76223465' WHERE (`id` = '5');
ALTER TABLE `red_social`.`users` 
ADD COLUMN `posteos` VARCHAR(500) NULL DEFAULT NULL AFTER `updated_at`;
UPDATE `red_social`.`users` SET `posteos` = 'https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJyZWVib2tcLzEwMTk1OTI2X0dYNzU2Ml8wMDBcL3JlZWJvay1jbHViLWMtODUtdmVnYW4td2Vpc3MtcGluay1neDc1NjItbGlmZXN0eWxlX3JpZ2h0X291dC5wbmciLCJlZGl0cyI6W119' WHERE (`id` = '2');
UPDATE `red_social`.`users` SET `posteos` = 'https://static.nike.com/a/images/t_default/723aae01-587d-4089-9865-4edb9b318d62/custom-nike-dunk-unlocked-by-you.png' WHERE (`id` = '3');
UPDATE `red_social`.`users` SET `posteos` = 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-White-Black-Royal-554724-140-001_600x.png?v=1635347409' WHERE (`id` = '4');
UPDATE `red_social`.`users` SET `posteos` = 'https://www.elmstreet.pk/wp-content/uploads/2020/02/Untitled_design__17_-removebg-preview.png' WHERE (`id` = '5');
DELETE FROM `red_social`.`posts` WHERE (`id` = '10');
DELETE FROM `red_social`.`posts` WHERE (`id` = '11');
DELETE FROM `red_social`.`users` WHERE (`id` = '12');
DELETE FROM `red_social`.`users` WHERE (`id` = '13');
DELETE FROM `red_social`.`users` WHERE (`id` = '14');
DELETE FROM `red_social`.`users` WHERE (`id` = '15');
DELETE FROM `red_social`.`users` WHERE (`id` = '16');
DELETE FROM `red_social`.`users` WHERE (`id` = '17');
DELETE FROM `red_social`.`users` WHERE (`id` = '18');
DELETE FROM `red_social`.`users` WHERE (`id` = '19');
DELETE FROM `red_social`.`users` WHERE (`id` = '20');
DELETE FROM `red_social`.`users` WHERE (`id` = '21');
DELETE FROM `red_social`.`users` WHERE (`id` = '22');
DELETE FROM `red_social`.`users` WHERE (`id` = '23');
DELETE FROM `red_social`.`users` WHERE (`id` = '24');
DELETE FROM `red_social`.`users` WHERE (`id` = '25');
DELETE FROM `red_social`.`users` WHERE (`id` = '26');
DELETE FROM `red_social`.`users` WHERE (`id` = '27');
DELETE FROM `red_social`.`users` WHERE (`id` = '28');
DELETE FROM `red_social`.`users` WHERE (`id` = '29');
DELETE FROM `red_social`.`users` WHERE (`id` = '30');
DELETE FROM `red_social`.`users` WHERE (`id` = '31');
DELETE FROM `red_social`.`users` WHERE (`id` = '32');
DELETE FROM `red_social`.`users` WHERE (`id` = '33');
DELETE FROM `red_social`.`users` WHERE (`id` = '34');
DELETE FROM `red_social`.`users` WHERE (`id` = '35');
DELETE FROM `red_social`.`users` WHERE (`id` = '36');
DELETE FROM `red_social`.`users` WHERE (`id` = '37');
DELETE FROM `red_social`.`users` WHERE (`id` = '38');
DELETE FROM `red_social`.`users` WHERE (`id` = '39');
DELETE FROM `red_social`.`users` WHERE (`id` = '40');
DELETE FROM `red_social`.`users` WHERE (`id` = '41');
DELETE FROM `red_social`.`users` WHERE (`id` = '42');
DELETE FROM `red_social`.`users` WHERE (`id` = '43');
DELETE FROM `red_social`.`users` WHERE (`id` = '44');
DELETE FROM `red_social`.`users` WHERE (`id` = '45');
DELETE FROM `red_social`.`users` WHERE (`id` = '46');
DELETE FROM `red_social`.`users` WHERE (`id` = '47');
DELETE FROM `red_social`.`users` WHERE (`id` = '48');
DELETE FROM `red_social`.`users` WHERE (`id` = '49');
DELETE FROM `red_social`.`users` WHERE (`id` = '50');
DELETE FROM `red_social`.`users` WHERE (`id` = '51');
DELETE FROM `red_social`.`users` WHERE (`id` = '52');
DELETE FROM `red_social`.`users` WHERE (`id` = '53');
DELETE FROM `red_social`.`users` WHERE (`id` = '54');
DELETE FROM `red_social`.`users` WHERE (`id` = '55');
DELETE FROM `red_social`.`users` WHERE (`id` = '56');
DELETE FROM `red_social`.`users` WHERE (`id` = '57');
DELETE FROM `red_social`.`users` WHERE (`id` = '58');
DELETE FROM `red_social`.`users` WHERE (`id` = '59');
DELETE FROM `red_social`.`users` WHERE (`id` = '60');
DELETE FROM `red_social`.`users` WHERE (`id` = '61');
DELETE FROM `red_social`.`users` WHERE (`id` = '62');
DELETE FROM `red_social`.`users` WHERE (`id` = '63');
DELETE FROM `red_social`.`users` WHERE (`id` = '64');
DELETE FROM `red_social`.`users` WHERE (`id` = '65');
DELETE FROM `red_social`.`users` WHERE (`id` = '66');
DELETE FROM `red_social`.`users` WHERE (`id` = '67');
DELETE FROM `red_social`.`users` WHERE (`id` = '68');
DELETE FROM `red_social`.`users` WHERE (`id` = '69');
DELETE FROM `red_social`.`users` WHERE (`id` = '70');
DELETE FROM `red_social`.`users` WHERE (`id` = '71');
DELETE FROM `red_social`.`users` WHERE (`id` = '72');
DELETE FROM `red_social`.`users` WHERE (`id` = '73');
DELETE FROM `red_social`.`users` WHERE (`id` = '74');
DELETE FROM `red_social`.`users` WHERE (`id` = '75');
DELETE FROM `red_social`.`users` WHERE (`id` = '76');
DELETE FROM `red_social`.`users` WHERE (`id` = '77');
DELETE FROM `red_social`.`users` WHERE (`id` = '78');
DELETE FROM `red_social`.`users` WHERE (`id` = '79');
DELETE FROM `red_social`.`users` WHERE (`id` = '80');
DELETE FROM `red_social`.`users` WHERE (`id` = '81');
DELETE FROM `red_social`.`users` WHERE (`id` = '82');
DELETE FROM `red_social`.`users` WHERE (`id` = '83');
DELETE FROM `red_social`.`users` WHERE (`id` = '84');
DELETE FROM `red_social`.`users` WHERE (`id` = '85');
DELETE FROM `red_social`.`users` WHERE (`id` = '86');
DELETE FROM `red_social`.`users` WHERE (`id` = '87');
DELETE FROM `red_social`.`users` WHERE (`id` = '88');
DELETE FROM `red_social`.`users` WHERE (`id` = '89');
DELETE FROM `red_social`.`users` WHERE (`id` = '90');
DELETE FROM `red_social`.`users` WHERE (`id` = '91');
DELETE FROM `red_social`.`users` WHERE (`id` = '92');
DELETE FROM `red_social`.`users` WHERE (`id` = '93');
DELETE FROM `red_social`.`users` WHERE (`id` = '94');
DELETE FROM `red_social`.`users` WHERE (`id` = '95');
DELETE FROM `red_social`.`users` WHERE (`id` = '96');
DELETE FROM `red_social`.`users` WHERE (`id` = '97');
DELETE FROM `red_social`.`users` WHERE (`id` = '98');
DELETE FROM `red_social`.`users` WHERE (`id` = '99');
DELETE FROM `red_social`.`users` WHERE (`id` = '100');
DELETE FROM `red_social`.`users` WHERE (`id` = '101');
DELETE FROM `red_social`.`users` WHERE (`id` = '102');
DELETE FROM `red_social`.`users` WHERE (`id` = '103');
DELETE FROM `red_social`.`users` WHERE (`id` = '104');
DELETE FROM `red_social`.`users` WHERE (`id` = '105');
DELETE FROM `red_social`.`users` WHERE (`id` = '106');
DELETE FROM `red_social`.`users` WHERE (`id` = '107');
DELETE FROM `red_social`.`users` WHERE (`id` = '108');
DELETE FROM `red_social`.`users` WHERE (`id` = '109');
DELETE FROM `red_social`.`users` WHERE (`id` = '110');
DELETE FROM `red_social`.`users` WHERE (`id` = '111');
DELETE FROM `red_social`.`users` WHERE (`id` = '112');
DELETE FROM `red_social`.`users` WHERE (`id` = '113');
DELETE FROM `red_social`.`users` WHERE (`id` = '114');
DELETE FROM `red_social`.`users` WHERE (`id` = '115');
DELETE FROM `red_social`.`users` WHERE (`id` = '116');
DELETE FROM `red_social`.`users` WHERE (`id` = '117');
DELETE FROM `red_social`.`users` WHERE (`id` = '118');
DELETE FROM `red_social`.`users` WHERE (`id` = '119');
DELETE FROM `red_social`.`users` WHERE (`id` = '120');
DELETE FROM `red_social`.`users` WHERE (`id` = '121');
DELETE FROM `red_social`.`users` WHERE (`id` = '122');
DELETE FROM `red_social`.`users` WHERE (`id` = '126');
DELETE FROM `red_social`.`users` WHERE (`id` = '124');
DELETE FROM `red_social`.`posts` WHERE (`id` = '12');
DELETE FROM `red_social`.`posts` WHERE (`id` = '13');
DELETE FROM `red_social`.`users` WHERE (`id` = '128');
DELETE FROM `red_social`.`users` WHERE (`id` = '129');
DELETE FROM `red_social`.`users` WHERE (`id` = '130');
DELETE FROM `red_social`.`users` WHERE (`id` = '131');
DELETE FROM `red_social`.`users` WHERE (`id` = '132');
DELETE FROM `red_social`.`users` WHERE (`id` = '133');
ALTER TABLE `red_social`.`posts` 
RENAME TO  `red_social`.`posteos` ;

