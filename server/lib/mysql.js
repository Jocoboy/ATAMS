module.exports = {
    i_i_user_v3: 'INSERT INTO user (Uaccount, Upwd, Utype) VALUE(?, ?, ?)',
    d_f_user_w_account: 'Delete FROM user WHERE Uaccount = ?',
    u_user_s3_w_account: 'UPDATE user SET Uaccount = ?, Upwd = ?, Utype = ? WHERE Uaccount = ?',
    s_all_f_user: 'SELECT * FROM user',
    s_all_f_user_w_account: 'SELECT * FROM user WHERE Uaccount = ?',

    i_i_teacher_v3:'INSERT INTO teacher (Tno, Tname, Tposition) VALUE(?, ?, ?)',
    d_f_teacher_w_no: 'DELETE FROM teacher WHERE Tno = ?',
    u_teacher_s3_w_no: 'UPDATE teacher SET Tno = ?, Tname = ?, Tposition = ? WHERE Tno = ?',
    s_all_f_teacher: 'SELECT * FROM teacher',
    s_all_f_teacher_w_no: 'SELECT * FROM teacher WHERE Tno = ?',

    i_i_student_v4: 'INSERT INTO student (Sno, Sname, Ssex, Sage) VALUE(?, ?, ?, ?)',
    u_student_s4_w_no: 'UPDATE student SET Sno = ?, Sname = ?, Ssex = ?, Sage = ? WHERE Sno = ?',
    d_f_student_w_no: 'DELETE FROM student WHERE Sno = ?',
    s_all_f_student: 'SELECT * FROM student',
    s_all_f_student_w_no: 'SELECT * FROM student WHERE Sno = ?',

    i_i_course_v4: 'INSERT INTO course (Cno, Cname, Ctype, Tno) VALUE(? ,? ,? ,?)',
    d_f_course_w_no: 'DELETE FROM course WHERE Cno = ?',
    u_course_s4_w_no: 'UPDATE course SET Cno = ?, Cname = ?, Ctype= ?, Tno = ? WHERE Cno = ?',
    s_all_f_course: 'SELECT * FROM course',
    s_all_f_course_w_no: 'SELECT * FROM course WHERE Cno = ?',


    i_i_tc_v2: 'INSERT INTO tc (Cno, Tcontent) VALUE(?, ?)',
    d_f_tc_w_no: 'DELETE FROM tc WHERE Cno = ?',
    u_tc_s2_w_no: 'UPDATE tc SET Cno = ?, Tcontent = ? WHERE Cno = ?',
    s_all_f_tc: 'SELECT * FROM tc',
    s_all_f_tc_w_no: 'SELECT * FROM tc WHERE Cno = ?',

    i_i_sc_v2: 'INSERT INTO sc (Sno, Cno) VALUE(?, ?)',
    i_i_sc_v3: 'INSERT INTO sc (Sno, Cno, Grade) VALUE(?, ?, ?)',
    d_f_sc_w_no2: 'DELETE FROM sc WHERE Sno= ? AND Cno = ?',
    d_f_sc_w_no2_null: 'DELETE FROM sc WHERE Sno = ? AND Cno = ? AND Grade IS NULL',
    u_sc_s1_w_no2: 'UPDATE sc SET Grade = ? WHERE Sno = ? AND Cno = ?',
    u_sc_s3_w_no2: 'UPDATE sc SET Sno = ?, Cno = ?, Grade = ? WHERE Sno = ? AND Cno = ?',
    s_all_f_sc: 'SELECT * FROM sc',
    s_all_f_sc_w_no2: 'SELECT * FROM sc WHERE Sno = ? AND Cno = ?',


    s4_f2_w1_l1_0: 'SELECT Sno, course.Cno, Grade FROM sc, course WHERE Tno = ? AND sc.Cno = course.Cno',
    s3_f2_w1_l1_1: 'SELECT tc.Cno, Cname, Tcontent FROM tc, course WHERE Tno = ? AND tc.Cno = course.Cno',
    s3_f2_w1_l1_2: 'SELECT Sno, sc.Cno, Grade FROM sc, course WHERE Sno = ? AND sc.Cno = course.Cno',
    s3_f3_w1_l2_3: 'SELECT sc.Cno, Cname, Tcontent FROM tc, sc, course WHERE Sno = ? AND sc.Cno = tc.Cno AND sc.Cno = course.Cno'
};
