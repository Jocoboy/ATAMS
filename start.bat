@echo off
cd C:\Program Files\MySQL\MySQL Server 8.0\bin
mysql -h localhost -u root -p 

pause

:: 用法
REM select distinct concat('User: ''',user,'''@''',host,''';') as query from mysql.user;
REM show grants for student@'%';
REM drop user student@'%';

:: 创建学生用户，并赋予数据库atams的course表的查询权限，sc表(除Grade属性列修改权限外)的所有权限，tc表Tcontent属性列的查询权限
REM create user student identified by 'stu160012';
REM grant select on atams.course to student@'%';
REM grant select(Grade) on atams.sc to student@'%';
REM grant select(Sno,Cno) on atams.sc to student@'%';
REM grant insert(Sno,Cno) on atams.sc to student@'%';
REM grant update(Sno,Cno) on atams.sc to student@'%';
REM grant delete on atams.sc to student@'%';
REM grant select(Tcontent) on atams.tc to student@'%';
REM flush  privileges;

:: 创建教师用户，并赋予数据库atams的tc表的所有权限，sc表Grade属性列的修改权限
REM create user teacher identified by 'tch21160';
REM grant  all privileges on atams.tc to teacher@'%';
REM grant  update(Grade) on atams.sc to teacher@'%';

:: 创建管理员超级用户，并赋予数据库atams的所有权限
REM create user superuser identified by 'sp000000';
REM grant all privileges on atams.* to superuser@'%';
REM flush  privileges;