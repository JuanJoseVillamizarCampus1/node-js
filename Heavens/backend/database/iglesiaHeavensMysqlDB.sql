-- Active: 1690151915021@@127.0.0.1@3306@iglesiaheavensmysqldb
CREATE DATABASE iglesiaHeavensMysqlDB;

use iglesiaHeavensMysqlDB;
CREATE TABLE Creyente(
    id_creyente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    Nro_celular INT NOT NULL,
    direccion VARCHAR (80) NOT NULL,
    id_barrio INT,
    FOREIGN KEY (id_barrio) REFERENCES Barrio(id_barrio)
);
CREATE TABLE Barrio (
    id_barrio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_barrio VARCHAR(50) NOT NULL,
    id_comuna INT,
    FOREIGN KEY (id_comuna) REFERENCES Comuna(id_comuna)
);
CREATE TABLE Comuna (
    id_comuna INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_comuna VARCHAR(50) NOT NULL,
    id_municipio INT,
    FOREIGN KEY (id_municipio) REFERENCES Municipio(id_municipio)
);
CREATE TABLE Municipio (
    id_municipio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_municipio VARCHAR(50) NOT NULL,
    id_departamento INT,
    FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento)
);
CREATE TABLE Departamento (
    id_departamento INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_departamento VARCHAR(50) NOT NULL
);
DROP DATABASE iglesiaHeavensMysqlDB;
INSERT INTO Departamento (nombre_departamento) VALUES ('Santander'),('Boyaca'),('Risaralda'),('Norte de Santander'),('Cesar');
INSERT INTO Municipio (nombre_municipio,id_departamento) VALUES ('Bucaramanga',1),('Floridablanca',1),('Giron',1),('Piedecuesta',1);
INSERT INTO Comuna (nombre_comuna,id_municipio) VALUES ('Comuna 1 Norte',1),('Comuna 2 Nororiental',1),('Comuna 3 San Francisco',1),('Comuna 4 Occidental',1),('Comuna 5 García Rovira',1);

INSERT INTO Comuna (nombre_comuna,id_municipio) VALUES ('Comuna 1 CASCO ANTIGUO',2),('Comuna 2 CAÑAVERAL',2),('Comuna 3 BUCARICA',2),('Comuna 4 BOSQUE-MOLINOS',2),('Comuna 5 LAGOS -BELLAVISTA',2);

INSERT INTO Barrio (nombre_barrio,id_comuna) VALUES ('Café Madrid',1),('Kennedy',1),('Quinta Estrella',5),('La Joya',5),('CampoHermoso',5),('Cañaveral',7);