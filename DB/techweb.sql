-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 23 jan. 2020 à 11:35
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `techweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `transferer`
--

DROP TABLE IF EXISTS `transferer`;
CREATE TABLE IF NOT EXISTS `transferer` (
  `localisation` varchar(30) DEFAULT NULL,
  `nomproprio` varchar(205) DEFAULT NULL,
  `nomimage` varchar(255) DEFAULT NULL,
  `localimage` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `transferer`
--

INSERT INTO `transferer` (`localisation`, `nomproprio`, `nomimage`, `localimage`) VALUES
('TKC1', 'hojou', 'house-for-sale.jpg', './public/image/house-for-sale.jpg'),
('TKC', 'NJOHOU', 'house-3050112_640.jpg', './public/image/house-3050112_640.jpg'),
('mendong', 'landry', 'new-home-1633889_640.jpg', './public/image/new-home-1633889_640.jpg'),
('TKC', 'NJOHOU', 'house1.jpg', './public/image/house1.jpg'),
('mendong', 'landry', 'house2.jpg', './public/image/house2.jpg'),
('biyem-assi', 'baba', 'house3.jpg', './public/image/house3.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `username` varchar(25) NOT NULL,
  `name` varchar(25) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`username`, `name`, `mail`, `password`) VALUES
('landry', 'njohou', 'landrynjohou999@gmail.com', 'qsdrqs'),
('mikael', 'jotsa', 'jotsamikael@gmail.com', '123456'),
('lincoln', 'lincoln', 'lincolnw0000@gmail.com', '12345678'),
('TKC', 'bonjour', 'NJOHOU', 'book-3955129_1920.jpg'),
('KARL', 'ANGE', 'landrynjohou999@gmail.com', 'RAR'),
('Carelle', 'NDOMOUO NANA', 'carelle@gmail.com', 'carelle');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
