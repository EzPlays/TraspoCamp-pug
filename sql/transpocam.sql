-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2022 a las 19:12:11
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transpocam`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camicon`
--

CREATE TABLE `camicon` (
  `id` int(11) NOT NULL,
  `camion_id` int(11) NOT NULL,
  `camionero_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camion`
--

CREATE TABLE `camion` (
  `id` int(11) NOT NULL,
  `placa` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `potencia` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camion`
--

INSERT INTO `camion` (`id`, `placa`, `modelo`, `potencia`, `tipo`) VALUES
(1, '3443ADS', '2002 de carga', '50 caballos', 'de carga'),
(3, 'aaee243', '2022 nuevo', '100 caballos', 'pa todo sirve ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camionero`
--

CREATE TABLE `camionero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` int(40) NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camionero`
--

INSERT INTO `camionero` (`id`, `nombre`, `telefono`, `direccion`) VALUES
(1, 'emanuel', 2147483647, 'san eduardo'),
(2, 'janer', 2147483647, 'la paz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`id`, `nombre`) VALUES
(1, 'popayan'),
(2, 'santander'),
(3, 'bogota'),
(4, 'medellín');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete`
--

CREATE TABLE `paquete` (
  `id` int(11) NOT NULL,
  `destinatario` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `camionero_id` int(11) NOT NULL,
  `ciudad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `camicon`
--
ALTER TABLE `camicon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `camionero_id` (`camionero_id`),
  ADD KEY `camion_id` (`camion_id`);

--
-- Indices de la tabla `camion`
--
ALTER TABLE `camion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `camionero`
--
ALTER TABLE `camionero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ciudad_id` (`ciudad_id`),
  ADD KEY `camionero_id` (`camionero_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `camicon`
--
ALTER TABLE `camicon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `camion`
--
ALTER TABLE `camion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `camionero`
--
ALTER TABLE `camionero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paquete`
--
ALTER TABLE `paquete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `camicon`
--
ALTER TABLE `camicon`
  ADD CONSTRAINT `camicon_ibfk_1` FOREIGN KEY (`camionero_id`) REFERENCES `camionero` (`id`),
  ADD CONSTRAINT `camicon_ibfk_2` FOREIGN KEY (`camion_id`) REFERENCES `camion` (`id`);

--
-- Filtros para la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD CONSTRAINT `paquete_ibfk_1` FOREIGN KEY (`camionero_id`) REFERENCES `camionero` (`id`),
  ADD CONSTRAINT `paquete_ibfk_2` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
