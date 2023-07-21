-- Active: 1689959898661@@127.0.0.1@3306@iglesiaHeavensMysqlDB

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