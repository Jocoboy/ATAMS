create table teacher
(Tno char(13) not null comment '教师号',
 Tname varchar(10) unique comment '姓名',
 Tposition varchar(3) check(Tposition in ('助教','讲师','副教授','教授')) not null comment '职称',
 primary key(Tno)
 ) comment '教师表';
 
insert into 
teacher(Tno,Tname,Tposition)
values
('2010572611254','黄山','教授'),
('2010572611270','李铭','副教授'),
('2015572611232','张子丹','讲师'),
('2017572607520','米蓝','助教');