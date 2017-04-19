<template lang="html">
  <section class="three-col">
    <router-link to="/oso" class="col col-1" >
      <h1>OSO</h1>
      <p>一个纯 CSS 前端 UI 框架</p>
    </router-link>
    <router-link to="/designGuide" class="col col-2">
      <h1>指南和设计资源</h1>
      <p>一致、简洁、符合预期。</p>
    </router-link>
    <router-link to="/career" class="col col-3">
      <h1>工作机会</h1>
      <p>接受挑战，成就更好的自己。</p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'subNav',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/primary";
.three-col{
  min-height: 350px;
  background: $blue;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  border-top: 1px solid $gray;
  border-bottom: 1px solid $gray;
  flex-wrap: nowrap;
}
.col{
  cursor: pointer;
  width: 100%;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  h1{
    font-size: 2rem;
    color:$white;
    position: relative;
    &:before {
    content: '';
    background: $white;
    width: 3rem;
    height: 6px;
    border-radius: 4px;
    display: inline-block;
    position: absolute;
    top:-20%;
    left: 0%;
    }
  }
  p{
    font-size: 1rem;
    color:$white;
  }
}
.col-1{
  background: $dark-blue;
  background-image: url('../assets/oso@2x.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 80% 80%;
  transition: 0.2s ease-out;
  &:hover{
    background-size: 45%;
    background-position: 90% 80%;
  }
  p{
   position: relative;
   &:after{
     content: '1';
     display: inline-block;
     position: absolute;
     top: 0%;
     left: 0%;
     font-size: 12rem;
     color: $white;
     opacity: 0.4;
   }
  }
}
.col-2{
  background: $blue;
  background-image: url('../assets/device@2x.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 80% 80%;
  transition: 0.2s ease-out;
  &:hover{
    background-size: 45%;
    background-position: 90% 80%;
  }
  p{
    position: relative;
    &:after{
      content: '2';
      display: inline-block;
      position: absolute;
      top: 0%;
      left: 0%;
      font-size: 12rem;
      color: $white;
      opacity: 0.4;
    }
  }
}
.col-3{
  background: $white;
  background-image: url('../assets/phone@2x.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 80% 120%;
  overflow: hidden;
  transition: 0.2s ease-out;
  &:hover{
    background-size: 43%;
    background-position: 90% 100%;
  }
  h1{
    font-size: 2rem;
    color:$blue;
    position: relative;
    &:before {
    content: '';
    background: $blue;
    width: 3rem;
    height: 6px;
    border-radius: 4px;
    display: inline-block;
    position: absolute;
    top:-20%;
    left: 0%;
    }
  }
  p{
    font-size: 1rem;
    color:$blue;
    position: relative;
    &:after{
      content: '3';
      display: inline-block;
      position: absolute;
      top: 0%;
      left: 0%;
      font-size: 12rem;
      color: $blue;
      opacity: 0.4;
    }
  }
}
@media(max-width:768px){
  .three-col{
    flex-wrap: wrap;
  }
  .col{
    background-image: none;
    h1{
      font-size: 1.4rem;
    }
    p{
      &:after{
        content: '';
      }
    }
  }
}
</style>
