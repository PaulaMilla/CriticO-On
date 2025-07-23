-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2025 a las 18:29:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `criticoon-db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor`
--

CREATE TABLE `actor` (
  `id_actor` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actor`
--

INSERT INTO `actor` (`id_actor`, `nombre`, `url_foto`, `nacionalidad`, `fecha_nacimiento`) VALUES
(1, 'Bryan Cranston', 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/actualidad/bryan-cranston-busca-trabajo/5391513-3-esl-ES/Bryan-Cranston-busca-trabajo.jpg', 'Estadounidense', '1956-03-07'),
(2, 'Winona Ryder', 'https://cdn-3.expansion.mx/dims4/default/369a5a0/2147483647/strip/true/crop/290x323+0+0/resize/1200x1337!/format/webp/quality/60/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2011%2F02%2F19%2Fwinona.jpg', 'Estadounidense', '1971-10-29'),
(3, 'Ryunosuke Kamiki', 'https://upload.wikimedia.org/wikipedia/commons/9/90/Kamiki_Ryunosuke_from_%22Godzilla_Minus_One%22_at_Red_Carpet_of_the_Tokyo_International_Film_Festival_2023_%2853348227359%29_%28cropped%29.jpg', 'Japonés', '1993-05-19'),
(4, 'Yuki Kaji', 'https://static.wikia.nocookie.net/doblaje/images/2/24/Y%C5%ABki_Kaji_%E6%A2%B6_%E8%A3%95%E8%B2%B4.jpg/revision/latest?cb=20240101033051&path-prefix=es', 'Japonés', '1985-09-03'),
(5, 'Rumi Hiiragi', 'https://m.media-amazon.com/images/M/MV5BOTE2ZTYxNjgtNGM0MC00ZmUxLTkwOGMtNTY4ZTFjNTg3MWE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Japonés', '1987-08-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor_sp`
--

CREATE TABLE `actor_sp` (
  `fk_actor` bigint(20) NOT NULL,
  `fk_sp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actor_sp`
--

INSERT INTO `actor_sp` (`fk_actor`, `fk_sp`) VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 5),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id_genero` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id_genero`, `nombre`) VALUES
(4, 'Animación'),
(2, 'Ciencia Ficción'),
(7, 'comedia'),
(1, 'Drama'),
(3, 'Fantasía'),
(6, 'romance'),
(5, 'Thriller');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `review`
--

CREATE TABLE `review` (
  `id_review` bigint(20) NOT NULL,
  `comentario` text DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL CHECK (`rating` >= 0 and `rating` <= 10),
  `cantidad_likes` int(11) DEFAULT 0,
  `fecha` date NOT NULL,
  `spoiler` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `review`
--

INSERT INTO `review` (`id_review`, `comentario`, `rating`, `cantidad_likes`, `fecha`, `spoiler`) VALUES
(1, 'Obra maestra de principio a fin.', 9.8, 250, '2023-06-15', 0),
(2, 'Gran ambientación y nostalgia ochentera.', 8.5, 180, '2023-06-20', 0),
(3, 'Una historia emocionalmente poderosa y hermosa.', 9.2, 300, '2023-07-01', 0),
(4, 'Narrativa intensa y giros inesperados.', 9.0, 210, '2023-05-10', 1),
(5, 'Una joya animada que trasciende edades.', 9.7, 280, '2023-04-18', 0),
(6, 'Visualmente impresionante y profundamente emocional.', 9.4, 270, '2023-06-10', 0),
(7, 'Cada capítulo te deja con ganas de más.', 8.9, 220, '2023-06-18', 0),
(8, 'Una obra maestra de la ciencia ficción.', 9.6, 310, '2023-07-05', 0),
(9, 'El desarrollo de personajes es simplemente brillante.', 9.3, 245, '2023-06-22', 0),
(10, 'Una narrativa única que rompe los esquemas clásicos.', 9.1, 200, '2023-06-25', 0),
(11, 'jujuju', 5.9, 0, '2025-06-12', 1),
(12, 'buenw buenq ', 5.0, 0, '2025-06-13', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `review_sp`
--

CREATE TABLE `review_sp` (
  `fk_review` bigint(20) NOT NULL,
  `fk_sp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `review_sp`
--

INSERT INTO `review_sp` (`fk_review`, `fk_sp`) VALUES
(1, 1),
(11, 1),
(2, 2),
(3, 3),
(12, 3),
(4, 4),
(5, 5),
(9, 6),
(10, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serie_pelicula`
--

CREATE TABLE `serie_pelicula` (
  `id_sp` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `temporadas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `serie_pelicula`
--

INSERT INTO `serie_pelicula` (`id_sp`, `nombre`, `descripcion`, `fecha`, `url_foto`, `temporadas`) VALUES
(1, 'Breaking Bad', 'Un profesor de química con cáncer se convierte en fabricante de metanfetamina.', '2008-01-20', 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 5),
(2, 'Stranger Things', 'Un grupo de niños se enfrenta a fenómenos paranormales en Hawkins.', '2016-07-15', 'https://visualprint-store.com/cdn/shop/files/uKYUR8GPkKRCksczYDJb3pwZauo.jpg?v=1684258044&width=1946', 4),
(3, 'Your Name', 'Dos adolescentes conectan a través de sueños en un fenómeno sobrenatural.', '2016-08-26', 'https://visualprint-store.com/cdn/shop/products/q719jXXEzOoYaps6babgKnONONX.jpg?v=1665615053&width=1445', 0),
(4, 'Attack on Titan', 'Humanos luchan contra titanes gigantes que amenazan su existencia.', '2013-04-07', 'https://images-cdn.ubuy.co.id/66fe8d03f002e434317e000d-trends-international-attack-on-titan.jpg', 4),
(5, 'Spirited Away', 'Una niña queda atrapada en un mundo espiritual y busca volver a casa.', '2001-07-20', 'https://m.media-amazon.com/images/I/71E4cV914GL._AC_SL1000_.jpg', 0),
(6, 'The Mandalorian', 'Un cazarrecompensas solitario navega por los márgenes de la galaxia.', '2019-11-12', 'https://presslatam.cl/wp-content/uploads/2023/04/unnamed-10.jpg', 3),
(7, 'Interstellar', 'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio.', '2014-11-07', 'https://mir-s3-cdn-cf.behance.net/project_modules/source/8d8f28105415493.619ded067937d.jpg', 0),
(8, 'Los diarios de la boticaria', 'Una joven con conocimientos medicinales se ve envuelta en intrigas del palacio imperial.', '2023-10-21', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G3KHEVDJ7-backdrop_wide', 1),
(9, 'Cyberpunk: Edgerunners', 'Un chico callejero intenta sobrevivir en una ciudad del futuro obsesionada con la tecnología y los implantes corporales.', '2022-09-13', 'https://www.cyberpunk.net/build/images/edgerunners/top/cover-desktop@1x-7e66501a.jpg', 1),
(10, 'The Bear', 'Un joven chef de alta cocina regresa a Chicago para hacerse cargo del restaurante familiar.', '2022-06-23', 'https://images6.alphacoders.com/130/1301159.jpg', 3),
(11, 'The notebook', 'En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.', '2022-05-15', 'https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg', NULL),
(12, 'Son como niños 2', 'Lenny se ha trasladado con su familia a la pequeña ciudad donde tanto él como sus amigos se criaron. En esta ocasión, los adultos serán quienes reciban toda una lección de sus propios hijos.', '2022-05-15', 'https://m.media-amazon.com/images/M/MV5BZTVhMWIxNWQtMDk5Ny00YzNlLTgxMGEtYjQ3MDNhNjg4Y2NmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', NULL),
(13, 'Solo leveling', 'En un mundo en el que ciertos humanos llamados «cazadores» poseen habilidades mágicas, estos deben luchar contra monstruos para proteger a la raza humana de una aniquilación segura', '2020-05-15', 'https://preview.redd.it/solo-levelling-s2-script-v0-e9cu5ptnxn2e1.jpeg?width=640&crop=smart&auto=webp&s=d9b400c6818b2360b1dfa43af79f8cebc7e8c1dd', 2),
(14, 'Dandadan', 'DAN DA DAN: EVIL EYE sigue a Momo y Okarun, dos adolescentes que viajan a un misterioso pueblo de aguas termales para investigar un caso paranormal. Pero nada es lo que parece y pronto enfrentan fuerzas ocultas más peligrosas de lo esperado', '2020-05-15', 'https://a.storyblok.com/f/178900/1064x1504/54fc2adbc2/dan-da-dan-second-key-visual.jpg/m/filters:quality(95)format(webp)', 2),
(15, 'Orgullo y prejuicio', 'Elizabeth Bennet conoce al apuesto y adinerado Sr. Darcy, con quien, rápidamente, inicia una intensa y compleja relación.', '2005-05-15', 'https://m.media-amazon.com/images/S/pv-target-images/15a41e61c30b3e9df74d61ac747fe3e1d5dc4ba30cf8ca3ac85a9148344efeba.jpg', 1),
(16, 'La La Land: ciudad de sueños', 'Sebastian, un pianista de jazz, y Mia, una aspirante a actriz, se enamoran locamente; pero la ambición desmedida que tienen por triunfar en sus respectivas carreras, en una ciudad como Los Ángeles, repleta de competencia y carente de piedad, pone en peligro su amor.', '2017-05-15', 'https://pics.filmaffinity.com/La_ciudad_de_las_estrellas_La_La_Land-133356261-large.jpg', 1),
(17, 'Call me by your name', 'En Italia, en la década de 1980, en medio del esplendor del verano, Elio y Oliver descubren la embriagadora belleza de un deseo naciente que va a alterar sus vidas para siempre.', '2018-05-15', 'https://pics.filmaffinity.com/Call_Me_by_Your_Name-241496265-large.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sp_genero`
--

CREATE TABLE `sp_genero` (
  `fk_sp` bigint(20) NOT NULL,
  `fk_genero` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sp_genero`
--

INSERT INTO `sp_genero` (`fk_sp`, `fk_genero`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 2),
(4, 5),
(5, 3),
(5, 4),
(11, 6),
(12, 7),
(13, 4),
(14, 4),
(15, 6),
(16, 6),
(17, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_registrado`
--

CREATE TABLE `usuario_registrado` (
  `id_usuario` bigint(20) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `url_avatar` varchar(255) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `alias` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_registrado`
--

INSERT INTO `usuario_registrado` (`id_usuario`, `rol`, `url_avatar`, `nombre`, `alias`, `correo`, `password`, `fecha_registro`) VALUES
(1, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'Ana Pérez', 'anap', 'ana.perez@example.com', 'hashedpass1', '2023-01-10'),
(2, 'admin', 'https://cdn-icons-png.freepik.com/512/12965/12965382.png', 'Carlos Ruiz', 'carlosr', 'carlos.ruiz@example.com', 'hashedpass2', '2023-02-15'),
(3, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'Lucía Gómez', 'lucia_g', 'lucia.gomez@example.com', 'hashedpass3', '2023-03-20'),
(4, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'Miguel Torres', 'miguelT', 'miguel.torres@example.com', 'hashedpass4', '2023-04-05'),
(5, 'admin', 'https://cdn-icons-png.freepik.com/512/12965/12965382.png', 'Sofía Díaz', 'sofiaD', 'sofia.diaz@example.com', 'hashedpass5', '2023-05-12'),
(6, 'usuario', NULL, 'Juli Figueroa', 'juliruner', 'julis@example.com', '$2b$10$y8UHTSNyJL./e0a.7hj8UOBHX1SFSAhMTjcgQjYwjV53RhGTuI.7C', '2025-06-09'),
(7, 'usuario', NULL, 'Paula Veloso', 'Milla', 'milla@example.com', '$2b$10$9nGZBqx75Mzhgi5Swza6n.455eVk.2OPdrGzjlJcmfTD8j6JOqopm', '2025-06-09'),
(8, 'usuario', NULL, 'Julisa Figueroa ', 'Juli', 'JulisaFig@gmail.com', '$2b$10$sVh/kTWnZT33EGOesvcOZ.aFj6RRDFsMcVIzevtahq6EFo6AjPfGe', '2025-06-10'),
(9, 'usuario', NULL, 'Polo Figueroa', 'polito', 'polito@gmail.com', '$2b$10$o.7ZuY6WugySQaNqR23qturI4r/TJku5Q8aSqWZ.vvlZr7Jftrota', '2025-06-10'),
(10, 'usuario', NULL, 'ares figueroa', 'ares', 'ares@gmail.com', '$2b$10$G757ooea1Sr14YosR/FU5edGkcEcBsqkREuvV4h106H7LjF6jv0MC', '2025-06-10'),
(11, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'bastian Figueroa', 'basti', 'bastian@gmail.com', '$2b$10$fYSkRyUBpuW3PEQFHht9AOThpVGPJiq7LbpEC3cwT9rfHx3/MWMWG', '2025-06-10'),
(22, 'usuario', NULL, 'samuel samuel', 'sami', 'sami@gmail.com', '$2b$10$U1Nas9wv7V9z1szOeeFkre8HiRIJIpa285.L0/kMYnimGk1KmBVay', '2025-06-11'),
(24, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'rrr', 'politor', 'pofiri@gmail.com', '$2b$10$mMDRfeIBpNizvlxpwuOWd.KW68GsP9AtxLMkW1FkMfsAJQHbm9y/i', '2025-07-22'),
(25, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'Julita', 'Julita', 'julita@gmail.com', '$2b$10$7O8gUkHch74CtyWosKA1veJXi23zVmym7TREH1bJTJePqHYyPZF9K', '2025-07-22'),
(26, 'admin', 'https://cdn-icons-png.freepik.com/512/12965/12965381.png', 'Admin', 'admin', 'admin@criticoon.com', '12345678', '2025-07-22'),
(27, 'usuario', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'prueba12', 'prueba12', 'prueba12@gmail.com', '$2b$10$BeuzI0YZMOvTAmv3QRsy7u8UlZp3LUFxozo0Uf8Qrjp09zqIUFlBq', '2025-07-22'),
(28, 'admin', 'https://cdn-icons-png.flaticon.com/512/12965/12965377.png', 'admin123', 'admin123', 'admin123@gmail.com', '$2b$10$K1igI40CE3Jpo.zh6t8DPOPsh4dNrdnOKOWKdODD7Vuir7kzCtDxS', '2025-07-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_review`
--

CREATE TABLE `usuario_review` (
  `fk_usuario` bigint(20) NOT NULL,
  `fk_review` bigint(20) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_review`
--

INSERT INTO `usuario_review` (`fk_usuario`, `fk_review`, `fecha`) VALUES
(1, 1, '2023-06-16'),
(1, 11, '2025-06-12'),
(2, 2, '2023-06-21'),
(3, 3, '2023-07-02'),
(4, 4, '2023-05-11'),
(5, 5, '2023-04-19'),
(22, 12, '2025-06-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_sp`
--

CREATE TABLE `usuario_sp` (
  `fk_usuario` bigint(20) NOT NULL,
  `fk_sp` bigint(20) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_sp`
--

INSERT INTO `usuario_sp` (`fk_usuario`, `fk_sp`, `estado`) VALUES
(1, 1, 'completado'),
(1, 3, 'completado'),
(2, 2, 'viendo'),
(2, 5, 'completado'),
(3, 2, 'completado'),
(3, 4, 'viendo'),
(4, 5, 'pendiente'),
(5, 1, 'viendo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id_actor`);

--
-- Indices de la tabla `actor_sp`
--
ALTER TABLE `actor_sp`
  ADD PRIMARY KEY (`fk_actor`,`fk_sp`),
  ADD KEY `fk_sp` (`fk_sp`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id_genero`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`);

--
-- Indices de la tabla `review_sp`
--
ALTER TABLE `review_sp`
  ADD PRIMARY KEY (`fk_review`),
  ADD KEY `fk_sp` (`fk_sp`);

--
-- Indices de la tabla `serie_pelicula`
--
ALTER TABLE `serie_pelicula`
  ADD PRIMARY KEY (`id_sp`);

--
-- Indices de la tabla `sp_genero`
--
ALTER TABLE `sp_genero`
  ADD PRIMARY KEY (`fk_sp`,`fk_genero`),
  ADD KEY `fk_genero` (`fk_genero`);

--
-- Indices de la tabla `usuario_registrado`
--
ALTER TABLE `usuario_registrado`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `alias` (`alias`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `usuario_review`
--
ALTER TABLE `usuario_review`
  ADD PRIMARY KEY (`fk_usuario`,`fk_review`),
  ADD KEY `fk_review` (`fk_review`);

--
-- Indices de la tabla `usuario_sp`
--
ALTER TABLE `usuario_sp`
  ADD PRIMARY KEY (`fk_usuario`,`fk_sp`),
  ADD KEY `fk_sp` (`fk_sp`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actor`
--
ALTER TABLE `actor`
  MODIFY `id_actor` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id_genero` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `review`
--
ALTER TABLE `review`
  MODIFY `id_review` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `serie_pelicula`
--
ALTER TABLE `serie_pelicula`
  MODIFY `id_sp` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuario_registrado`
--
ALTER TABLE `usuario_registrado`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actor_sp`
--
ALTER TABLE `actor_sp`
  ADD CONSTRAINT `actor_sp_ibfk_1` FOREIGN KEY (`fk_actor`) REFERENCES `actor` (`id_actor`),
  ADD CONSTRAINT `actor_sp_ibfk_2` FOREIGN KEY (`fk_sp`) REFERENCES `serie_pelicula` (`id_sp`);

--
-- Filtros para la tabla `review_sp`
--
ALTER TABLE `review_sp`
  ADD CONSTRAINT `review_sp_ibfk_1` FOREIGN KEY (`fk_review`) REFERENCES `review` (`id_review`),
  ADD CONSTRAINT `review_sp_ibfk_2` FOREIGN KEY (`fk_sp`) REFERENCES `serie_pelicula` (`id_sp`);

--
-- Filtros para la tabla `sp_genero`
--
ALTER TABLE `sp_genero`
  ADD CONSTRAINT `sp_genero_ibfk_1` FOREIGN KEY (`fk_sp`) REFERENCES `serie_pelicula` (`id_sp`),
  ADD CONSTRAINT `sp_genero_ibfk_2` FOREIGN KEY (`fk_genero`) REFERENCES `genero` (`id_genero`);

--
-- Filtros para la tabla `usuario_review`
--
ALTER TABLE `usuario_review`
  ADD CONSTRAINT `usuario_review_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario_registrado` (`id_usuario`),
  ADD CONSTRAINT `usuario_review_ibfk_2` FOREIGN KEY (`fk_review`) REFERENCES `review` (`id_review`);

--
-- Filtros para la tabla `usuario_sp`
--
ALTER TABLE `usuario_sp`
  ADD CONSTRAINT `usuario_sp_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario_registrado` (`id_usuario`),
  ADD CONSTRAINT `usuario_sp_ibfk_2` FOREIGN KEY (`fk_sp`) REFERENCES `serie_pelicula` (`id_sp`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
