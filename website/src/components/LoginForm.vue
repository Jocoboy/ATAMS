<template>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6 offset-md-3">
          <label for="username">用户名</label>
          <input type="email" class="form-control" id="username" placeholder="请输入用户名"  autocomplete="off"/>
        </div>
        <div class="form-group col-md-6 offset-md-3">
          <label for="password">密码</label>
          <input type="password" class="form-control" id="password" placeholder="请输入密码" autocomplete="off" />
        </div>
      </div>
      <div class="form-group col-md-6 offset-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">记住密码</label>
        </div>
      </div>
      <button type="submit" class="btn btn-dark col-md-3 offset-md-3 mb-5">登录</button>
    </form>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
