create table sc
(Sno char(13) not null  comment '学号',
 Cno char(10) not null comment '课程号',
 Grade  tinyint unsigned check(Grade >=0 and Grade <= 100) comment '成绩',
 primary key(Sno,Cno),
 foreign key(Sno) references student(Sno),
 foreign key(Cno) references course(Cno)
 ) comment '选课关系表';
 
insert into 
sc(Sno,Cno,Grade)
values
('2018329621055','1000000001','80'),
('2018329621055','1000000011','83'),
('2018329621270','1000000002','100');