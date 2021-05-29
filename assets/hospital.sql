/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3306
 Source Schema         : hospital

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 16/05/2020 22:39:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `password` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '123456' COMMENT '密码（默认：123456）',
  `mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '邮箱',
  `open_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '微信 openId',
  `role` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'editor' COMMENT '角色',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `last_login_time` datetime(0) DEFAULT NULL COMMENT '最后登录时间',
  `is_logined` int(1) DEFAULT 0 COMMENT '登录状态：0->下线；1->在线，默认为 0',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '头像 URL',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '秋子', '123456', '15521451556', NULL, NULL, 'admin', '2020-03-03 00:09:32', '2020-05-16 22:04:43', '2020-05-16 22:04:43', 0, NULL, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/admin/avatar/qiuzi.png');
INSERT INTO `admin` VALUES (2, '李哈哈', '123456', '15521451556', '2515632823@qq.com', NULL, 'editor', '2020-03-03 12:42:25', '2020-03-19 22:28:38', '2020-03-19 22:28:38', 0, NULL, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/admin/avatar/qiuzi.png');
INSERT INTO `admin` VALUES (3, '若风', '123456', '15521451556', NULL, NULL, 'editor', '2020-03-04 21:40:12', '2020-03-07 21:29:06', NULL, 0, NULL, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/doctor/avatar/ruofeng.png');

-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '病人姓名',
  `card_no` int(11) UNSIGNED NOT NULL COMMENT '就诊卡号',
  `department` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '就诊科室',
  `department_id` int(11) UNSIGNED NOT NULL COMMENT '科室 id',
  `doctor_id` int(11) UNSIGNED NOT NULL COMMENT '医生 id',
  `doctor_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '医生姓名',
  `date` date NOT NULL COMMENT '就诊日期',
  `start_time` datetime(0) DEFAULT NULL COMMENT '开始时间',
  `end_time` datetime(0) DEFAULT NULL COMMENT '结束时间',
  `is_cancel` int(1) NOT NULL DEFAULT 0 COMMENT '是否取消：0->否；1->是，默认为 0',
  `cancel_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '取消原因',
  `status` int(1) NOT NULL DEFAULT 0 COMMENT '状态： 0->未完成；1->已完成；-1 -> 已失效',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `work_plan_id` int(11) UNSIGNED NOT NULL COMMENT '所属排班编号',
  `house` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '就诊房间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of appointment
-- ----------------------------
INSERT INTO `appointment` VALUES (2, '李嘻嘻', 80000001, '小儿科', 1, 100001, '秋子', '2020-04-20', '2020-04-20 17:30:00', '2020-04-20 18:00:00', 0, NULL, 1, '2020-04-20 13:49:19', '2020-05-14 21:35:08', NULL, 6, '505');
INSERT INTO `appointment` VALUES (3, '李嘻嘻', 80000001, '小儿科', 1, 100001, '秋子', '2020-04-20', '2020-04-20 17:30:00', '2020-04-20 18:00:00', 0, NULL, 1, '2020-04-20 14:03:52', '2020-05-14 21:45:39', NULL, 6, '505');
INSERT INTO `appointment` VALUES (7, '李嘻嘻', 80000001, '小儿科', 1, 100001, '秋子', '2020-04-20', '2020-04-20 16:30:00', '2020-04-20 17:00:00', 0, NULL, 0, '2020-04-20 15:50:48', '2020-04-20 15:50:48', NULL, 1, '504');
INSERT INTO `appointment` VALUES (8, '李嘻嘻', 80000001, '小儿科', 1, 100001, '秋子', '2020-04-20', '2020-04-20 16:30:00', '2020-04-20 17:00:00', 0, NULL, 0, '2020-04-20 15:58:07', '2020-04-20 15:58:07', NULL, 1, '504');
INSERT INTO `appointment` VALUES (9, '李嘻嘻', 80000001, '小儿科', 1, 100006, '李若兰', '2020-04-21', '2020-04-21 10:00:00', '2020-04-21 10:30:00', 0, NULL, 0, '2020-04-20 17:40:51', '2020-04-20 17:40:51', NULL, 5, '304');
INSERT INTO `appointment` VALUES (10, '王大锤', 80000000, '中医科', 2, 100003, '若风', '2020-04-21', '2020-04-21 09:30:00', '2020-04-21 10:00:00', 0, NULL, 0, '2020-04-20 21:32:37', '2020-04-20 21:32:37', NULL, 2, '503');
INSERT INTO `appointment` VALUES (11, '王大锤', 80000000, '中医科', 2, 100003, '若风', '2020-04-21', '2020-04-21 09:30:00', '2020-04-21 10:00:00', 0, NULL, 0, '2020-04-20 21:36:10', '2020-04-20 21:36:10', NULL, 2, '503');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '科室名字',
  `introduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '科室简介',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (1, '小儿科', '小儿科，是我院的重点科室，拥有多名国家医学院士，承担各项国家特等医学研究项目，保障孩子健康快乐成长。。', '2020-03-06 00:22:03', '2020-03-06 00:24:41', NULL);
INSERT INTO `department` VALUES (2, '中医科', '中医科采用中药治疗各种冠心病、心律失常、脑梗塞、脑动脉硬化、顽固性头痛、急慢性肾炎、泌尿系结石、男科病、脾胃病、糖尿病以及心身疾病。', '2020-03-06 00:23:00', '2020-03-25 18:16:48', NULL);
INSERT INTO `department` VALUES (3, '综合内科', '综合内科拥有临床经验丰富的专家团队，齐全的诊查设施，专科诊疗模式。主要擅长呼吸、消化、心血管、肾病、血液等方面疾病的诊断和治疗。对慢性支气管炎、慢性阻塞性肺气肿、肺心病、糖尿病、高血压、心绞痛、心律失常、上消化道出血、尿毒症等疾病治疗。', '2020-03-23 21:45:05', '2020-03-25 18:18:29', NULL);
INSERT INTO `department` VALUES (4, '综合外科', '合外科（普外科）是浙江省内唯一无缝衔接急诊的普外科新兴学科，现拥有急腹症外科、创伤外科和疝与腹壁外科三个亚专科，是浙江省医学会创伤分会腹部创伤学组副组长、浙江省医学会创伤分会青年委员会副主任委员挂靠科室。', '2020-03-23 21:45:34', '2020-03-25 18:19:44', NULL);
INSERT INTO `department` VALUES (5, '眼科', '眼科的全称是“眼病专科”，是研究发生在视觉系统，包括眼球及与其相关联的组织有关疾病的学科。眼科一般研究玻璃体、视网膜疾病，眼视光学，青光眼和视神经病变，白内障等多种眼科疾病。', '2020-03-23 21:45:49', '2020-03-25 18:20:14', NULL);
INSERT INTO `department` VALUES (6, '妇科', '妇科是医疗机构的一个诊疗科目，妇科是妇产科的一个分支专业，是以诊疗女性妇科病为诊疗的专业科室，分为西医妇科与中医妇科。妇科疾病包括：女性生殖系统的疾病即为妇科疾病，包括外阴疾病、阴道疾病、子宫疾病、输卵管疾病、卵巢疾病等', '2020-03-25 18:20:44', '2020-03-25 18:20:44', NULL);
INSERT INTO `department` VALUES (7, '神经内科', '神经内科', '2020-04-26 16:16:26', '2020-04-26 16:16:26', NULL);
INSERT INTO `department` VALUES (8, '泌尿外科', '泌尿外科', '2020-04-26 16:16:46', '2020-04-26 16:16:46', NULL);
INSERT INTO `department` VALUES (9, '皮肤科', '皮肤科', '2020-04-26 16:17:02', '2020-04-26 16:17:02', NULL);
INSERT INTO `department` VALUES (10, '针灸推拿科', '针灸推拿科', '2020-04-26 16:17:22', '2020-04-26 16:17:22', NULL);
INSERT INTO `department` VALUES (11, '甲状腺外科', '甲状腺外科', '2020-04-26 16:17:38', '2020-04-26 16:17:38', NULL);
INSERT INTO `department` VALUES (12, '呼吸内科', '呼吸内科', '2020-04-26 16:18:17', '2020-04-26 16:18:17', NULL);
INSERT INTO `department` VALUES (13, '产科', '产科', '2020-04-26 16:18:59', '2020-04-26 16:18:59', NULL);
INSERT INTO `department` VALUES (14, '骨科', '骨科', '2020-04-26 16:19:12', '2020-04-26 16:19:12', NULL);
INSERT INTO `department` VALUES (15, '中西医结合科', '中西医结合科', '2020-04-26 16:19:40', '2020-04-26 16:19:40', NULL);
INSERT INTO `department` VALUES (16, '心血管内科', '心血管内科', '2020-04-26 16:19:57', '2020-04-26 16:19:57', NULL);

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `doctor_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '医生编号',
  `name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `gender` int(1) DEFAULT 0 COMMENT '性别：0->未知；1-> 男；2->女。默认为 0',
  `birth` date DEFAULT NULL COMMENT '出生日期',
  `password` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '123456' COMMENT '密码（默认：123456）',
  `mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '邮箱',
  `open_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '微信 openId',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '地址',
  `duty` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职务',
  `rank` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职称',
  `introduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '个人简介',
  `department` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '科室名称',
  `department_id` int(11) DEFAULT NULL COMMENT '科室 id',
  `is_consult` int(1) DEFAULT 0 COMMENT '是否可会诊：0->不可；1->可。默认为 0',
  `work_place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '就诊地点',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `last_login_time` datetime(0) DEFAULT NULL COMMENT '最后登录时间',
  `is_logined` int(1) DEFAULT 0 COMMENT '登录状态：0->下线；1->上线。默认为 0',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '头像 url',
  `hospital` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '医院',
  `hospital_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '医院 id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES (3, '100001', '秋子', 2, '2020-03-07', '123456', '15521451556', '2515632823@qq.com', NULL, '广东省广州市海珠区广州塔顶层', '院长', '主治医师', '秋子，秋子医院院长，小儿科主治医师，多年承担国家级疾病研究项目，被表彰为“优秀白衣天使”称号。。。。', '小儿科', 1, 0, NULL, '2020-03-07 21:36:36', '2020-05-16 22:29:09', NULL, '2020-05-16 22:29:09', 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/doctor/avatar/ruofeng.png', NULL, NULL);
INSERT INTO `doctor` VALUES (4, '100002', '若素', 2, '2020-03-07', '123456', NULL, NULL, NULL, '广东省广州市海珠区广州塔顶层', '院长', '主任医生', '小丫头，要乖乖听话喔', '小儿科', 1, 0, NULL, '2020-03-07 21:51:13', '2020-03-07 21:51:13', '2020-03-07 22:09:55', NULL, 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/doctor/avatar/qiuzi.png', NULL, NULL);
INSERT INTO `doctor` VALUES (5, '100003', '许若风', 1, '2020-03-07', '123456', '15521451556', NULL, NULL, '广东省广州市海珠区广州塔顶层', '院长', '主任医师', '臭小子，谦虚点。', '小儿科', 1, 0, NULL, '2020-03-07 21:53:36', '2020-03-25 21:12:45', NULL, NULL, 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/doctor/avatar/ruofeng.png', NULL, NULL);
INSERT INTO `doctor` VALUES (6, '100004', '李哈哈', 1, '2020-03-12', '123456', '15521451556', NULL, NULL, '海南省三沙市', '副院长', '主治医师', '', '中医科', 2, 0, NULL, '2020-03-12 14:27:45', '2020-03-12 14:27:45', NULL, NULL, 0, '', NULL, NULL);
INSERT INTO `doctor` VALUES (7, '100005', '钟南山', 1, '2020-03-24', '123456', '15521415556', NULL, NULL, '广东省广州市广州医科大学', '科长', '主治医师', '', '综合内科', 3, 0, NULL, '2020-03-24 10:45:01', '2020-03-24 10:45:17', NULL, NULL, 0, '', NULL, NULL);
INSERT INTO `doctor` VALUES (8, '100006', '李若兰', 2, '2020-03-25', '123456', '15521451556', NULL, NULL, '芈月国丰乐县小洲村', '医生', '主治医师', '她，没有介绍', '小儿科', 1, 0, NULL, '2020-03-25 18:26:17', '2020-03-25 18:26:17', NULL, NULL, 0, '', NULL, NULL);
INSERT INTO `doctor` VALUES (9, '100008', '梦可儿', 2, '2020-03-25', '123456', '15521451556', NULL, NULL, '峨眉山1号', '医生', '副主任医师', '', '小儿科', NULL, 0, NULL, '2020-03-25 18:31:23', '2020-03-25 18:31:23', NULL, NULL, 0, '', NULL, NULL);
INSERT INTO `doctor` VALUES (10, '100007', '龙舞', 2, '2020-03-25', '123456', '15521451556', NULL, NULL, '东海蓬岛', '医生', '主治医师', '', '综合外科', 4, 0, NULL, '2020-03-25 21:03:10', '2020-03-25 21:03:10', NULL, NULL, 0, '', NULL, NULL);

-- ----------------------------
-- Table structure for hospital
-- ----------------------------
DROP TABLE IF EXISTS `hospital`;
CREATE TABLE `hospital`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `level` int(1) DEFAULT NULL COMMENT '级别：0->未知。默认为 0',
  `manager` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '负责人',
  `tel` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '单位电话',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系地址',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hospital
-- ----------------------------
INSERT INTO `hospital` VALUES (1, '秋子医院', 1, '秋子', '15521451556', '广东省广州市海珠区广州塔塔顶', '2020-03-05 16:10:39', '2020-03-05 16:10:39', NULL);
INSERT INTO `hospital` VALUES (2, '若素医院', 3, '若素', '15521451556', '海南省三沙市001号', '2020-03-05 16:19:23', '2020-03-05 16:49:09', NULL);

-- ----------------------------
-- Table structure for patient
-- ----------------------------
DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT '就诊卡号，也为主键',
  `name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '姓名',
  `gender` int(1) DEFAULT 0 COMMENT '性别：0->未知；1->男；2->女。默认为 0',
  `birth` date DEFAULT NULL COMMENT '出生日期',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '123456' COMMENT '密码，默认为 123456',
  `mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '邮箱',
  `id_card` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '身份证号',
  `open_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '微信 openId',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系地址',
  `remind_flow` int(1) DEFAULT 0 COMMENT '缴费提醒：0->无待缴费；1->待缴费',
  `remind_medication` int(1) DEFAULT 0 COMMENT '吃药提醒：0->无提醒；1->待提醒',
  `remind_visit` int(1) DEFAULT 0 COMMENT '就诊提醒：0->无提醒；1->待提醒',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `last_login_time` datetime(0) DEFAULT NULL COMMENT '最后登录时间',
  `is_logined` int(1) DEFAULT 0 COMMENT '登录状态：0->下线；1->上线',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '头像 URL',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 80000004 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of patient
-- ----------------------------
INSERT INTO `patient` VALUES (00080000000, '王大锤', 0, NULL, '123456', '15521451554', NULL, NULL, NULL, NULL, 0, 0, 0, '2020-03-13 13:32:56', '2020-04-20 21:34:25', NULL, '2020-04-20 21:31:42', 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/admin/avatar/qiuzi.png');
INSERT INTO `patient` VALUES (00080000001, '李嘻嘻', 1, '2020-01-19', '123456', '15521451556', NULL, NULL, NULL, '千叶县小村 1 号', 0, 0, 0, '2020-03-13 13:33:04', '2020-05-16 19:26:41', NULL, '2020-05-16 19:26:41', 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/admin/avatar/qiuzi.png');
INSERT INTO `patient` VALUES (00080000002, '张三', 0, NULL, '123456', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, '2020-03-13 13:33:13', '2020-03-13 13:33:16', NULL, NULL, 0, 'http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/admin/avatar/qiuzi.png');
INSERT INTO `patient` VALUES (00080000003, '武大郎', 1, '2020-03-13', '123456', '', NULL, '', NULL, NULL, 0, 0, 0, '2020-03-13 11:11:39', '2020-03-25 18:26:59', NULL, NULL, 0, '');

-- ----------------------------
-- Table structure for quota
-- ----------------------------
DROP TABLE IF EXISTS `quota`;
CREATE TABLE `quota`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_id` int(11) NOT NULL COMMENT '病人 id',
  `time` date DEFAULT NULL COMMENT '时间',
  `systolic_pressure` decimal(10, 2) DEFAULT NULL COMMENT '血压收缩压',
  `diastolic_pressure` decimal(10, 2) DEFAULT NULL COMMENT '血压舒张压',
  `fasting_blood` decimal(10, 2) DEFAULT NULL COMMENT '血糖空腹血糖',
  `random_blood` decimal(10, 2) DEFAULT NULL COMMENT '血糖随机血糖',
  `weight` decimal(10, 2) DEFAULT NULL COMMENT '体重',
  `waist` decimal(10, 2) DEFAULT NULL COMMENT '腰围',
  `hipline` decimal(10, 2) DEFAULT NULL COMMENT '臂围',
  `temperature` decimal(10, 2) DEFAULT NULL COMMENT '体温',
  `created_at` datetime(0) DEFAULT NULL,
  `updated_at` datetime(0) DEFAULT NULL,
  `deleted_at` datetime(0) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quota
-- ----------------------------
INSERT INTO `quota` VALUES (1, 80000001, '2020-03-21', 90.00, 60.00, 4.00, 5.00, 60.20, 60.00, 80.00, 37.00, NULL, NULL, NULL);
INSERT INTO `quota` VALUES (2, 80000001, '2020-03-22', 100.00, 65.00, 4.50, 5.30, 60.00, 62.00, 82.00, 37.00, '2020-03-22 15:43:07', '2020-03-22 15:43:07', NULL);
INSERT INTO `quota` VALUES (4, 80000001, '2020-03-24', 95.00, 70.00, 6.00, 7.80, 61.00, 60.00, 82.00, 37.20, '2020-03-24 09:16:11', '2020-03-24 09:16:11', NULL);
INSERT INTO `quota` VALUES (5, 80000001, '2020-03-25', 100.00, 65.00, 5.00, 7.00, 61.00, 61.00, 83.00, 37.30, '2020-03-24 09:23:33', '2020-03-24 09:23:33', NULL);
INSERT INTO `quota` VALUES (6, 80000001, '2020-05-04', 92.00, 85.00, 4.20, 4.00, 60.00, 60.00, 80.00, 37.20, '2020-05-05 19:20:53', '2020-05-05 19:20:53', NULL);
INSERT INTO `quota` VALUES (9, 80000001, '2020-05-15', 100.00, 70.00, 4.10, 4.00, 60.00, 60.00, 80.00, 37.00, '2020-05-15 17:16:13', '2020-05-15 17:16:13', NULL);

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '就诊记录编号',
  `department` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '就诊科室',
  `doctor_id` int(11) DEFAULT NULL COMMENT '医生编号',
  `doctor_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '医生姓名',
  `card_no` int(11) NOT NULL COMMENT '病人卡号',
  `patient_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '病人姓名',
  `time` datetime(0) NOT NULL COMMENT '就诊时间',
  `result` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '就诊结果',
  `acutecomplication` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '急性并发症',
  `fastingbloodsugar` decimal(10, 2) DEFAULT NULL COMMENT '餐前血糖',
  `afterbloodsugar` decimal(10, 2) DEFAULT NULL COMMENT '餐后血糖',
  `auxcheck` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '辅助检查',
  `complication` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '并发症',
  `followdisease` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '伴随疾病',
  `heartrate` decimal(10, 2) DEFAULT NULL COMMENT '心率',
  `allery_history` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '过敏史',
  `body_check` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '体格检查',
  `cur_disease` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '现病史',
  `disease_describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '病情摘要',
  `disease_history` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '既往史',
  `doctor_suggestion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '医嘱',
  `self_talk` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '主诉',
  `breathe` decimal(10, 2) DEFAULT NULL COMMENT '呼吸病率',
  `have_change` int(1) DEFAULT 0 COMMENT '是否已转诊：0-> 否；1->是，默认为 0',
  `change_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '转诊理由',
  `is_read` int(1) DEFAULT 0 COMMENT '是否已读处方：0-> 否；1-> 是，默认为 0',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `date` date NOT NULL COMMENT '就诊日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (6, '小儿科', 100001, '秋子', 80000001, '李嘻嘻', '2020-04-20 17:30:00', '结果', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '摘要', NULL, NULL, '医生告诉你', NULL, 0, NULL, 0, '2020-05-14 21:35:08', '2020-05-14 22:32:57', NULL, '2020-04-20');
INSERT INTO `record` VALUES (7, '小儿科', 100001, '秋子', 80000001, '李嘻嘻', '2020-04-20 17:30:00', '就诊结果', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '病情摘要', NULL, '这是医生叮嘱', '这是医生主诉', NULL, 0, NULL, 0, '2020-05-14 21:45:39', '2020-05-14 21:45:39', NULL, '2020-04-20');

-- ----------------------------
-- Table structure for sms
-- ----------------------------
DROP TABLE IF EXISTS `sms`;
CREATE TABLE `sms`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `mobile` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
  `json` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短信接口返回内容',
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短信内容',
  `send_time` datetime(0) NOT NULL COMMENT '发送时间',
  `type` int(1) DEFAULT NULL COMMENT '短信类型',
  `is_sent` int(1) NOT NULL DEFAULT 1 COMMENT '发送状态：0-> 发送失败；1-> 发送成功',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for work_plan
-- ----------------------------
DROP TABLE IF EXISTS `work_plan`;
CREATE TABLE `work_plan`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '排班编号',
  `stop_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '停诊原因',
  `is_temp` int(1) DEFAULT 0 COMMENT '临时出诊：0-> 否； 1-> 是，默认为 0',
  `creater` int(11) NOT NULL COMMENT '创建管理员 id',
  `house` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '前台查询' COMMENT '就诊房间',
  `max_appointment_num` int(5) DEFAULT 3 COMMENT '最大预约号数',
  `remaining_num` int(5) DEFAULT 3 COMMENT '剩余预约数',
  `add_num_creater` int(11) DEFAULT NULL COMMENT '加号管理员 id',
  `type` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '平诊' COMMENT '出诊类型',
  `department_id` int(11) NOT NULL COMMENT '科室编号',
  `doctor_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '医生编号',
  `doctor_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '医生姓名',
  `start_time` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '开始时间',
  `end_time` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '结束时间',
  `is_stop` int(1) DEFAULT 0 COMMENT '停诊标志：0-> 否；1-> 是，默认为 0',
  `created_at` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime(0) DEFAULT NULL COMMENT '删除时间',
  `date` date DEFAULT NULL COMMENT '日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of work_plan
-- ----------------------------
INSERT INTO `work_plan` VALUES (1, NULL, 0, 1, '504', 3, 1, NULL, '平诊', 1, '100001', '秋子', '2020-04-20 16:30:00', '2020-04-20 17:00:00', 0, '2020-03-25 00:04:25', '2020-04-20 15:58:07', NULL, '2020-04-20');
INSERT INTO `work_plan` VALUES (2, NULL, 0, 1, '503', 3, 1, NULL, '专家', 2, '100003', '若风', '2020-04-21 09:30:00', '2020-04-21 10:00:00', 0, '2020-03-25 00:07:33', '2020-04-20 21:36:10', NULL, '2020-04-21');
INSERT INTO `work_plan` VALUES (3, NULL, 0, 1, '303', 3, 3, NULL, '专家', 3, '100005', '钟南山', '2020-04-20 09:30:00', '2020-04-20 10:00:00', 0, '2020-03-25 00:56:32', '2020-04-19 15:15:12', NULL, '2020-04-20');
INSERT INTO `work_plan` VALUES (4, NULL, 0, 1, '303', 3, 3, NULL, '平诊', 3, '100005', '钟南山', '2020-03-24 08:00:00', '2020-03-24 08:30:00', 0, '2020-03-25 00:56:33', '2020-03-25 00:56:33', '2020-03-25 01:00:31', '2020-03-24');
INSERT INTO `work_plan` VALUES (5, NULL, 0, 1, '304', 3, 2, NULL, '平诊', 1, '100006', '李若兰', '2020-04-21 10:00:00', '2020-04-21 10:30:00', 0, '2020-03-25 21:23:32', '2020-04-20 17:40:51', NULL, '2020-04-21');
INSERT INTO `work_plan` VALUES (6, NULL, 0, 1, '505', 3, 1, NULL, '平诊', 1, '100001', '秋子', '2020-04-20 17:30:00', '2020-04-20 18:00:00', 0, '2020-04-12 21:37:34', '2020-04-20 14:05:45', NULL, '2020-04-20');
INSERT INTO `work_plan` VALUES (7, NULL, 0, 1, '303', 3, 3, NULL, '平诊', 1, '100006', '李若兰', '2020-05-16 09:00:00', '2020-05-16 09:30:00', 0, '2020-05-16 19:28:03', '2020-05-16 19:28:03', NULL, '2020-05-16');
INSERT INTO `work_plan` VALUES (8, NULL, 0, 1, '303', 3, 3, NULL, '平诊', 1, '100006', '李若兰', '2020-05-16 09:00:00', '2020-05-16 09:30:00', 0, '2020-05-16 19:28:03', '2020-05-16 19:28:03', NULL, '2020-05-16');
INSERT INTO `work_plan` VALUES (9, NULL, 0, 1, '302', 3, 3, NULL, '平诊', 1, '100006', '李若兰', '2020-05-17 09:00:00', '2020-05-17 09:30:00', 0, '2020-05-16 19:28:45', '2020-05-16 19:28:45', NULL, '2020-05-17');

SET FOREIGN_KEY_CHECKS = 1;
