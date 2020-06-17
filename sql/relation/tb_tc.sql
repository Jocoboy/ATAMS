create table tc
(Cno char(10) not null comment '课程号',
 Tcontent varchar(200) default null comment '教学任务',
 primary key(Cno),
 foreign key(Cno) references course(Cno)
 ) comment '教学任务表';
 
insert into 
tc(Cno,Tcontent)
values
('1000000001',''),
('1000000002','请大家12月10号前完成课堂练习'),
('1000000011','欢迎选择绘画基础课程！');