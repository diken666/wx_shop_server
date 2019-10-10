# 新建user_info表
CREATE TABLE `mydb`.`user_info` (
  `userId` CHAR(20) NOT NULL,
  `userName` VARCHAR(30) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `telPhone` VARCHAR(30) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(100) NULL,
  `time` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`));
  
# 新建address_info表
CREATE TABLE `mydb`.`address_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(20) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `isDefaultAddress` INT NULL,
  PRIMARY KEY (`id`));
 
# 新建collection表
CREATE TABLE `mydb`.`collection` (
  `id` INT NOT NULL,
  `userId` VARCHAR(20) NOT NULL,
  `shopId` VARCHAR(20) NOT NULL,
  `proId` VARCHAR(20) NOT NULL,
  `time` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

# 新建shop_car表
CREATE TABLE `mydb`.`shop_car` (
  `id` INT NOT NULL,
  `userId` VARCHAR(20) NOT NULL,
  `shopId` VARCHAR(20) NOT NULL,
  `proId` VARCHAR(20) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

# 新建order_info表
CREATE TABLE `mydb`.`order_info` (
  `id` INT NOT NULL,
  `userId` VARCHAR(20) NOT NULL,
  `proId` VARCHAR(20) NOT NULL,
  `shopId` VARCHAR(20) NOT NULL,
  `proNum` INT NOT NULL,
  `totalPrice` FLOAT NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `expressCom` VARCHAR(45) NOT NULL,
  `orderStatus` VARCHAR(20) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

# 新建product_info表
CREATE TABLE `mydb`.`product_info` (
  `proId` VARCHAR(20) NOT NULL,
  `proName` VARCHAR(45) NOT NULL,
  `proImg` VARCHAR(100) NOT NULL,
  `proPrice` FLOAT NOT NULL,
  `shopId` VARCHAR(20) NOT NULL,
  `proDes` VARCHAR(100) NULL,
  `likeNum` INT NOT NULL,
  `saleNum` INT NOT NULL,
  `appraiseNum` INT NOT NULL,
  PRIMARY KEY (`proId`));

# 新建appraise_info表
CREATE TABLE `mydb`.`appraise_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `proId` VARCHAR(20) NOT NULL,
  `userId` VARCHAR(20) NOT NULL,
  `appraise` VARCHAR(100) NOT NULL,
  `likeNum` INT NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
# 新建shop_info表
CREATE TABLE `mydb`.`shop_info` (
  `shopId` VARCHAR(20) NOT NULL,
  `shopName` VARCHAR(45) NOT NULL,
  `shopImg` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`shopId`));

  
