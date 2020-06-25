$().ready(()=>{

    // $("#login_form").validate({
    //     rules: {
    //       username: "required",
    //       password: {
    //         required: true,
    //         minlength: 6
    //       }
    //     },
    //     message: {
    //       username: {
    //         required: "请输入用户名"
    //       },
    //       password: {
    //         required: "请输入密码",
    //         minlength: jQuery.format("密码不能小于{0}个字符")
    //       }
    //     },
    //   });

    $('#btn_login').click(()=>{
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        if(username && password){
          //  alert("$.ajax前面")
            $.ajax({
                url: '/login', // 默认值: 当前页地址(发送请求的地址)
                type: 'POST', // 默认值: "GET"。请求方式 ("POST" , "GET" , "PUT" , "DLELETE")，
                data:{
                    username: username, // 用于响应 HTTP 访问认证请求的用户名
                    password: password, // 用于响应 HTTP 访问认证请求的密码
                },

                success: (response)=>{ // 请求成功后的回调函数
                  //  alert("success");
                    window.location.href='/users';
                },
                error:(response)=>{ // 请求失败时调用此函数
                 //   alert("error");
                    var code = JSON.parse(response.responseText).code;
                    if(code == 500){
                        confirm("服务器内部错误！");
                    }
                    else{
                        confirm("用户名或密码错误233！");
                    }
                },
                compete:function(XMLHttpRequest, textStatus) { 
                    alert("complete");
                }
            });
        }
        else{
            confirm("用户名和密码不能为空！");
        }
    });
})