<template>
  <div id="app">
    <div class="page-wrapper">
      <router-view></router-view>
      <div class="container mt-5" id="page-container">
         <router-view name="Jumbotron"></router-view> 
         <router-view name="LoginForm"></router-view>
         <router-view name="Footer"></router-view>
         <!-- <img :src="bg"> -->
      </div>
      
    </div>
  </div>
</template>

<script>
// import bg from '../assets/img/bg-login.jpg'

export default {
  name: 'App',
  // data(){
  //   return{
  //     bg: bg
  //   };
  // }
}

</script>

<style>
/* #app {
  
} */

.page-wrapper{
  font-family: '黑体', '微软雅黑', Arial, sans-serif;
  color: #2c3e50;
}

#page-container{
  height: 100%;
  width: 100%;
}

</style>
