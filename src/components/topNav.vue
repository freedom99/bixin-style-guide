<template lang="html">
  <div class="wrapper">
    <div class="top-nav">
      <div class="logo">
        <router-link to="/home"><img src="../assets/bixin_logo@2x.png" alt="币信 logo" width="100"></router-link>
      </div>
      <div class="nav-items">
        <ul>
          <li><router-link to="/articles">文章</router-link></li>
          <li><router-link to="/designGuide">设计指南与资源</router-link></li>
          <li><router-link to="/career">工作机会</router-link></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'topNav',
  methods: {
    adjustNav: function adjustNav() {
      // const yHeight = document.getElementById('app').scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/primary";
.wrapper{
  display: flex;
  justify-content: center;
}
.top-nav{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #808080;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.5rem;
  padding-bottom: 0.5rem;
  background: $dark-blue;
  position: fixed;
  z-index: 99;
  top:0%;
  .logo{
    cursor: pointer;
  }
  .nav-items{
    ul li {
      font-size: 1.2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      a{
        color:$blue-gray;
        text-decoration: none;
        &:hover{
          color:$white;
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
