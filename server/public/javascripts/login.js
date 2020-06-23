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
            $.ajax({
                url: '/', // 默认值: 当前页地址(发送请求的地址)
                type: 'POST', // 默认值: "GET"。请求方式 ("POST" , "GET" , "PUT" , "DLELETE")，
                username: username, // 用于响应 HTTP 访问认证请求的用户名
                password: password, // 用于响应 HTTP 访问认证请求的密码
                succsess: (response)=>{ // 请求成功后的回调函数
                    // window.location.replace('/');
                    confirm("ajax success");
                },
                error:(response)=>{ // 请求失败时调用此函数
                    var code = JSON.parse(response.responseText).code;
                    if(code == 500){
                        confirm('500');
                    }
                    else{
                        confirm('???');
                    }
                }
            });
        }
        else{
            confirm("用户名和密码不能为空！");
        }
    })
})