create table user
(Uaccount char(13) not null comment '用户账号',
 Upwd varchar(20) not null comment '用户密码',
 Utype varchar(3) check(Utype in ('学生','教师','管理员')) comment '用户类型',
 primary key(Uaccount)
 ) comment '用户表';
 
 
  insert into 
 user(Uaccount,Upwd,Utype)
 values
 ('2018329621154','160012','学生'),
 ('2010572611254','173253','教师'),
 ('1000256311325','888888','管理员');