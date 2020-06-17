create table course
(Cno char(10) not null comment '课程号',
 Cname varchar(20) unique comment '课程名',
 Ctype char(3) check(Ctype in ('选修课','必修课')) not null comment '课程类别',
 Tno char(13) not null comment '教师号',
 primary key(Cno),
 foreign key(Tno) references teacher(Tno)
 )comment '课程表';
 
 insert into 
 course(Cno,Cname,Ctype,Tno)
 values
 ('1000000001','C程序设计','必修课','2010572611254'),
 ('1000000002','Java程序设计','必修课','2010572611254'),
 ('1000000011','绘画基础','选修课','2015572611232');

/*
 alter table course
 add column 
 (Tno char(13) not null comment '教师号',
 foreign key(Tno) references teacher(Tno));
*/
