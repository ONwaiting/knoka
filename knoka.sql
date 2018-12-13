/*
Navicat MySQL Data Transfer

Source Server         : project-x
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : knoka

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-13 15:08:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `f_url` varchar(200) NOT NULL,
  `g_title` varchar(200) NOT NULL,
  `g_disc` varchar(500) NOT NULL,
  `g_price` float(10,2) NOT NULL,
  `urls` varchar(9999) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'https://www.konka.com/public/images/cc/a8/de/ed0f5328d44eb1fd8a7d3cde30f25ac0a23c987e.jpg?95104_OW200_OH200', '49英寸超薄全面屏电视', '64位39核/人工智能/全民K歌', '2499.00', 'https://www.konka.com/public/images/55/cc/72/0413f3524a8286442ff350ad5d95aac952c3c655.jpg?24401_OW800_OH800;https://www.konka.com/public/images/6d/99/93/69ac3ba13dfe682b124ca3da660bc4846d8f46fb.jpg?24400_OW800_OH800;https://www.konka.com/public/images/47/96/7f/31ec6404ec3109423456edd679174c84c6a50b13.jpg?24399_OW800_OH800;https://www.konka.com/public/images/47/96/7f/31ec6404ec3109423456edd679174c84c6a50b13.jpg?24399_OW800_OH800;https://www.konka.com/public/images/47/96/7f/31ec6404ec3109423456edd679174c84c6a50b13.jpg?24399_OW800_OH800;https://www.konka.com/public/images/47/96/7f/31ec6404ec3109423456edd679174c84c6a50b13.jpg?24399_OW800_OH800');
INSERT INTO `goods` VALUES ('3', 'https://www.konka.com/public/images/09/f3/48/71db464131ec5c5e5ed4cdaeab50b7f51c0db2fe.jpg?29162_OW800_OH800', '43英寸无边全面屏电视', '人工智能2.0/高频内存/全民K歌', '2199.00', 'https://www.konka.com/public/images/09/f3/48/71db464131ec5c5e5ed4cdaeab50b7f51c0db2fe.jpg?29162_OW800_OH800;https://www.konka.com/public/images/12/0b/18/2b03f3ece929e47609c8e99a7314dd91e0a8a387.jpg?06300_OW800_OH800;https://www.konka.com/public/images/12/0b/18/2b03f3ece929e47609c8e99a7314dd91e0a8a387.jpg?06300_OW800_OH800;https://www.konka.com/public/images/12/0b/18/2b03f3ece929e47609c8e99a7314dd91e0a8a387.jpg?06300_OW800_OH800');
INSERT INTO `goods` VALUES ('4', 'https://www.konka.com/public/images/72/bd/87/886f075a38e3d0e28084bf708e322b627c52a3dc.jpg?29641_OW800_OH800', '65英寸超薄全面屏电视', '64位39核/高配内存/人工智能', '3999.00', 'https://www.konka.com/public/images/72/bd/87/886f075a38e3d0e28084bf708e322b627c52a3dc.jpg?29641_OW800_OH800;https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800;https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800;https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800;https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800;https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800https://www.konka.com/public/images/12/4c/d6/4a4cb5a5bf1f662fc419ac1b2a534c729852d85b.jpg?99492_OW800_OH800');
INSERT INTO `goods` VALUES ('5', 'https://www.konka.com/public/images/2c/8c/32/e5ee69bc9e31e2318e968616596f854e7192f98f.jpg?19059_OW800_OH800', '8公斤 滚筒洗衣机', '高温煮洗 / 中途加衣', '1499.00', 'https://www.konka.com/public/images/2c/8c/32/e5ee69bc9e31e2318e968616596f854e7192f98f.jpg?19059_OW800_OH800;https://www.konka.com/public/images/95/84/76/bd3419d2f641b378d1ccd792b69054edeb19c3a2.jpg?29284_OW800_OH800;https://www.konka.com/public/images/95/84/76/bd3419d2f641b378d1ccd792b69054edeb19c3a2.jpg?29284_OW800_OH800;https://www.konka.com/public/images/95/84/76/bd3419d2f641b378d1ccd792b69054edeb19c3a2.jpg?29284_OW800_OH800;https://www.konka.com/public/images/95/84/76/bd3419d2f641b378d1ccd792b69054edeb19c3a2.jpg?29284_OW800_OH800');
INSERT INTO `goods` VALUES ('6', 'https://www.konka.com/public/images/48/cc/cd/88d55a86ba0bba1af1e3c7fc5ea2da7baa4be8c1.jpg?73504_OW200_OH200', '康佳手机S3', '5.2吋高清护眼屏 / 后置双摄', '1499.00', 'https://www.konka.com/public/images/2b/90/5d/2dee481c38bad46ea04e8ad9df76c5dc7b62749b.jpg?68017_OW800_OH800;https://www.konka.com/public/images/f1/77/45/199f9ba2834e2c944a3abae8168cb337c5e07ae9.jpg?68018_OW800_OH800;https://www.konka.com/public/images/f1/77/45/199f9ba2834e2c944a3abae8168cb337c5e07ae9.jpg?68018_OW800_OH800;https://www.konka.com/public/images/f1/77/45/199f9ba2834e2c944a3abae8168cb337c5e07ae9.jpg?68018_OW800_OH800;https://www.konka.com/public/images/f1/77/45/199f9ba2834e2c944a3abae8168cb337c5e07ae9.jpg?68018_OW800_OH800');
INSERT INTO `goods` VALUES ('7', 'https://www.konka.com/public/images/36/4e/bf/bd55a9b31016c6fc8f263bda5d1c8ce0b0f7aca6.jpg?43986_OW200_OH200', '1.8升燕窝养生壶', '10大功能 / 304不锈钢发热盘', '159.00', 'https://www.konka.com/public/images/1b/12/2b/51328cdf6c875bbed5f0ba69f36103b04dc17ad4.jpg?43061_OW800_OH800;https://www.konka.com/public/images/1b/12/2b/51328cdf6c875bbed5f0ba69f36103b04dc17ad4.jpg?43061_OW800_OH800;https://www.konka.com/public/images/1b/12/2b/51328cdf6c875bbed5f0ba69f36103b04dc17ad4.jpg?43061_OW800_OH800;https://www.konka.com/public/images/1b/12/2b/51328cdf6c875bbed5f0ba69f36103b04dc17ad4.jpg?43061_OW800_OH800;https://www.konka.com/public/images/0b/55/9c/cacccc4e57cf176cebefdc6158126bcb91f28a8d.jpg?43062_OW800_OH800;https://www.konka.com/public/images/0b/55/9c/cacccc4e57cf176cebefdc6158126bcb91f28a8d.jpg?43062_OW800_OH800;https://www.konka.com/public/images/0b/55/9c/cacccc4e57cf176cebefdc6158126bcb91f28a8d.jpg?43062_OW800_OH800');
INSERT INTO `goods` VALUES ('8', 'https://www.konka.com/public/images/5b/4c/c7/354d960eea1b29097ff54fda59a6a9ccbd218c79.jpg?43806_OW200_OH200', '智能微投K3', '时尚便捷 / 无线同屏 / 8G内存', '2699.00', 'https://www.konka.com/public/images/58/0f/79/abece04d95539c1f84313efc6333b6ed7901bcb6.jpg?63468_OW800_OH800;https://www.konka.com/public/images/37/a8/d9/a1b59dfd9f843ec0f80b6652882499d405699569.jpg?18106_OW800_OH800;https://www.konka.com/public/images/37/a8/d9/a1b59dfd9f843ec0f80b6652882499d405699569.jpg?18106_OW800_OH800;https://www.konka.com/public/images/37/a8/d9/a1b59dfd9f843ec0f80b6652882499d405699569.jpg?18106_OW800_OH800;https://www.konka.com/public/images/37/a8/d9/a1b59dfd9f843ec0f80b6652882499d405699569.jpg?18106_OW800_OH800');
INSERT INTO `goods` VALUES ('9', 'https://www.konka.com/public/images/53/43/4d/b1624d45d2ecca402cca2b382522469b50e1d81a.jpg?65995_OW200_OH200', '阿拉斯“佳”毛绒抱枕', '亲肤面料 / 抱枕靠枕睡枕', '59.00', 'https://www.konka.com/public/images/ae/e1/47/b02d320f7a524a06f1987339c54131d00ce681b9.jpg?84193_OW800_OH800;https://www.konka.com/public/images/ae/e1/47/b02d320f7a524a06f1987339c54131d00ce681b9.jpg?84193_OW800_OH800;https://www.konka.com/public/images/32/ec/26/4ff073433c972283a5a6a32635a1b67a1cde63a6.jpg?36636_OW800_OH800;https://www.konka.com/public/images/32/ec/26/4ff073433c972283a5a6a32635a1b67a1cde63a6.jpg?36636_OW800_OH800;https://www.konka.com/public/images/32/ec/26/4ff073433c972283a5a6a32635a1b67a1cde63a6.jpg?36636_OW800_OH800;https://www.konka.com/public/images/32/ec/26/4ff073433c972283a5a6a32635a1b67a1cde63a6.jpg?36636_OW800_OH800');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `usm` varchar(100) NOT NULL,
  `psd` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('8', '123456', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('7', 'a111111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('9', 'm111111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('10', '111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('11', '121', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('12', '156', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('13', '222', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('14', '333', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('15', '999', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('16', '150', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('17', '151', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('18', '114', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('19', '000', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('20', '147', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('21', '111111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('22', '肖广训', '21942b2553b31241acec89bc68db4c91');
INSERT INTO `user` VALUES ('23', '321', '96e79218965eb72c92a549dd5a330112');
