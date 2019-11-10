-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para aerolinea
DROP DATABASE IF EXISTS `aerolinea`;
CREATE DATABASE IF NOT EXISTS `aerolinea` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `aerolinea`;

-- Volcando estructura para tabla aerolinea.aerolinea
DROP TABLE IF EXISTS `aerolinea`;
CREATE TABLE IF NOT EXISTS `aerolinea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `idAeropuerto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_aerolinea_aeropuerto1_idx` (`idAeropuerto`),
  CONSTRAINT `fk_aerolinea_aeropuerto1` FOREIGN KEY (`idAeropuerto`) REFERENCES `aeropuerto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.aerolinea: ~1 rows (aproximadamente)
DELETE FROM `aerolinea`;
/*!40000 ALTER TABLE `aerolinea` DISABLE KEYS */;
INSERT INTO `aerolinea` (`id`, `nombre`, `descripcion`, `idAeropuerto`) VALUES
	(1, 'Avianca', 'aerolinea descripcion', 1);
/*!40000 ALTER TABLE `aerolinea` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.aeropuerto
DROP TABLE IF EXISTS `aeropuerto`;
CREATE TABLE IF NOT EXISTS `aeropuerto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.aeropuerto: ~2 rows (aproximadamente)
DELETE FROM `aeropuerto`;
/*!40000 ALTER TABLE `aeropuerto` DISABLE KEYS */;
INSERT INTO `aeropuerto` (`id`, `nombre`, `direccion`) VALUES
	(1, 'El Eden', 'Armenia/Quindio'),
	(2, 'El Dorado', 'Bogota/Cundinamarca');
/*!40000 ALTER TABLE `aeropuerto` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.avion
DROP TABLE IF EXISTS `avion`;
CREATE TABLE IF NOT EXISTS `avion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cantidadPuestos` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `idAerolinea` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_avion_aerolinea1_idx` (`idAerolinea`),
  CONSTRAINT `fk_avion_aerolinea1` FOREIGN KEY (`idAerolinea`) REFERENCES `aerolinea` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.avion: ~1 rows (aproximadamente)
DELETE FROM `avion`;
/*!40000 ALTER TABLE `avion` DISABLE KEYS */;
INSERT INTO `avion` (`id`, `cantidadPuestos`, `marca`, `modelo`, `idAerolinea`) VALUES
	(1, 250, 'AvioPlus', 'MZ-4790', 1);
/*!40000 ALTER TABLE `avion` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.azafata
DROP TABLE IF EXISTS `azafata`;
CREATE TABLE IF NOT EXISTS `azafata` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_vuelo_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.azafata: ~1 rows (aproximadamente)
DELETE FROM `azafata`;
/*!40000 ALTER TABLE `azafata` DISABLE KEYS */;
INSERT INTO `azafata` (`id`) VALUES
	(2);
/*!40000 ALTER TABLE `azafata` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.clase
DROP TABLE IF EXISTS `clase`;
CREATE TABLE IF NOT EXISTS `clase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.clase: ~3 rows (aproximadamente)
DELETE FROM `clase`;
/*!40000 ALTER TABLE `clase` DISABLE KEYS */;
INSERT INTO `clase` (`id`, `descripcion`) VALUES
	(1, 'VIP'),
	(2, 'Economica'),
	(3, 'Turista');
/*!40000 ALTER TABLE `clase` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.inventario
DROP TABLE IF EXISTS `inventario`;
CREATE TABLE IF NOT EXISTS `inventario` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_inventario_aerolinea1_idx` (`id`),
  CONSTRAINT `fk_inventario_aerolinea1` FOREIGN KEY (`id`) REFERENCES `aerolinea` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.inventario: ~0 rows (aproximadamente)
DELETE FROM `inventario`;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.inventarioproducto
DROP TABLE IF EXISTS `inventarioproducto`;
CREATE TABLE IF NOT EXISTS `inventarioproducto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idInventario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_inventarioProducto_producto1_idx` (`idProducto`),
  KEY `fk_inventarioProducto_inventario1_idx` (`idInventario`),
  CONSTRAINT `fk_inventarioProducto_inventario1` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_inventarioProducto_producto1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.inventarioproducto: ~0 rows (aproximadamente)
DELETE FROM `inventarioproducto`;
/*!40000 ALTER TABLE `inventarioproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventarioproducto` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.pasajero
DROP TABLE IF EXISTS `pasajero`;
CREATE TABLE IF NOT EXISTS `pasajero` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pasajero_persona1_idx` (`id`),
  CONSTRAINT `fk_pasajero_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.pasajero: ~1 rows (aproximadamente)
DELETE FROM `pasajero`;
/*!40000 ALTER TABLE `pasajero` DISABLE KEYS */;
INSERT INTO `pasajero` (`id`) VALUES
	(3);
/*!40000 ALTER TABLE `pasajero` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.persona
DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `edad` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.persona: ~4 rows (aproximadamente)
DELETE FROM `persona`;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` (`id`, `nombre`, `cedula`, `apellido`, `edad`) VALUES
	(1, 'Daryl', '1094971007', 'Ospina', '15'),
	(2, 'Alvaro', '1094981008', 'Corrales', '35'),
	(3, 'Jhon', '1094991009', 'Maricon', '390'),
	(4, 'Nico', '1094910010', 'Cabi', '66');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.piloto
DROP TABLE IF EXISTS `piloto`;
CREATE TABLE IF NOT EXISTS `piloto` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_piloto_persona1_idx` (`id`),
  CONSTRAINT `fk_piloto_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.piloto: ~1 rows (aproximadamente)
DELETE FROM `piloto`;
/*!40000 ALTER TABLE `piloto` DISABLE KEYS */;
INSERT INTO `piloto` (`id`) VALUES
	(1);
/*!40000 ALTER TABLE `piloto` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.producto
DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.producto: ~0 rows (aproximadamente)
DELETE FROM `producto`;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.promocion
DROP TABLE IF EXISTS `promocion`;
CREATE TABLE IF NOT EXISTS `promocion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(60) NOT NULL,
  `porcentaje` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.promocion: ~1 rows (aproximadamente)
DELETE FROM `promocion`;
/*!40000 ALTER TABLE `promocion` DISABLE KEYS */;
INSERT INTO `promocion` (`id`, `descripcion`, `porcentaje`) VALUES
	(1, 'usuario preferencial', 50);
/*!40000 ALTER TABLE `promocion` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.ruta
DROP TABLE IF EXISTS `ruta`;
CREATE TABLE IF NOT EXISTS `ruta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `idAeropuerto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ruta_aeropuerto1_idx` (`idAeropuerto`),
  CONSTRAINT `fk_ruta_aeropuerto1` FOREIGN KEY (`idAeropuerto`) REFERENCES `aeropuerto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.ruta: ~1 rows (aproximadamente)
DELETE FROM `ruta`;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` (`id`, `descripcion`, `valor`, `idAeropuerto`) VALUES
	(1, 'Ruta a bogota', 1400500, 2);
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.vendedor
DROP TABLE IF EXISTS `vendedor`;
CREATE TABLE IF NOT EXISTS `vendedor` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pasajero_persona2_idx` (`id`),
  CONSTRAINT `fk_pasajero_persona2` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.vendedor: ~1 rows (aproximadamente)
DELETE FROM `vendedor`;
/*!40000 ALTER TABLE `vendedor` DISABLE KEYS */;
INSERT INTO `vendedor` (`id`) VALUES
	(4);
/*!40000 ALTER TABLE `vendedor` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.vuelo
DROP TABLE IF EXISTS `vuelo`;
CREATE TABLE IF NOT EXISTS `vuelo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puestos` int(11) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idAvion` int(11) NOT NULL,
  `idPiloto` int(11) NOT NULL,
  `idRuta` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vuelo_avion1_idx` (`idAvion`),
  KEY `fk_vuelo_piloto1_idx` (`idPiloto`),
  KEY `fk_vuelo_ruta1_idx` (`idRuta`),
  CONSTRAINT `fk_vuelo_avion1` FOREIGN KEY (`idAvion`) REFERENCES `avion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_vuelo_piloto1` FOREIGN KEY (`idPiloto`) REFERENCES `piloto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_vuelo_ruta1` FOREIGN KEY (`idRuta`) REFERENCES `ruta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.vuelo: ~1 rows (aproximadamente)
DELETE FROM `vuelo`;
/*!40000 ALTER TABLE `vuelo` DISABLE KEYS */;
INSERT INTO `vuelo` (`id`, `puestos`, `estado`, `idAvion`, `idPiloto`, `idRuta`) VALUES
	(1, 250, 'En sala de espera', 1, 1, 1);
/*!40000 ALTER TABLE `vuelo` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.vueloazafata
DROP TABLE IF EXISTS `vueloazafata`;
CREATE TABLE IF NOT EXISTS `vueloazafata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idAzafata` int(11) NOT NULL,
  `idVuelo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vuelo_azafata_azafata1_idx` (`idAzafata`),
  KEY `fk_vuelo_azafata_vuelo1_idx` (`idVuelo`),
  CONSTRAINT `fk_vuelo_azafata_azafata1` FOREIGN KEY (`idAzafata`) REFERENCES `azafata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_vuelo_azafata_vuelo1` FOREIGN KEY (`idVuelo`) REFERENCES `vuelo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.vueloazafata: ~0 rows (aproximadamente)
DELETE FROM `vueloazafata`;
/*!40000 ALTER TABLE `vueloazafata` DISABLE KEYS */;
/*!40000 ALTER TABLE `vueloazafata` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.vuelopasajero
DROP TABLE IF EXISTS `vuelopasajero`;
CREATE TABLE IF NOT EXISTS `vuelopasajero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPasajero` int(11) NOT NULL,
  `idVuelo` int(11) NOT NULL,
  `asiento` int(11) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVendedor` int(11) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `idClase` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_vuelopasajero_pasajero` (`idPasajero`),
  KEY `FK_vuelopasajero_vuelo` (`idVuelo`),
  KEY `FK_vuelopasajero_vendedor` (`idVendedor`),
  KEY `FK_vuelopasajero_clase` (`idClase`),
  CONSTRAINT `FK_vuelopasajero_clase` FOREIGN KEY (`idClase`) REFERENCES `clase` (`id`),
  CONSTRAINT `FK_vuelopasajero_pasajero` FOREIGN KEY (`idPasajero`) REFERENCES `pasajero` (`id`),
  CONSTRAINT `FK_vuelopasajero_vendedor` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor` (`id`),
  CONSTRAINT `FK_vuelopasajero_vuelo` FOREIGN KEY (`idVuelo`) REFERENCES `vuelo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.vuelopasajero: ~2 rows (aproximadamente)
DELETE FROM `vuelopasajero`;
/*!40000 ALTER TABLE `vuelopasajero` DISABLE KEYS */;
INSERT INTO `vuelopasajero` (`id`, `idPasajero`, `idVuelo`, `asiento`, `estado`, `idVendedor`, `precio`, `idClase`) VALUES
	(1, 3, 1, 46, 'CANCELADO', 4, 1400500, 1),
	(2, 3, 1, 46, 'COMPRADO', 4, 1400500, 1);
/*!40000 ALTER TABLE `vuelopasajero` ENABLE KEYS */;

-- Volcando estructura para tabla aerolinea.vuelopasajeropromocion
DROP TABLE IF EXISTS `vuelopasajeropromocion`;
CREATE TABLE IF NOT EXISTS `vuelopasajeropromocion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idVueloPasajero` int(11) NOT NULL,
  `idPromocion` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vueloPasajeroPromocion_vueloPasajero1_idx` (`idVueloPasajero`),
  KEY `fk_vueloPasajeroPromocion_promocion1_idx` (`idPromocion`),
  CONSTRAINT `fk_vueloPasajeroPromocion_promocion1` FOREIGN KEY (`idPromocion`) REFERENCES `promocion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_vueloPasajeroPromocion_vueloPasajero1` FOREIGN KEY (`idVueloPasajero`) REFERENCES `vuelopasajero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla aerolinea.vuelopasajeropromocion: ~0 rows (aproximadamente)
DELETE FROM `vuelopasajeropromocion`;
/*!40000 ALTER TABLE `vuelopasajeropromocion` DISABLE KEYS */;
/*!40000 ALTER TABLE `vuelopasajeropromocion` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
