create table tc
(Cno char(10) not null comment '课程号',
 Tcontent varchar(200) default null comment '教学任务',
 primary key(Cno),
 foreign key(Cno) references course(Cno)
 ) comment '教学任务表';
 
insert into 
tc(Cno,Tcontent)
values
('1000000001','欢迎学习C程序设计！'),
('1000000002','请大家12月10号前完成课堂练习'),
('1000000011','欢迎选择绘画基础课程！'),
('2000000022','请带上近现代史书本到2N-443.'),
('3000000030','学好计算机基础，快乐每一天'),
('4000000033','2号截止美学欣赏作业，请尽快邮寄到我的QQ邮箱~'),
('5000000030','暑期社会实践即将开始'),
('6000000031','请大家打开麦克风交流，我在钉钉等你哦！~');