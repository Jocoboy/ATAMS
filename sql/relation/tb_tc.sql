create table tc
(Tno char(13) not null comment '教师号',
 Cno char(10) not null comment '课程号',
 Tcontent varchar(200) default null comment '教学任务',
 primary key(Tno,Cno),
 foreign key(Tno) references teacher(Tno),
 foreign key(Cno) references course(Cno)
 ) comment '教学任务表';
 
insert into 
tc(Tno,Cno,Tcontent)
values
('2010572611254','1000000001',''),
('2010572611254','1000000002','请大家12月10号前完成课堂练习'),
('2015572611232','1000000002','欢迎选择Java程序设计课程！');