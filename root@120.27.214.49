-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: mysite_db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permissi_content_type_id_2f476e4b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add user',2,'add_user'),(5,'Can change user',2,'change_user'),(6,'Can delete user',2,'delete_user'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add permission',4,'add_permission'),(11,'Can change permission',4,'change_permission'),(12,'Can delete permission',4,'delete_permission'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add tag',7,'add_tag'),(20,'Can change tag',7,'change_tag'),(21,'Can delete tag',7,'delete_tag'),(22,'Can add post',8,'add_post'),(23,'Can change post',8,'change_post'),(24,'Can delete post',8,'delete_post'),(25,'Can add category',9,'add_category'),(26,'Can change category',9,'change_category'),(27,'Can delete category',9,'delete_category'),(28,'Can add product',10,'add_product'),(29,'Can change product',10,'change_product'),(30,'Can delete product',10,'delete_product');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$30000$Q0aa5U65g6XB$WQvtkcAwlu66DK6y1us44983wN8G19QW6OWNe0ieZdc=','2018-11-11 14:34:00.756429',1,'rxuser','','','a@aa.com',1,1,'2018-06-29 15:41:09.990000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_category`
--

DROP TABLE IF EXISTS `blog_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_category`
--

LOCK TABLES `blog_category` WRITE;
/*!40000 ALTER TABLE `blog_category` DISABLE KEYS */;
INSERT INTO `blog_category` VALUES (4,'a_news'),(5,'公司简介'),(6,'企业荣誉'),(7,'招聘信息');
/*!40000 ALTER TABLE `blog_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_post`
--

DROP TABLE IF EXISTS `blog_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `modified_time` datetime(6) NOT NULL,
  `excerpt` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_time` datetime(6) NOT NULL,
  `post_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_post_author_id_dd7a8485_fk_auth_user_id` (`author_id`),
  KEY `blog_post_category_id_c326dbf8_fk_blog_category_id` (`category_id`),
  CONSTRAINT `blog_post_author_id_dd7a8485_fk_auth_user_id` FOREIGN KEY (`author_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `blog_post_category_id_c326dbf8_fk_blog_category_id` FOREIGN KEY (`category_id`) REFERENCES `blog_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_post`
--

LOCK TABLES `blog_post` WRITE;
/*!40000 ALTER TABLE `blog_post` DISABLE KEYS */;
INSERT INTO `blog_post` VALUES (2,'标题测试1','<p>正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1正文1</p>','2018-09-09 15:58:11.426000','',1,4,'2018-07-17 17:21:44.716000','picture/阳光_FWNfBoR.jpg'),(3,'标题测试2','<p>正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2正文2</p>','2018-09-09 15:58:21.314000','',1,4,'2018-07-17 17:21:44.716000','picture/阳光_vt2acwe.jpg'),(4,'shell 下第一篇','<p>***************</p>','2018-09-09 15:58:30.042000','',1,4,'2018-07-17 17:36:49.951000','picture/阳光_M4yne5z.jpg'),(5,'for 1','<p>******:1</p>','2018-09-09 15:58:47.202000','',1,4,'2018-07-17 17:54:34.008000','picture/阳光_kYJlplx.jpg'),(6,'for 2','<p>******:2</p>','2018-09-09 15:59:02.107000','',1,4,'2018-07-17 17:54:34.024000','picture/阳光_GcooUXL.jpg'),(7,'for 3','<p>******:3</p>','2018-09-09 15:59:11.219000','',1,4,'2018-07-17 17:54:34.024000','picture/阳光_pUAS4rl.jpg'),(8,'for 4','<p>******:4</p>','2018-09-09 15:59:19.674000','',1,4,'2018-07-17 17:54:34.040000','picture/阳光_8upDiaK.jpg'),(9,'for 5','<p>******:5</p>','2018-09-09 15:59:31.053000','',1,4,'2018-07-17 17:54:34.067000','picture/阳光_YpAhhoz.jpg'),(10,'for 6','<p>******:6</p>','2018-09-09 15:59:39.809000','',1,4,'2018-07-17 17:54:34.067000','picture/阳光_rzqxvgr.jpg'),(11,'for 7','<p>******:7</p>','2018-09-09 15:59:48.139000','',1,4,'2018-07-17 17:54:34.087000','picture/阳光_oIUlcwj.jpg'),(12,'for 8','<p>******:8</p>','2018-09-09 15:59:56.153000','',1,4,'2018-07-17 17:54:34.096000','picture/阳光_ePdq2zm.jpg'),(13,'for 9','<p>******:9</p>','2018-09-09 16:00:18.473000','',1,4,'2018-07-17 17:54:34.106000','picture/阳光_2azQxix.jpg'),(14,'for 10','<p>******:10</p>','2018-09-09 16:00:05.297000','',1,4,'2018-07-17 17:54:34.106000','picture/阳光_dYoFRfj.jpg'),(15,'for 11','<p>******:11</p>','2018-09-09 16:00:27.864000','',1,4,'2018-07-17 17:54:34.127000','picture/阳光_LWBGm7j.jpg'),(16,'for 12','<p>******:12</p>','2018-09-09 16:00:35.910000','',1,4,'2018-07-17 17:54:34.127000','picture/阳光_i52F5HN.jpg'),(17,'for 13','<p>******:13</p>','2018-09-09 16:00:42.349000','',1,4,'2018-07-17 17:54:34.143000','picture/阳光_UAGi6p5.jpg'),(18,'for 14','<p>******:14</p>','2018-09-09 16:00:49.332000','',1,4,'2018-07-17 17:54:34.158000','picture/阳光_CSuVvju.jpg'),(19,'for 15','<p>******:15</p>','2018-09-09 16:00:57.522000','',1,4,'2018-07-17 17:54:34.158000','picture/阳光_moONyY5.jpg'),(20,'for 16','<p>******:16</p>','2018-09-09 16:01:05.581000','',1,4,'2018-07-17 17:54:34.181000','picture/阳光_OjJgdBB.jpg'),(21,'for 17','<p>******:17</p>','2018-09-09 16:01:12.264000','',1,4,'2018-07-17 17:54:34.192000','picture/阳光_2o5Qgth.jpg'),(22,'for 18','<p>******:18</p>','2018-09-09 16:01:19.066000','',1,4,'2018-07-17 17:54:34.201000','picture/阳光_1gbIEIG.jpg'),(23,'for 19','<p>******:19</p>','2018-09-09 16:01:25.475000','',1,4,'2018-07-17 17:54:34.205000','picture/阳光_c5bdOCM.jpg'),(24,'for 20','<p>******:20</p>','2018-09-09 16:01:35.586000','',1,4,'2018-07-17 17:54:34.221000','picture/阳光_kdCVbFJ.jpg'),(25,'for 21','<p>******:21</p>','2018-09-09 16:01:42.829000','',1,4,'2018-07-17 17:54:34.221000','picture/阳光_0AtXFvf.jpg'),(26,'for 22','<p>******:22</p>','2018-09-09 16:01:52.154000','',1,4,'2018-07-17 17:54:34.237000','picture/阳光_ikesJOL.jpg'),(27,'for 23','<p>******:23</p>','2018-09-09 16:01:59.929000','',1,4,'2018-07-17 17:54:34.237000','picture/阳光_yYmImR7.jpg'),(28,'for 24','<p>******:24</p>','2018-09-09 16:02:06.387000','',1,4,'2018-07-17 17:54:34.252000','picture/阳光_5gtw0Pg.jpg'),(29,'for 25','<p>******:25</p>','2018-09-09 16:02:15.307000','',1,4,'2018-07-17 17:54:34.268000','picture/阳光_fqTZH4k.jpg'),(30,'for 26','<p>******:26</p>','2018-09-09 15:58:02.553000','',1,4,'2018-07-17 17:54:34.268000','picture/阳光_UJ9Wxqg.jpg'),(31,'for 27','<p>******:27</p>','2018-09-09 15:57:51.837000','',1,4,'2018-07-17 17:54:34.284000','picture/阳光_KTAUnIY.jpg'),(32,'for 28','<p>******:28</p>','2018-09-09 15:57:45.272000','',1,4,'2018-07-17 17:54:34.284000','picture/阳光_taaz2Uv.jpg'),(33,'第二十九篇','<p>******:29<img alt=\"\" src=\"/media/upload/2018/07/21/1-151030102f80-l.jpg\" style=\"height:171px; width:330px\" /></p>','2018-09-09 15:57:15.890000','',1,4,'2018-07-17 17:54:34.306000','picture/阳光_BkeOdWy.jpg'),(34,'第三十篇','<h1><strong>标题测试</strong></h1>\r\n\r\n<p>*****:30正文******:<strong>30正文******:30正文</strong></p>\r\n\r\n<div>11111111111111111111111<img alt=\"\" src=\"/media/upload/2018/07/19/erxorm.jpg\" style=\"height:400px; width:240px\" /></div>\r\n\r\n<p>*<br />\r\n******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文 ******:30正文******:30正文******:30正文******:30正文******:30正文 ******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30<span style=\"color:#2ecc71\">正文******:30正文*</span>*****:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文******:30正文</p>','2018-09-09 15:57:08.357000','1111111111111111111111113333333333333333333333333333333',1,4,'2018-07-17 17:54:34.315000','picture/阳光.jpg'),(36,'公司简介','<p>&nbsp; &nbsp; &nbsp;&nbsp;<a href=\"https://baike.baidu.com/item/%E6%B5%99%E6%B1%9F%E7%91%9E%E6%96%B0%E8%8D%AF%E4%B8%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/5612434\" target=\"_blank\">浙江瑞新药业股份有限公司</a>2002年1月成立，为原浙江丽水浙南药业有限公司改制组成的股份有限公司。2002年底公司由<a href=\"https://baike.baidu.com/item/%E4%B8%BD%E6%B0%B4%E5%B8%82/2713089\" target=\"_blank\">丽水市</a>丽阳街588号整体搬迁至丽水市天宁工业区开发路。厂区占地面积3.33万平方米，其中建筑面积1.45万平方米，道路及绿化面积1.49万平方米，绿化率31.6%。</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp;公司现有小容量注射剂、固体口服制剂(片剂、胶囊)、冻干粉针剂、原料药等4个生产车间及水、电、汽公用配套设施，是具有生产多种剂型和原料药及发酵提取的综合性制药企业。所有剂型和原料药都通过了国家药品GMP认证。2007年~2008年公司技改投入400万元进行GMP硬件改造，生产能力和产品质量均有明显提高。公司现有员工300名，各类技术人员72名，拥有药品批准文号95个。年生产能力片剂为12亿片、小容量注射剂为2亿支、冻干粉针剂180万支、普通胶囊7000万粒、头孢菌素类胶囊2000万粒、抗肿瘤药胶囊500万粒。</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;公司成立七年来，由于重视员工培训，引进人才，引进先进生产设备，既保证了产品质量，又提高了产量。企业及产品知名度不断提高，得到了国内外广大用户的认可和青睐。企业经济效益稳步提高。</p>\r\n\r\n<p>2008年度销售额6500万元（含税），利税总额实现500万元，近两年，销售额和利税总额年增长15%以上。在新产品引进方面也初见成效，已有两个仿制产品获得<a href=\"https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E9%A3%9F%E5%93%81%E8%8D%AF%E5%93%81%E7%9B%91%E7%9D%A3%E7%AE%A1%E7%90%86%E5%B1%80\" target=\"_blank\">国家食品药品监督管理局</a>批准，并已投入生产。</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;浙江瑞新药业股份有限公司是浙江省丽水市温州商会常务理事单位、丽水市医药协会常务理事单位、丽水市药学会会员单位。公司流动资金充足，企业资信等级为AAA级，纳税信誉等级为AAA级。公司凭着顽强务实的拼搏精神，致力于开拓市场、引进人才、开发新药，使企业做大做强。</p>\r\n\r\n<p>&nbsp;</p>','2018-09-09 17:17:33.005000','',1,5,'2018-09-09 17:11:20.909000',''),(37,'企业荣誉','<p>&nbsp; &nbsp;浙江瑞新药业股份有限公司是浙江省丽水市温州商会常务理事单位、丽水市医药协会常务理事单位、丽水市药学会会员单位。企业资信等级为AAA级，纳税信誉等级为AAA级。公司凭着顽强务实的拼搏精神，致力于开拓市场、引进人才、开发新药，使企业做大做强。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>。</p>','2018-09-09 17:32:35.314000','',1,6,'2018-09-09 17:31:32.214000',''),(38,'招聘信息','<p>暂无...........</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>.</p>','2018-09-09 17:45:16.620000','',1,7,'2018-09-09 17:45:16.620000','');
/*!40000 ALTER TABLE `blog_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_post_tags`
--

DROP TABLE IF EXISTS `blog_post_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_post_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blog_post_tags_post_id_4925ec37_uniq` (`post_id`,`tag_id`),
  KEY `blog_post_tags_tag_id_0875c551_fk_blog_tag_id` (`tag_id`),
  CONSTRAINT `blog_post_tags_post_id_a1c71c8a_fk_blog_post_id` FOREIGN KEY (`post_id`) REFERENCES `blog_post` (`id`),
  CONSTRAINT `blog_post_tags_tag_id_0875c551_fk_blog_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `blog_tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_post_tags`
--

LOCK TABLES `blog_post_tags` WRITE;
/*!40000 ALTER TABLE `blog_post_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog_post_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_product`
--

DROP TABLE IF EXISTS `blog_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_product`
--

LOCK TABLES `blog_product` WRITE;
/*!40000 ALTER TABLE `blog_product` DISABLE KEYS */;
INSERT INTO `blog_product` VALUES (1,'罗红霉素胶囊','<h2><strong><span style=\"color:#2ecc71\">请仔细阅读说明书并在医师指导下使用。</span></strong></h2>\r\n\r\n<p><strong><span style=\"color:#2ecc71\"><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /><img alt=\"angel\" src=\"http://127.0.0.1:8000/static/ckeditor/ckeditor/plugins/smiley/images/angel_smile.png\" style=\"height:23px; width:23px\" title=\"angel\" /></span></strong></p>\r\n\r\n<p>警告：对本品中任何成份、红霉素或其他大环内酯类药物过敏者禁用。</p>\r\n\r\n<p>【药品名称】</p>\r\n\r\n<p>通用名称：罗红霉素软胶囊</p>\r\n\r\n<p>英文名称：Roxithromycin Soft Capsules</p>\r\n\r\n<p>汉语拼音：Luohongmeisu Ruanjiaonang</p>\r\n\r\n<p>【成 份】主要组成成分 本品主要成份是罗红霉素。</p>\r\n\r\n<p>化学名称：9-{O-[(2-甲氧基乙氧基)-甲基]肟基}红霉素</p>\r\n\r\n<p>化学结构式：</p>\r\n\r\n<p>分式式：C41H76N2O15</p>\r\n\r\n<p>分子量：837.03</p>\r\n\r\n<p>【性 状】本品内容物为白色至淡黄色的混悬液。</p>\r\n\r\n<p>【适 应 症】本品适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎、慢性支气管炎急性发作，肺炎支原体或肺炎衣原体所致的肺炎;沙眼衣原体引起的尿道炎和宫颈炎;敏感细菌引起的皮肤软组织感染。</p>\r\n\r\n<p>【规 格】0.15g(15万单位)</p>\r\n\r\n<p>【用法用量】空腹口服，一般疗程为5～12日。儿童可直接服用，或剪开囊壳将药液滴入饮料或牛奶中服用。成人：一次0.15g，一日2次;也可一次0.3g，一日1次。儿童：一次按体重2.5～5mg/kg，一日2次。</p>\r\n\r\n<p>【不良反应】主要不良反应为腹痛、腹泻、恶心、呕吐等胃肠道反应，但发生率明显低于红霉素。偶见皮疹、皮肤瘙痒、头昏、头痛、肝功能异常(ALT及 AST升高)、外周血细胞下降等。</p>\r\n\r\n<p>【禁 忌】对本品中任何成份、红霉素或其他大环内酯类药物过敏者禁用。</p>\r\n\r\n<p>【药物过量】尚不明确。</p>\r\n\r\n<p>【贮 藏】密封，在干燥处保存。</p>\r\n\r\n<p>【包 装】铝塑泡罩包装;每板9粒，每盒1板。</p>\r\n\r\n<p>【有 效 期】暂定24个月。</p>\r\n\r\n<p>【执行标准】国家食品药品监督管理局标准</p>\r\n\r\n<p>药品标准编号：YBH05872007</p>\r\n\r\n<p>【批准文号】国家准字H20070302</p>','picture/1-151031093T70-L.jpg','本品适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(2,'产品1','<p><span style=\"color:#1abc9c\">你可以看到命令的输出除了 Applying blog.0001_initial... OK 外，Django 还对其它文件做了操作。</span></p>\r\n\r\n<p><span style=\"color:#1abc9c\">这是因为除了我们自己建立的 blog 应用外，Django 自身还内置了很多应用，这些应用本身也是需要存储数据的。</span></p>\r\n\r\n<p><span style=\"color:#1abc9c\">可以在 settings.py 的&nbsp;<code>INSTALLED_APP</code>&nbsp;设置里看到这些应用，当然我们目前不必关心这些。</span></p>','picture/1-1510310930440-L.jpg','11适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(3,'产品2','<p>【药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/1-1510310934470-L.jpg','12适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(4,'产品3','<p>33</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>\r\n\r\n<p>【贮 藏】密封，在干燥处保存。</p>','picture/1-1510310939400-L.jpg','13适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(5,'产品4','<p>44</p>\r\n\r\n<p>【药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/1-151031091114334.jpg','14适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(6,'产品5','<p>55</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/a1.jpg','15适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(7,'产品6','<p>66</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/a2.jpg','16适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(8,'产品7','<p>77</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/a3.jpg','17适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(9,'产品8','<p>88</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/a4.jpg','18适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎'),(10,'产品9','<p>99</p>\r\n\r\n<p>药理毒理】药理作用 本品为半合成的14元环大环内酯类抗生素。抗菌谱与抗菌作用基本上与红霉素相仿，对革兰阳性菌的作用较红霉素略差，对嗜肺军团菌的作用较红霉素强。对肺炎衣原体、肺炎支原体、溶脲脲原体的抗微生物作用与红霉素相仿或略强。本品可透过细菌细胞膜，在接近供体(&quot;P&quot;位)与细菌核糖体的50S亚基成可逆性结合，阻断了转移核糖核酸(t-RNA)结合至&quot;P&quot;位上，同时也阻断了多肽链自受位(&quot;A&quot;位)至&quot;P&quot;位的转移，因而细菌蛋白质合成受到抑制。</p>\r\n\r\n<p>【药代动力学】口服吸收好，血药峰浓度(Cmax)高，单剂量口服罗红霉素150 mg后约2小时达血药峰浓度(Cmax)6.6～7.9 mg/L，进食可使生物利用度下降约一半。分布广，扁桃体、鼻窦、中耳、肺、痰、前列腺及其他泌尿生殖道组织中的药物浓度均可达有效治疗水平。其蛋白结合率在血浓度2.5 mg/L时为96%。以原形及5个代谢物从体内排出，7.4%自尿液排出。血消除半衰期(t1/2&beta;)为8.4～15.5小时。</p>','picture/a5.jpg','19适用于化脓性链球菌引起的咽炎及扁桃体炎，敏感菌所致的鼻窦炎、中耳炎、急性支气管炎');
/*!40000 ALTER TABLE `blog_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_tag`
--

DROP TABLE IF EXISTS `blog_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_tag`
--

LOCK TABLES `blog_tag` WRITE;
/*!40000 ALTER TABLE `blog_tag` DISABLE KEYS */;
INSERT INTO `blog_tag` VALUES (1,'标签测试');
/*!40000 ALTER TABLE `blog_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8mb4_unicode_ci,
  `object_repr` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2018-07-08 16:02:59.295000','2','分类测试1',1,'[{\"added\": {}}]',9,1),(2,'2018-07-08 16:03:12.051000','2','标题测试1',1,'[{\"added\": {}}]',8,1),(3,'2018-07-08 16:04:49.038000','3','分类测试2',1,'[{\"added\": {}}]',9,1),(4,'2018-07-08 16:04:55.890000','3','标题测试2',1,'[{\"added\": {}}]',8,1),(5,'2018-07-08 16:05:34.725000','1','分类测试新',3,'',9,1),(6,'2018-07-18 16:27:30.010000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(7,'2018-07-18 16:38:05.012000','34','for 30',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',8,1),(8,'2018-07-18 16:46:16.573000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(9,'2018-07-18 18:11:25.992000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(10,'2018-07-18 18:47:57.909000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(11,'2018-07-18 18:57:24.538000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(12,'2018-07-19 09:43:57.569000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(13,'2018-07-19 17:11:32.928000','1','罗红霉素胶囊',1,'[{\"added\": {}}]',10,1),(14,'2018-07-19 19:35:17.942000','1','罗红霉素胶囊',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(15,'2018-07-19 20:02:56.864000','1','罗红霉素胶囊',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(16,'2018-07-19 20:06:22.557000','1','罗红霉素胶囊',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(17,'2018-07-19 20:09:05.661000','1','罗红霉素胶囊',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(18,'2018-07-19 20:17:43.673000','2','22222',1,'[{\"added\": {}}]',10,1),(19,'2018-07-19 20:18:21.354000','3','3333333',1,'[{\"added\": {}}]',10,1),(20,'2018-07-19 20:18:57.622000','4','44444444444',1,'[{\"added\": {}}]',10,1),(21,'2018-07-19 20:19:24.912000','5','555555555',1,'[{\"added\": {}}]',10,1),(22,'2018-07-19 21:00:07.410000','3','3333333',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(23,'2018-07-19 21:00:23.409000','4','44444444444',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(24,'2018-07-19 21:00:35.185000','5','555555555',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(25,'2018-07-19 21:07:38.185000','6','66666666666',1,'[{\"added\": {}}]',10,1),(26,'2018-07-19 21:08:13.030000','7','77777777777777',1,'[{\"added\": {}}]',10,1),(27,'2018-07-19 21:08:39.024000','8','888888888',1,'[{\"added\": {}}]',10,1),(28,'2018-07-19 21:09:15.450000','9','999999999999',1,'[{\"added\": {}}]',10,1),(29,'2018-07-19 21:09:44.510000','10','10101010',1,'[{\"added\": {}}]',10,1),(30,'2018-07-20 04:23:45.921000','2','22222',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(31,'2018-07-20 04:24:11.642000','2','22222',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',10,1),(32,'2018-07-20 04:24:21.249000','2','22222',2,'[]',10,1),(33,'2018-07-20 04:26:56.080000','1','罗红霉素胶囊',2,'[{\"changed\": {\"fields\": [\"description\", \"excerpt\"]}}]',10,1),(34,'2018-07-20 04:31:35.596000','2','产品1',2,'[{\"changed\": {\"fields\": [\"name\", \"excerpt\"]}}]',10,1),(35,'2018-07-20 04:32:59.515000','3','产品2',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(36,'2018-07-20 04:34:05.064000','4','产品3',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(37,'2018-07-20 04:35:10.528000','5','产品4',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(38,'2018-07-20 04:36:34.635000','6','产品5',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(39,'2018-07-20 04:37:35.208000','7','产品6',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(40,'2018-07-20 04:38:16.448000','8','产品7',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(41,'2018-07-20 04:38:56.081000','9','产品8',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(42,'2018-07-20 04:39:29.522000','10','产品9',2,'[{\"changed\": {\"fields\": [\"name\", \"description\", \"excerpt\"]}}]',10,1),(43,'2018-07-20 04:42:00.126000','2','产品1',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(44,'2018-07-20 04:42:12.929000','3','产品2',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(45,'2018-07-20 04:42:24.679000','4','产品3',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(46,'2018-07-20 04:42:34.671000','5','产品4',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(47,'2018-07-20 04:42:46.989000','6','产品5',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(48,'2018-07-20 04:42:57.404000','7','产品6',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(49,'2018-07-20 04:43:14.909000','8','产品7',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(50,'2018-07-20 04:43:25.973000','9','产品8',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(51,'2018-07-20 04:43:39.806000','10','产品9',2,'[{\"changed\": {\"fields\": [\"excerpt\"]}}]',10,1),(52,'2018-07-21 05:06:32.662000','34','for 30',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(53,'2018-07-21 05:12:19.147000','33','for 29',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(54,'2018-07-21 05:12:35.681000','32','for 28',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(55,'2018-07-21 05:13:14.253000','31','for 27',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(56,'2018-07-21 05:13:28.786000','30','for 26',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(57,'2018-07-21 05:13:41.951000','29','for 25',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(58,'2018-07-21 05:13:56.359000','28','for 24',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(59,'2018-07-21 05:14:11.465000','27','for 23',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(60,'2018-07-21 05:14:23.642000','26','for 22',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(61,'2018-07-21 05:14:33.131000','25','for 21',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(62,'2018-07-21 05:14:57.551000','24','for 20',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(63,'2018-07-21 06:44:44.035000','23','for 19',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(64,'2018-07-21 06:44:58.014000','22','for 18',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(65,'2018-07-21 06:45:12.396000','21','for 17',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(66,'2018-07-21 06:45:28.599000','20','for 16',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(67,'2018-07-21 06:45:39.832000','19','for 15',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(68,'2018-07-21 06:45:59.863000','18','for 14',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(69,'2018-07-21 06:46:14.255000','17','for 13',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(70,'2018-07-21 06:46:26.846000','16','for 12',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(71,'2018-07-21 06:46:39.916000','15','for 11',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(72,'2018-07-21 06:46:55.835000','14','for 10',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(73,'2018-07-21 06:47:07.182000','13','for 9',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(74,'2018-07-21 06:47:22.370000','12','for 8',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(75,'2018-07-21 06:47:36.219000','11','for 7',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(76,'2018-07-21 06:47:51.258000','10','for 6',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(77,'2018-07-21 06:48:02.913000','9','for 5',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(78,'2018-07-21 06:48:16.001000','8','for 4',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(79,'2018-07-21 06:48:30.568000','7','for 3',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(80,'2018-07-21 06:48:40.794000','6','for 2',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(81,'2018-07-21 06:48:50.681000','5','for 1',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(82,'2018-07-21 06:49:00.817000','4','shell 下第一篇',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(83,'2018-07-21 06:49:11.534000','3','标题测试2',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(84,'2018-07-21 06:49:24.576000','2','标题测试1',2,'[{\"changed\": {\"fields\": [\"body\", \"post_img\"]}}]',8,1),(85,'2018-07-21 06:52:46.267000','34','第三十篇',2,'[{\"changed\": {\"fields\": [\"title\"]}}]',8,1),(86,'2018-07-21 06:53:03.154000','33','第二九篇',2,'[{\"changed\": {\"fields\": [\"title\"]}}]',8,1),(87,'2018-07-21 06:53:28.975000','33','第二十九篇',2,'[{\"changed\": {\"fields\": [\"title\"]}}]',8,1),(88,'2018-07-21 06:54:33.065000','33','第二十九篇',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(89,'2018-09-09 15:55:17.723000','4','新闻',1,'[{\"added\": {}}]',9,1),(90,'2018-09-09 15:55:44.324000','5','公司简介',1,'[{\"added\": {}}]',9,1),(91,'2018-09-09 15:56:26.280000','6','企业荣誉',1,'[{\"added\": {}}]',9,1),(92,'2018-09-09 15:56:46.879000','7','招聘信息',1,'[{\"added\": {}}]',9,1),(93,'2018-09-09 15:57:08.367000','34','第三十篇',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(94,'2018-09-09 15:57:15.900000','33','第二十九篇',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(95,'2018-09-09 15:57:22.542000','32','for 28',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(96,'2018-09-09 15:57:33.754000','4','shell 下第一篇',2,'[]',8,1),(97,'2018-09-09 15:57:45.280000','32','for 28',2,'[]',8,1),(98,'2018-09-09 15:57:51.846000','31','for 27',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(99,'2018-09-09 15:58:02.562000','30','for 26',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(100,'2018-09-09 15:58:11.435000','2','标题测试1',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(101,'2018-09-09 15:58:21.324000','3','标题测试2',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(102,'2018-09-09 15:58:30.050000','4','shell 下第一篇',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(103,'2018-09-09 15:58:39.485000','5','for 1',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(104,'2018-09-09 15:58:47.213000','5','for 1',2,'[]',8,1),(105,'2018-09-09 15:59:02.118000','6','for 2',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(106,'2018-09-09 15:59:11.228000','7','for 3',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(107,'2018-09-09 15:59:19.685000','8','for 4',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(108,'2018-09-09 15:59:31.062000','9','for 5',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(109,'2018-09-09 15:59:39.819000','10','for 6',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(110,'2018-09-09 15:59:48.149000','11','for 7',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(111,'2018-09-09 15:59:56.161000','12','for 8',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(112,'2018-09-09 16:00:05.311000','14','for 10',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(113,'2018-09-09 16:00:18.482000','13','for 9',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(114,'2018-09-09 16:00:27.873000','15','for 11',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(115,'2018-09-09 16:00:35.916000','16','for 12',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(116,'2018-09-09 16:00:42.361000','17','for 13',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(117,'2018-09-09 16:00:49.341000','18','for 14',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(118,'2018-09-09 16:00:57.532000','19','for 15',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(119,'2018-09-09 16:01:05.590000','20','for 16',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(120,'2018-09-09 16:01:12.272000','21','for 17',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(121,'2018-09-09 16:01:19.075000','22','for 18',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(122,'2018-09-09 16:01:25.482000','23','for 19',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(123,'2018-09-09 16:01:35.596000','24','for 20',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(124,'2018-09-09 16:01:42.838000','25','for 21',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(125,'2018-09-09 16:01:52.163000','26','for 22',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(126,'2018-09-09 16:01:59.938000','27','for 23',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(127,'2018-09-09 16:02:06.392000','28','for 24',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(128,'2018-09-09 16:02:15.319000','29','for 25',2,'[{\"changed\": {\"fields\": [\"category\"]}}]',8,1),(129,'2018-09-09 16:03:15.729000','3','分类测试2',3,'',9,1),(130,'2018-09-09 16:03:15.743000','2','分类测试1',3,'',9,1),(131,'2018-09-09 16:13:18.637000','8','we',1,'[{\"added\": {}}]',9,1),(132,'2018-09-09 16:13:33.981000','35','33333',1,'[{\"added\": {}}]',8,1),(133,'2018-09-09 16:23:28.141000','4','新闻1',2,'[{\"changed\": {\"fields\": [\"name\"]}}]',9,1),(134,'2018-09-09 16:24:14.490000','4','anews',2,'[{\"changed\": {\"fields\": [\"name\"]}}]',9,1),(135,'2018-09-09 16:24:39.810000','4','anews',2,'[]',9,1),(136,'2018-09-09 16:42:02.428000','4','a_news',2,'[{\"changed\": {\"fields\": [\"name\"]}}]',9,1),(137,'2018-09-09 16:42:22.131000','8','we',3,'',9,1),(138,'2018-09-09 17:11:20.915000','36','公司简介',1,'[{\"added\": {}}]',8,1),(139,'2018-09-09 17:17:33.015000','36','公司简介',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(140,'2018-09-09 17:31:32.221000','37','企业荣誉',1,'[{\"added\": {}}]',8,1),(141,'2018-09-09 17:32:14.693000','37','企业荣誉',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(142,'2018-09-09 17:32:35.321000','37','企业荣誉',2,'[{\"changed\": {\"fields\": [\"body\"]}}]',8,1),(143,'2018-09-09 17:45:16.628000','38','招聘信息',1,'[{\"added\": {}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(4,'auth','permission'),(2,'auth','user'),(9,'blog','category'),(8,'blog','post'),(10,'blog','product'),(7,'blog','tag'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2018-09-17 15:12:48.435394'),(2,'auth','0001_initial','2018-09-17 15:12:50.049098'),(3,'admin','0001_initial','2018-09-17 15:12:50.456519'),(4,'admin','0002_logentry_remove_auto_add','2018-09-17 15:12:50.487771'),(5,'contenttypes','0002_remove_content_type_name','2018-09-17 15:12:50.816093'),(6,'auth','0002_alter_permission_name_max_length','2018-09-17 15:12:50.973200'),(7,'auth','0003_alter_user_email_max_length','2018-09-17 15:12:51.023169'),(8,'auth','0004_alter_user_username_opts','2018-09-17 15:12:51.042158'),(9,'auth','0005_alter_user_last_login_null','2018-09-17 15:12:51.226044'),(10,'auth','0006_require_contenttypes_0002','2018-09-17 15:12:51.234039'),(11,'auth','0007_alter_validators_add_error_messages','2018-09-17 15:12:51.250031'),(12,'auth','0008_alter_user_username_max_length','2018-09-17 15:12:51.386946'),(13,'blog','0001_initial','2018-09-17 15:12:52.209816'),(14,'blog','0002_auto_20180718_0119','2018-09-17 15:12:52.511742'),(15,'blog','0003_auto_20180718_0227','2018-09-17 15:12:52.532730'),(16,'blog','0004_auto_20180719_0242','2018-09-17 15:12:52.551718'),(17,'blog','0005_product','2018-09-17 15:12:52.620675'),(18,'blog','0006_auto_20180720_1220','2018-09-17 15:12:52.745978'),(19,'sessions','0001_initial','2018-09-17 15:12:52.835541');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2sycleiz7ybakdz1mmyjx4lw6s3xpkc1','YmMyNGNiNDkwYzMxMDk1YTI1ZjU1NWRhZjFhMjBkMjg1Zjc3ZDZiNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyZGM4Zjk4MmU0YjA3ZGRkYzg1NzIwNTc5MTkxMmI3Yjc3MWE2ZGFhIn0=','2018-08-04 08:36:43.898000'),('mew18spcryrwj7pvaadxxghlwf71y4um','YmMyNGNiNDkwYzMxMDk1YTI1ZjU1NWRhZjFhMjBkMjg1Zjc3ZDZiNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyZGM4Zjk4MmU0YjA3ZGRkYzg1NzIwNTc5MTkxMmI3Yjc3MWE2ZGFhIn0=','2018-11-25 14:34:00.774392'),('n4nsd8lqoibfoqx79wq99ltmphq7s4ce','YmMyNGNiNDkwYzMxMDk1YTI1ZjU1NWRhZjFhMjBkMjg1Zjc3ZDZiNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyZGM4Zjk4MmU0YjA3ZGRkYzg1NzIwNTc5MTkxMmI3Yjc3MWE2ZGFhIn0=','2018-08-01 19:08:53.697000'),('uiuygv28v2k8kd31fe4o4j0m19r3xeqj','YmMyNGNiNDkwYzMxMDk1YTI1ZjU1NWRhZjFhMjBkMjg1Zjc3ZDZiNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyZGM4Zjk4MmU0YjA3ZGRkYzg1NzIwNTc5MTkxMmI3Yjc3MWE2ZGFhIn0=','2018-09-23 15:48:01.997000'),('za6gyqepwmy7wvca8rfxfaxz9dkhl8o1','YmMyNGNiNDkwYzMxMDk1YTI1ZjU1NWRhZjFhMjBkMjg1Zjc3ZDZiNTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyZGM4Zjk4MmU0YjA3ZGRkYzg1NzIwNTc5MTkxMmI3Yjc3MWE2ZGFhIn0=','2018-10-01 15:41:44.394987');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-12  2:34:28
