


### course (课程表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Cno | char(10) | NO | 课程号 |
| 2 | Cname | varchar(20) | YES | 课程名 |
| 3 | Ctype | varchar(5) | NO | 课程类别 |
| 4 | Tno | char(13) | NO | 教师号 |



### sc (选课关系表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Sno | char(13) | NO | 学号 |
| 2 | Cno | char(10) | NO | 课程号 |
| 3 | Grade | tinyint unsigned | YES | 成绩 |



### student (学生表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Sno | char(13) | NO | 学号 |
| 2 | Sname | varchar(10) | YES | 姓名 |
| 3 | Ssex | char(2) | NO | 性别 |
| 4 | Sage | tinyint unsigned | NO | 年龄 |



### tc (教学任务表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Cno | char(10) | NO | 课程号 |
| 2 | Tcontent | varchar(200) | YES | 教学任务 |



### teacher (教师表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Tno | char(13) | NO | 教师号 |
| 2 | Tname | varchar(10) | YES | 姓名 |
| 3 | Tposition | varchar(3) | NO | 职称 |



### user (用户表) 
| 序号 | 字段名称 | 数据类型 | 是否为空 | 字段说明 |
| :--: |----| ---- | ---- | ---- |
| 1 | Uaccount | varchar(16) | NO | 用户账号 |
| 2 | Upwd | char(32) | NO | 用户密码 |
| 3 | Utype | varchar(3) | YES | 用户类型 |
| 4 | Uno | char(13) | YES | 学生和教师独有属性列 |
