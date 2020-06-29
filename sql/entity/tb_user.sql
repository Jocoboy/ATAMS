create table user
(Uaccount varchar(16) not null comment '用户账号',
 Upwd char(32) not null comment '用户密码',
 Utype varchar(3) check(Utype in ('学生','教师','管理员')) comment '用户类型',
 primary key(Uaccount)
 ) comment '用户表';
 
 
  insert into 
 user(Uaccount,Upwd,Utype)
 values
 ('admin@root','123456','管理员'), 
 ('tchr@11230','123057','教师'),
 ('tchr@23543','235435','教师'),
 ('tchr@79810','798101','教师'),
 ('tchr@22335','233520','教师'),
 ('stu@21154','211540','学生'),
('stu@27352','273520','学生'),
('stu@21254','212540','学生'),
('stu@21075','210750','学生');