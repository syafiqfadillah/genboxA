-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2022 at 09:44 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `genbox_pulsa`
--

-- --------------------------------------------------------

--
-- Table structure for table `riwayat`
--

CREATE TABLE `riwayat` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(30) DEFAULT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `nominal` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat`
--

INSERT INTO `riwayat` (`id`, `tanggal`, `jenis`, `nominal`) VALUES
(1, '1/11/1111', 'Top-Up', '10000'),
(2, '1/1/1111', '', '585002'),
(3, '1/1/1111', 'Jual', '605002'),
(4, '1/1/1111', 'Top-Up', '607002'),
(5, '1/1/1111', 'Top-Up', '2000'),
(6, '1/1/1111', 'Top-Up', '0'),
(7, '1/1/1111', 'Top-Up', '10000'),
(8, '1/1/1111', 'Top-Up', '100000'),
(9, '1/1/1111', 'Top-Up', '10000'),
(10, '1/1/1111', 'Top-Up', '10000'),
(11, '1/1/1111', 'Top-Up', '10000'),
(12, '1/1/1111', 'Jual', '20000'),
(13, '1/1/1111', 'Jual', '20000'),
(14, '1/1/1111', 'Top-Up', '0'),
(15, '1/1/1111', 'Top-Up', '0'),
(16, '1/1/1111', 'Top-Up', '10000'),
(17, '1/1/1111', 'Top-Up', '25000'),
(18, '1/1/1111', 'Top-Up', '20000'),
(19, '1/1/1111', 'Jual', '20000'),
(20, '1/1/1111', 'Top-Up', '10000'),
(21, '1/1/1111', 'false', '20000'),
(22, '1/1/1111', 'Jual', '10000'),
(23, '1/1/1111', 'Top-Up', '20000'),
(24, '1/1/1111', 'Jual', '10000'),
(25, '1/1/1111', 'Jual', '100000'),
(26, '1/1/1111', 'Jual', '100000'),
(27, '1/1/1111', 'Top-Up', '20000'),
(28, '1/1/1111', 'Top-Up', '10000'),
(29, '1/1/1111', 'Jual', '10000'),
(30, '1/1/1111', 'Jual', '10000'),
(31, '2/2/2222', 'Jual', '10000'),
(32, '3/3/3333', 'Jual', '5000'),
(33, '1/1/1111', 'Jual', '100000'),
(34, '2/2/2222', 'Jual', '100000'),
(35, '1/1/1111', 'Jual', '10000'),
(36, '1/1/1111', 'Jual', '5000'),
(37, '1/1/1111', 'Top-Up', '20000'),
(38, '1/1/1111', 'Top-Up', '10000'),
(39, '1/1/1111', 'Jual', '25000'),
(40, '2/2/2222', 'Jual', '100000'),
(41, '1/1/1111', 'Jual', '25000'),
(42, '1/1/1111', 'Jual', '5000'),
(43, '1/1/1111', 'Jual', '100000'),
(44, '1/1/1111', 'Top-Up', '50000'),
(45, '1/1/1111', 'Jual', '10000'),
(46, '1/1/1111', 'Jual', '10000'),
(47, '1/1/1111', 'Jual', '25000'),
(48, '1/1/1111', 'true', '0'),
(49, '1/1/1111', 'true', '100000'),
(50, '1/1/1111', 'true', '100000'),
(51, '2/2/2222', 'Jual', '10000'),
(52, '1/1/1111', 'Top-Up', '20000'),
(53, '1/1/1111', 'true', '100000'),
(54, '1/1/1111', 'Jual', '100000'),
(55, '1/1/1111', 'Top-Up', '100000'),
(56, '1/1/1111', 'Jual', '100000'),
(57, '1/1/1111', 'Jual', '10000'),
(58, '1/1/1111', 'true', '10000'),
(59, '1/1/1111', 'true', '10000'),
(60, '1/1/1111', 'Top-Up', '20000'),
(61, '1/1/1111', 'Top-Up', '10000'),
(62, '1/1/1111', 'Jual', '5000'),
(63, '1/1/1111', 'Top-Up', '10000'),
(64, '1/1/1111', 'Jual', '25000'),
(65, '1/1/1111', 'Jual', '5000');

-- --------------------------------------------------------

--
-- Table structure for table `saldo`
--

CREATE TABLE `saldo` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(30) DEFAULT NULL,
  `nominal` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saldo`
--

INSERT INTO `saldo` (`id`, `tanggal`, `nominal`) VALUES
(1, '1/11/1111', '57100');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `riwayat`
--
ALTER TABLE `riwayat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saldo`
--
ALTER TABLE `saldo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `riwayat`
--
ALTER TABLE `riwayat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `saldo`
--
ALTER TABLE `saldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
