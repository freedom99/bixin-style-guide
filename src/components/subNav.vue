<template lang="html">
  <section class="three-col">
    <div class="col col-1">
      <h1>文章</h1>
      <p>币信产品设计师的脑子里在想什么?</p>
    </div>
    <div class="col col-2">
      <h1>指南和设计资源</h1>
      <p>一致、简洁、符合预期。</p>
    </div>
    <div class="col col-3">
      <h1>工作机会</h1>
      <p>接受挑战，成就更好的自己。</p>
    </div>
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
}
.col{
  cursor: pointer;
  width: 100%;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  background-image: url('../assets/article@2x.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 80% 80%;
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
</style>
