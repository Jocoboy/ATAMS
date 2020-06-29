create table user
(Uaccount varchar(16) not null comment '用户账号',
 Upwd char(32) not null comment '用户密码',
 Utype varchar(3) check(Utype in ('学生','教师','管理员')) comment '用户类型',
 Uno char(13) comment '学生和教师独有属性列',
 primary key(Uaccount)
 ) comment '用户表';
 
 /*
 alter table user
 add column 
 (Uno char(13) comment '学生和教师独有属性列');
*/
 
  insert into 
 user(Uaccount,Upwd,Utype)
 values
 ('admin@root','123456','管理员',null), 
 ('tchr@11230','123057','教师','2010572611254'),
 ('tchr@23543','235435','教师','2010572611260'),
 ('tchr@79810','798101','教师','2010572611270'),
 ('tchr@22335','233520','教师','2009572611355'),
 ('stu@21154','211540','学生','2018329621055'),
('stu@27352','273520','学生','2018329621154'),
('stu@21254','212540','学生','2018329621273'),
('stu@21075','210750','学生','2018329621288');