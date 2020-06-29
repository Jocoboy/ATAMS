/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : atams

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 29/06/2020 16:02:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `Cno` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '课程号',
  `Cname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名',
  `Ctype` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '课程类别',
  `Tno` char(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '教师号',
  PRIMARY KEY (`Cno`) USING BTREE,
  UNIQUE INDEX `Cname`(`Cname`) USING BTREE,
  INDEX `Tno`(`Tno`) USING BTREE,
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`Tno`) REFERENCES `teacher` (`Tno`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '课程表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('1000000001', 'C程序设计', '专业课', '2010572611254');
INSERT INTO `course` VALUES ('1000000002', 'Java程序设计', '专业课', '2010572611260');
INSERT INTO `course` VALUES ('1000000011', '绘画基础', '专业课', '2015572611232');
INSERT INTO `course` VALUES ('2000000022', '近现代史纲要', '公共基础课', '2010572611260');
INSERT INTO `course` VALUES ('3000000030', '计算机基础', '学科基础课', '2017572604439');
INSERT INTO `course` VALUES ('4000000033', '艺术欣赏', '通识课', '2015572611232');
INSERT INTO `course` VALUES ('5000000030', '社会实践', '实践课', '2009572611355');
INSERT INTO `course` VALUES ('6000000031', 'Android应用开发基础', '专业基础课', '2010572611254');

-- ----------------------------
-- Table structure for sc
-- ----------------------------
DROP TABLE IF EXISTS `sc`;
CREATE TABLE `sc`  (
  `Sno` char(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '学号',
  `Cno` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '课程号',
  `Grade` tinyint(0) UNSIGNED NULL DEFAULT NULL COMMENT '成绩',
  PRIMARY KEY (`Sno`, `Cno`) USING BTREE,
  INDEX `Cno`(`Cno`) USING BTREE,
  CONSTRAINT `sc_ibfk_1` FOREIGN KEY (`Sno`) REFERENCES `student` (`Sno`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `sc_ibfk_2` FOREIGN KEY (`Cno`) REFERENCES `course` (`Cno`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '选课关系表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sc
-- ----------------------------
INSERT INTO `sc` VALUES ('2018329621055', '1000000001', 80);
INSERT INTO `sc` VALUES ('2018329621055', '1000000011', 83);
INSERT INTO `sc` VALUES ('2018329621154', '1000000002', 75);
INSERT INTO `sc` VALUES ('2018329621190', '2000000022', 100);
INSERT INTO `sc` VALUES ('2018329621270', '1000000002', 100);
INSERT INTO `sc` VALUES ('2018329621288', '1000000002', NULL);
INSERT INTO `sc` VALUES ('2018329621288', '3000000030', 90);
INSERT INTO `sc` VALUES ('2018329621521', '6000000031', 95);
INSERT INTO `sc` VALUES ('2018329621788', '4000000033', 65);

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `Sno` char(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '学号',
  `Sname` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '姓名',
  `Ssex` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '男' COMMENT '性别',
  `Sage` tinyint(0) UNSIGNED NOT NULL COMMENT '年龄',
  PRIMARY KEY (`Sno`) USING BTREE,
  UNIQUE INDEX `Sname`(`Sname`) USING BTREE,
  INDEX `t_name`(`Sname`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '学生表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('2018329621055', '马小跳', '男', 20);
INSERT INTO `student` VALUES ('2018329621154', '花无缺', '女', 21);
INSERT INTO `student` VALUES ('2018329621190', '刘晓芒', '女', 20);
INSERT INTO `student` VALUES ('2018329621270', '张马尚', '男', 20);
INSERT INTO `student` VALUES ('2018329621288', '车路', '女', 20);
INSERT INTO `student` VALUES ('2018329621330', '范海霞', '女', 20);
INSERT INTO `student` VALUES ('2018329621420', '严正明', '男', 21);
INSERT INTO `student` VALUES ('2018329621521', '郭志泽', '男', 20);
INSERT INTO `student` VALUES ('2018329621788', '杨弘文', '男', 22);

-- ----------------------------
-- Table structure for tc
-- ----------------------------
DROP TABLE IF EXISTS `tc`;
CREATE TABLE `tc`  (
  `Cno` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '课程号',
  `Tcontent` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教学任务',
  PRIMARY KEY (`Cno`) USING BTREE,
  CONSTRAINT `tc_ibfk_1` FOREIGN KEY (`Cno`) REFERENCES `course` (`Cno`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '教学任务表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tc
-- ----------------------------
INSERT INTO `tc` VALUES ('1000000001', '欢迎学习C程序设计！');
INSERT INTO `tc` VALUES ('1000000002', '请大家12月10号前完成课堂练习');
INSERT INTO `tc` VALUES ('1000000011', '欢迎选择绘画基础课程！');
INSERT INTO `tc` VALUES ('2000000022', '请带上近现代史书本到2N-443.');
INSERT INTO `tc` VALUES ('3000000030', '学好计算机基础，快乐每一天');
INSERT INTO `tc` VALUES ('4000000033', '2号截止美学欣赏作业，请尽快邮寄到我的QQ邮箱~');
INSERT INTO `tc` VALUES ('5000000030', '暑期社会实践即将开始');
INSERT INTO `tc` VALUES ('6000000031', '请大家打开麦克风交流，我在钉钉等你哦！~');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `Tno` char(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '教师号',
  `Tname` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '姓名',
  `Tposition` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '职称',
  PRIMARY KEY (`Tno`) USING BTREE,
  UNIQUE INDEX `Tname`(`Tname`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '教师表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('2009572611355', '张丽', '副教授');
INSERT INTO `teacher` VALUES ('2010572611254', '黄山', '教授');
INSERT INTO `teacher` VALUES ('2010572611260', '胡建国', '教授');
INSERT INTO `teacher` VALUES ('2010572611270', '李铭', '副教授');
INSERT INTO `teacher` VALUES ('2015572600220', '冯码', '讲师');
INSERT INTO `teacher` VALUES ('2015572611232', '张子丹', '讲师');
INSERT INTO `teacher` VALUES ('2017572604439', '舞叁一', '助教');
INSERT INTO `teacher` VALUES ('2017572607520', '米蓝', '助教');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `Uaccount` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `Upwd` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户密码',
  `Utype` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户类型',
  PRIMARY KEY (`Uaccount`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin@root', '18f714869d700fe6ceb9df2f6e561dbf', '管理员');
INSERT INTO `user` VALUES ('stu@21075', 'f72d74549d158b65bf808200bf202ce5', '学生');
INSERT INTO `user` VALUES ('stu@21154', 'c358be0cde01006a1a4c8bbfab5521d1', '学生');
INSERT INTO `user` VALUES ('stu@21254', '999fae69a7a334be45a9bc9df11e82c5', '学生');
INSERT INTO `user` VALUES ('stu@27352', '77abf70764e0f49dd6972e5fcad8fffa', '学生');
INSERT INTO `user` VALUES ('tchr@11230', 'd06031b5a15497ba8bc1b3b714bf4e49', '教师');
INSERT INTO `user` VALUES ('tchr@22335', 'd3d533426f9fa52820a7234045777e94', '教师');
INSERT INTO `user` VALUES ('tchr@23543', '92e983578c66db5908edc054d143035a', '教师');
INSERT INTO `user` VALUES ('tchr@79810', 'd9190f03379e78298d0cd54dd14880d6', '教师');

SET FOREIGN_KEY_CHECKS = 1;
