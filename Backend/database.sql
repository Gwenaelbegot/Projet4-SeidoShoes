
DROP TABLE IF EXISTS `advert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advert` (
  `idAdvert` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `NameShoes` varchar(45) NOT NULL,
  `Picture` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`idAdvert`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advert`
--

LOCK TABLES `advert` WRITE;
/*!40000 ALTER TABLE `advert` DISABLE KEYS */;
INSERT INTO `advert` VALUES (1,'Air force one',200,'Murasaki','/static/logoProj.png'),(30,'Air force one',200,'Murasaki','/static/logoProj.png'),(31,'Air force one',200,'Murasaki','/static/logoProj.png'),(32,'Air force one',200,'Murasaki','/static/logoProj.png'),(33,'Air force one',200,'Murasaki','/static/logoProj.png'),(34,'Air force one',200,'Murasaki','/static/logoProj.png'),(37,'Air force one',220,'A-T','/static/logoShoesA-T.png'),(38,'Air force one',220,'A-T','/static/logoShoesA-T.png'),(39,'Air force one',220,'A-T','/static/logoShoesA-T.png'),(40,'Air force one',220,'A-T','/static/logoShoesA-T.png'),(41,'Air force one',220,'A-T','/static/logoShoesA-T.png'),(42,'Air force one',220,'A-T','/static/logoShoesA-T.png');
/*!40000 ALTER TABLE `advert` ENABLE KEYS */;
UNLOCK TABLES;
