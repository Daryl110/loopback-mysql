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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.aeropuerto
DROP TABLE IF EXISTS `aeropuerto`;
CREATE TABLE IF NOT EXISTS `aeropuerto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.azafata
DROP TABLE IF EXISTS `azafata`;
CREATE TABLE IF NOT EXISTS `azafata` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_vuelo_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.inventario
DROP TABLE IF EXISTS `inventario`;
CREATE TABLE IF NOT EXISTS `inventario` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_inventario_aerolinea1_idx` (`id`),
  CONSTRAINT `fk_inventario_aerolinea1` FOREIGN KEY (`id`) REFERENCES `aerolinea` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.pasajero
DROP TABLE IF EXISTS `pasajero`;
CREATE TABLE IF NOT EXISTS `pasajero` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pasajero_persona1_idx` (`id`),
  CONSTRAINT `fk_pasajero_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.piloto
DROP TABLE IF EXISTS `piloto`;
CREATE TABLE IF NOT EXISTS `piloto` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_piloto_persona1_idx` (`id`),
  CONSTRAINT `fk_piloto_persona1` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.producto
DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.promocion
DROP TABLE IF EXISTS `promocion`;
CREATE TABLE IF NOT EXISTS `promocion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(60) NOT NULL,
  `porcentaje` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla aerolinea.vendedor
DROP TABLE IF EXISTS `vendedor`;
CREATE TABLE IF NOT EXISTS `vendedor` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pasajero_persona2_idx` (`id`),
  CONSTRAINT `fk_pasajero_persona2` FOREIGN KEY (`id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

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
  PRIMARY KEY (`id`),
  KEY `FK_vuelopasajero_pasajero` (`idPasajero`),
  KEY `FK_vuelopasajero_vuelo` (`idVuelo`),
  KEY `FK_vuelopasajero_vendedor` (`idVendedor`),
  CONSTRAINT `FK_vuelopasajero_pasajero` FOREIGN KEY (`idPasajero`) REFERENCES `pasajero` (`id`),
  CONSTRAINT `FK_vuelopasajero_vendedor` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor` (`id`),
  CONSTRAINT `FK_vuelopasajero_vuelo` FOREIGN KEY (`idVuelo`) REFERENCES `vuelo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
