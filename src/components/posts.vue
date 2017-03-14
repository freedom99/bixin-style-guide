<template lang="html">
<div class="wrapper">
  <div class="post-unit">
    <div class="post-info">
      <div class="post-info-author">
        <img src="../assets/tintin.jpg" alt="魔力大熊" width="50">
      </div>
      <div class="post-info-title">
        <h3>设计神器 Figma 深度评测</h3>
        <p>魔力大熊</p>
      </div>
      <div class="post-info-src">
        <img src="../assets/src-zhihu.png" alt="知乎原文链接" width="30">
      </div>
      <div class="abstract">
        <p>Figma 是最近才出的一款设计软件，经历了相当的打磨，完成度很高。除了「实时协作」，还有「版本控制」、「矢量网络（Vector Network）」...</p>
      </div>
    </div>
  </div>
  <div class="post-unit">
    <div class="post-info">
      <div class="post-info-author">
        <img src="../assets/tintin.jpg" alt="魔力大熊" width="50">
      </div>
      <div class="post-info-title">
        <h3>移动端适配经验</h3>
        <p>魔力大熊</p>
      </div>
      <div class="post-info-src">
        <img src="../assets/src-zhihu.png" alt="知乎原文链接" width="30">
      </div>
      <div class="abstract">
        <p>Figma 是最近才出的一款设计软件，经历了相当的打磨，完成度很高。除了「实时协作」，还有「版本控制」、「矢量网络（Vector Network）」...</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'posts',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/primary";
.wrapper{
  padding-top:3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}
.post-unit{
  background-image: url('../assets/post-figma.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center !important;
  flex:0 1 auto;
  min-height: 400px;
  min-width: calc(50% - 60px);
  border: 1px solid $gray;
  cursor: pointer;
  &:hover{
    .post-info {
      padding-bottom: 5rem;
      background: rgba(255,255,255,1);
      .abstract{
        p{
          opacity: 1;
        }
      }
    }
  }
}
.post-info{
  background: rgba(255,255,255,0.95);
  border-top: 1px solid $gray;
  position: absolute;
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  bottom: 0%;
  transition: 0.25s ease-in-out;
  .post-info-author{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid $gray;
    overflow: hidden;
  }
  .post-info-title{
    h3{
      font-size: 1.5rem;
      color:$dark-blue;
      margin-bottom: 0;
      margin-top: 0;
    }
    p{
      margin-top: 0;
      font-size: 1rem;
      color:$dark-blue;
      margin-bottom: 0;
    }
  }
  .post-info-src{
    transform: translateY(-15px);
    align-self: flex-end;
  }
  .abstract{
    position: absolute;
    bottom: 0%;
    padding-left: 2rem;
    padding-right: 2rem;
    p{
      font-size: 1rem;
      color:$dark-blue;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
  }
}
@media(max-width:800px){
  .post-info-title{
    h3{
      font-size:1.2rem !important;
    }
  }
}
</style>
