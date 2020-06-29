create table student 
(Sno char(13) not null  comment '学号',
 Sname varchar(10) unique comment '姓名',
 Ssex char(2)  default '男' check(Ssex in ('男','女')) not null comment '性别',
 Sage  tinyint unsigned not null comment '年龄',
 primary key(Sno),
 index t_name(Sname)
) engine InnoDB default charset utf8mb4 comment '学生表'; 

insert into 
student(Sno,Sname,Ssex,Sage)
values
('2018329621055','马小跳','男',20),
('2018329621154','花无缺','女',21),
('2018329621273','张马尚','男',20),
('2018329621288','车路','女',20),
('2018329621190','刘晓芒','女',20),
('2018329621330','范海霞','女',20),
('2018329621420','严正明','男',21),
('2018329621521','郭志泽','男',20),
('2018329621788','杨弘文','男',22);
