create table course
(Cno char(10) not null comment '课程号',
 Cname varchar(20) unique comment '课程名',
 Ctype varchar(5) check(Ctype in ('公共基础课','学科基础课','专业课','通识课','实践课','专业基础课')) not null comment '课程类别',
 Tno char(13) not null comment '教师号',
 primary key(Cno),
 foreign key(Tno) references teacher(Tno)
 )comment '课程表';
 
 insert into 
 course(Cno,Cname,Ctype,Tno)
 values
 ('1000000001','C程序设计','专业课','2010572611254'),
 ('1000000002','Java程序设计','专业课','2010572611260'),
 ('1000000011','绘画基础','专业课','2015572611232'),
('2000000022','近现代史纲要','公共基础课','2010572611260'),
('3000000030','计算机基础','学科基础课','2017572604439'),
('4000000033','艺术欣赏','通识课','2015572611232'),
('5000000030','社会实践','实践课','2009572611355'),
('6000000031','Android应用开发基础','专业基础课','2010572611254');

/*
 alter table course
 add column 
 (Tno char(13) not null comment '教师号',
 foreign key(Tno) references teacher(Tno));
*/
