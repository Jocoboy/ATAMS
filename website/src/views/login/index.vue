<template>
  <div class="page-wrapper">
    <div class="container mt-5" id="page-container">
      <div class="jumbotron jumbotron-fluid bg-dark text-light text-center">
        <div class="container">
          <h1 class="display-4">您好，</h1>
          <p class="lead">欢迎使用浙江理工大学教务管理系统！</p>
        </div>
      </div>

      <form id="login_form">
        <div class="form-row">
          <div class="form-group col-md-6 offset-md-3">
            <i class="fa fa-user fa-lg"></i>
            <label for="username">用户名</label>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="请输入用户名"
              autocomplete="off"
            />
          </div>
          <div class="form-group col-md-6 offset-md-3">
            <i class="fa fa-lock fa-lg"></i>
            <label for="password">密码</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="请输入密码"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="form-group col-md-6 offset-md-3">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" />
            <label class="custom-control-label" for="customSwitch1">记住密码</label>
          </div>
        </div>
        <button type="submit" class="btn btn-dark col-md-3 offset-md-3 mb-5">登录</button>
      </form>
      <footer class="navbar-fixed-bottom">
        <div class="container mt-5">
          <div class="row justify-content-md-center">
            <p class="text-dark">
              Copyright
              <i class="fa fa-copyright" aria-hidden="true"></i>
              浙江理工大学 版权所有
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  mounted() {

    $("#login_form").validate({
      rules: {
        username: {
          required: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      message: {
        username: {
          required: "请输入用户名"
        },
        password: {
          required: "请输入密码",
          minlength: "密码不能小于6个字符"
        }
      },
    });
  }
};
</script>


<style>

body{
  background-image: url(../../assets/img/bg-login.jpg),
  repeating-linear-gradient(
    -45deg,
    rgb(154, 142, 130),
    rgb(154, 142, 130) 1%,
    rgb(148, 137, 126) 1%,
    rgb(148, 137, 126) 2%
  );
  background-size: cover;
  background-repeat: no-repeat;
}

.page-wrapper {
  font-family: "黑体", "微软雅黑", Arial, sans-serif;
  color: #2c3e50;
}

#page-container {
  height: 100%;
  width: 100%;
}
</style>