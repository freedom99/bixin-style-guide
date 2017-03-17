<template>
<div class="wrapper">
  <section class="head-part">
    <top-nav></top-nav>
    <div class="head-hero">
      <h3>币信正在快速成长，加入我们一起成长</h3>
      <br>
      <p>和优秀的同事一起工作，享受完成挑战的快乐</p>
    </div>
  </section>
  <section class="two-col">
    <div class="post-unit">
      <div class="post-info">
        <div class="post-info-author">
          <img src="../assets/jobs-first@2x.png" alt="我们做什么" width="30">
        </div>
        <div class="post-info-title">
          <h3>所做之事</h3>
        </div>
      </div>
      <div class="post-body">
        <h3>我们做什么</h3>
        <p>币信创立于2014年，是中国最大的比特币钱包平台。除了钱包本身，还成功运营着矿池等业务。与此同时，公司旗下还有分布于西南地区的三个比特币矿场。 <br><br>我们的办公室位于中关村天创科技大厦，现在团队有40余人，一半是程序员，一半是运营人员，均是比特币爱好者。</p>
      </div>
    </div>

    <div class="post-unit">
      <div class="post-info">
        <div class="post-info-author">
          <img src="../assets/jobs-idea@2x.png" alt="我们的愿景" width="30">
        </div>
        <div class="post-info-title">
          <h3>所想之景</h3>
        </div>
      </div>
      <div class="post-body">
        <h3>我们的愿景</h3>
        <p>我们的愿景是让比特币更好用，成为真正的互联网货币，让区块链重塑世界。</p>
      </div>
    </div>

    <div class="post-unit">
      <div class="post-info">
        <div class="post-info-author">
          <img src="../assets/jobs-demmand@2x.png" alt="我们希望你" width="30">
        </div>
        <div class="post-info-title">
          <h3>所求之人</h3>
        </div>
      </div>
      <div class="post-body">
        <h3>我们希望你</h3>
        <p>我们希望您品质优良，聪明而勤奋，技术基础良好，相信技术改变世界，充满好奇心，推崇科学、对一切未知有浓厚的探索热情。</p>
      </div>
    </div>
  </section>
  <section class="blk-link-wrapper">
    <a class="blk-link" href="mailto:tyler@bixin.com">我们正在招募设计领域的各类（产品设计、视觉设计、动效、交互）优秀人才，请不吝投递简历</a>
  </section>
  <site-footer></site-footer>
</div>
</template>

<script>
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';

export default {
  name: 'carrer',
  data() {
    return {};
  },
  components: {
    topNav,
    siteFooter,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../stylesheets/primary";
.head-part {
    background-image: url('../assets/career-hero@2x.png');
    background-size: cover;
    height: 600px;
    background-repeat: no-repeat;
    border-bottom: 1px solid $gray;
}
.head-hero {
    padding-top: 10rem;
    text-align: center;
    h3 {
        display: inline-block;
        font-size: 3rem;
        color: $white;
        background: $blue;
        margin-bottom: 0;
    }
    p {
        display: inline-block;
        font-size: 1.2rem;
        color: $white;
        background: $blue;
    }
}
.two-col {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-around;
}
.post-unit {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background: $blue;
    display: flex;
    flex: 0 1 auto;
    min-height: 400px;
    max-width: calc(30% - 60px);
    min-width: calc(30% - 60px);
    border: 1px solid $gray;
    transition: 0.2s ease-out;
    &:hover{
      box-shadow: 0 2px 50px rgba(0,0,0,0.2);
    }
    &:nth-child(1){
      background: $blue;
    }
    &:nth-child(2){
      background:$orange;
    }
    &:nth-child(3){
      background: $dark-blue;
    }
}
.post-info{
  background: rgba(255,255,255,0.1);
  position: absolute;
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  top: 0%;
  transition: 0.25s ease-in-out;
  padding-top:1rem;
  padding-bottom: 1rem;
  .post-info-author{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid $gray;
    overflow: hidden;
  }
  .post-info-title{
    h3{
      font-size: 1.2rem;
      color:$white;
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
}
.post-body{
  padding-left: 2rem;
  padding-right: 2rem;
  transform: translateY(4rem);
  h3{
    color:$white;
    font-size: 2rem;
    &:after {
    content: '';
    position: absolute;
    background: $white;
    width: 10rem;
    height: 4px;
    top:20%;
    left:9%;
    border-radius: 4px;
    }
  }
  p{
    color:$white;
    font-size: 0.9rem;
  }
}
.blk-link-wrapper{
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.blk-link{
  display: inline-block;
  background: $blue;
  color: $white;
  font-size: 1rem;
  text-decoration: none;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
