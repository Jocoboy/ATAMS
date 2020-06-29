-- 学生用户

#查询课程库信息
 select *
 from course;
 
#查询个人成绩
 select Sno, sc.Cno ,Grade from sc,course where Sno=? and sc.Cno=course.Cno
 
#查询教学任务

select sc.Cno,Cname,Tcontent from tc,sc,course where Sno= ? and sc.Cno=tc.Cno and sc.Cno=course.Cno

#添加选课记录

insert 
into sc(Sno,Cno)
values('2018329621270','1000000011');

-- 教师用户

#查询相关教学任务

select tc.Cno,Cname,Tcontent from tc,course where Tno= ? and tc.Cno = course.Cno 

#查询相关学生成绩记录

select Sno,course.Cno,Grade from sc,course where Tno = ? and sc.Cno=course.Cno

#添加教学任务

insert 
into tc(Tno,Cno,Tcontent)
values('2017572607520','1000000011','周末请带上你的画板');

#修改教学任务

update tc
set Tcontent='周末除了画板，再带上笔记本'
where Tno='2017572607520' and Cno='1000000011';

#删除教学任务

delete 
from tc
where Tno='2017572607520' and Cno='1000000011';

#添加学生成绩记录

insert
into sc(Sno,Cno,Grade)
values('2018329621270','1000000011','70');

-- 管理员超级用户

#查询任意表

select *
from user;

#修改任意表

update user
set Upwd='160094'
where Uaccount='2010572611254';
 
 
 