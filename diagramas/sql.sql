-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: db_cleanservice
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `condominio`
--

DROP TABLE IF EXISTS `condominio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio` (
  `codCondominio` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  PRIMARY KEY (`codCondominio`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio`
--

LOCK TABLES `condominio` WRITE;
/*!40000 ALTER TABLE `condominio` DISABLE KEYS */;
INSERT INTO `condominio` VALUES (1,'chateau','U2FsdGVkX1+zxcSyMMhMi/ppJyMvu4AbDGa2XxXBQjk='),(3,'psf','U2FsdGVkX1/lyWdEv+TLjfHqrhF+SHlU9HFvjyfMm6o=');
/*!40000 ALTER TABLE `condominio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `codFuncionario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`codFuncionario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES (1,'heloisa','teste@gmail','U2FsdGVkX18dH2nt7GDInO+6PAHQYyqFloASK0MREr0='),(2,'pedro','pedro@gmail','U2FsdGVkX197JNCQncF2zCF8LwTy9Nv7+A9BD0UJJw4=');
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais`
--

DROP TABLE IF EXISTS `materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais` (
  `codMateriais` int NOT NULL AUTO_INCREMENT,
  `idCondominio` int NOT NULL,
  `desc` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `qtdeEstoque` float NOT NULL,
  `codLote` varchar(255) NOT NULL,
  PRIMARY KEY (`codMateriais`),
  KEY `idCondominio` (`idCondominio`),
  CONSTRAINT `materiais_ibfk_1` FOREIGN KEY (`idCondominio`) REFERENCES `condominio` (`codCondominio`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais`
--

LOCK TABLES `materiais` WRITE;
/*!40000 ALTER TABLE `materiais` DISABLE KEYS */;
INSERT INTO `materiais` VALUES (1,1,'limpar','limpeza',1,'U2FsdGVkX18NyDaDYup44IvldGRn0u/wNuS6ixZa2ww='),(2,1,'limpar','limpeza',1,'U2FsdGVkX1+IaItXIZ8IWfabq+Euo3Qns5102PsX7Iw=');
/*!40000 ALTER TABLE `materiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimentação`
--

DROP TABLE IF EXISTS `movimentação`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimentação` (
  `codMovimentacao` int NOT NULL AUTO_INCREMENT,
  `qtdeMovimentada` int NOT NULL,
  `tipo` enum('ENTRADA','SAIDA') NOT NULL,
  `data` date NOT NULL,
  `idMateriais` int DEFAULT NULL,
  PRIMARY KEY (`codMovimentacao`),
  KEY `idMateriais` (`idMateriais`),
  CONSTRAINT `movimentação_ibfk_1` FOREIGN KEY (`idMateriais`) REFERENCES `materiais` (`codMateriais`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimentação`
--

LOCK TABLES `movimentação` WRITE;
/*!40000 ALTER TABLE `movimentação` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimentação` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-16 10:07:02
