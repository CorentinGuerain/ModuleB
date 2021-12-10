-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : ven. 10 déc. 2021 à 14:32
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `animation`
--

--
-- Déchargement des données de la table `animation`
--

INSERT INTO `animation` (`id`, `coord_x`, `coord_y`, `animation_titre`, `animation_lieu`, `animation_photo`, `animation_description`) VALUES
(1, '45.77820', '4.83476', 'En\'quête de Lyon - Les parcours de Ludilyon ', 'Lieux divers - 69004 Lyon 4ème', 'enquete_de_lyon.jpg', 'Toute l’équipe des guides de Ludilyon s’ennuyait de ne pas pouvoir faire visiter la ville et ses alentours ! Alors, pendant les confinements, nous avons élaboré pour les familles plusieurs balades sous forme de jeux de piste. '),
(2, '45.77510', '4.83150', 'Découvrez le patrimoine lyonnais avec Ludilyon ', '1 place Croix-Rousse - 69004 Lyon 4ème', 'patrimoine_lyonnais.jpg', 'L\'objectif de l\'association : faire découvrir le patrimoine lyonnais aux enfants de 4-12 ans par des activités ludiques et originales: chasses au trésor, jeux de pistes et enquêtes policières, trait d\'union entre voir et savoir ! '),
(3, '45.78040', '4.83688', 'Séances de tissage pour enfants ', '21 rue Richan 12 bis montée Justin Godard - 69004 Lyon 4ème', 'tissage_enfants.jpg', 'Après avoir appris à tisser sur des petits métiers, les enfants font une visite commentée de l\'atelier de passementerie de Mme Letourneau. Ils profitent ensuite d\'un goûter bien mérité et repartent avec leur création ! '),
(4, '45.76980', '4.83708', 'Académie de Ballet Nini Théilade', '9 petite rue Feuillants - 69001 Lyon 1er ', 'ballet.jpg', 'Danse classique, danse de caractère, modern jazz, baroque, contemporain. Assouplissement. Stages et master classes. Stage International Theilaïa. Pratique en amateur et professionnel. Pour adultes et enfants dès 4 ans. '),
(5, '45.77050', '4.84241', 'Chai Saint Olive dégustation et atelier ', '34 rue Malesherbes - 69006 Lyon 6ème ', 'chai_st_olive.jpg', 'Chai Saint Olive est le premier chai de vinification de Lyon. Créateur de vins urbains, c\'est un lieu de production mais aussi un lieu événementiel unique dédié aux dégustations, visites, ateliers œnologiques, formations, évènements d’entreprises / privés'),
(6, '45.75850', '4.83248', 'Visites gourmandes by Tasty ', 'Départ Place Bellecour - 69002 Lyon 2ème', 'food-tasty-lyon-visite-gourmande-tarte-praline.jpg', 'Et si vous découvriez Lyon autrement ? Nous vous proposons des visites gourmandes rythmées par des anecdotes, recettes, petites et grandes histoires et bien sûr dégustations ! Découvrez Lyon dans toutes ses saveurs !'),
(7, '45.75850', '4.83248', 'Parcours audioguidé dans le Vieux-Lyon\r\n', 'Place Bellecour - 69002 Lyon 2ème ', 'le-vieux-lyon-1-FR-rewind.jpg', 'Envie de visiter Lyon avec un guide local et passionné dans votre poche et à votre rythme ? C’est désormais possible grâce à l’application Rewind !'),
(8, '45.77230', '4.82359', 'Balades en Side-Car avec la Belle Vadrouille ', '21 rue des Chartreux - 69001 Lyon 1er ', 'balade_en_sidecar.jpg', 'Vivez un moment de convivialité et de partage, seul ou à deux avec La Belle Vadrouille ! Grâce à des casques équipés d’un système de communication, échangez avec votre guide Christelle à l\'occasion d\'une virée aussi séduisante qu\'amusante !');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
