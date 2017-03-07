<template lang="html">
  <div class="top-nav">
    <div class="logo">
      <img src="../assets/bixin_logo@2x.png" alt="币信 logo" width="140">
    </div>
    <div class="nav-items">
      <ul>
        <li><router-link to="/articles">文章</router-link></li>
        <li><router-link to="/articles">设计指南与资源</router-link></li>
        <li><router-link to="/articles">工作机会</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/primary";
.top-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #808080;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top:1rem;
  padding-bottom: 1rem;
  background: $white;
  .nav-items{
    ul li {
      font-size: 1.2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      a{
        color:$blue-gray;
        text-decoration: none;
        &:hover{
          color:$blue;
        }
      }
    }
  }
}
ul{
  padding-left: 0;
  list-style-type: none;
  display: flex;
}
</style>
