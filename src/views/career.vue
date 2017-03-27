<template>
<div class="wrapper">
  <header class="head-part">
    <top-nav></top-nav>
    <div class="head-hero">
      <div class="slogon">
        <h3>如果你富有洞见、野心勃勃，对未知抱有好奇心</h3>
        <p>加入我们，和优秀的同事一起享受工作的快乐</p>
      </div>
      <div class="activity">
        <figure class="lefthand"></figure>
        <figure class="righthand"></figure>
        <figure class="letter_W"></figure>
        <figure class="letter_A"></figure>
        <figure class="letter_N"></figure>
        <figure class="letter_T"></figure>
        <figure class="letter_E"></figure>
        <figure class="letter_D"></figure>
      </div>
    </div>

  </header>

  <section class="container">
    <div class="wanted">
      <p>我们在寻找设计领域的各类优秀人才，请不吝投递简历</p>
    </div>
    <section class="introduce">
      <div class="post-unit flex-column">
        <figure class="intro"></figure>
        <div class="subtitle">所做之事</div>
        <h2>我们做什么</h2>
        <p>
          币信创立于2014年，是中国最大的比特币钱包平台。除了钱包本身，还成功运营着矿池等业务。与此同时，公司旗下还有分布于西南地区的三个比特币矿场。
        </p>
      </div>
      <div class="post-unit flex-column">
        <figure class="dove"></figure>
        <div class="subtitle">所愿之景</div>
        <h2>我们的愿景</h2>
        <p>
          相信技术能改变世界，币信团队致力于让比特币更好用，成为真正的互联网货币，让区块链重塑世界。
        </p>
      </div>
      <div class="post-unit flex-column">
        <figure class="vision"></figure>
        <div class="subtitle">所求之人</div>
        <h2>我们希望</h2>
        <p>
          我们希望您品质优良，聪明而勤奋，技术基础良好，相信技术改变世界，充满好奇心，推崇科学、对一切未知有浓厚的探索热情。
        </p>
      </div>
    </section>
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
  background-color: #F4F4F4;
  height: 680px;
  background-repeat: no-repeat;
}
.head-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 680px;
  h3 {
    text-align: center;
    font-size: 3rem;
    color: black;
    margin: 0;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: $almost-black;
    margin-top: 2rem;
  }
}
figure{
  margin: 0;
  padding: 0
}
.activity{
  display: block;
  position: absolute;
  height: 680px;
  width: 100vw;
  figure{
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    animation-direction: alternate;
    transition: all 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
	  -moz-transition: all 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
	  -webkit-transition: all 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
.lefthand{
  background-image: url("../assets/hand-left@2.png");
  width: 164px;
  height: 263px;
  transform: translate(20vw, 400px);
}
.righthand{
  background-image: url("../assets/hand-right@2.png");
  width: 76px;
  height: 130px;
  transform: translate(75vw, 493px);
}
.letter_W{
  background-image: url("../assets/letter_W@2.png");
  width: 45px;
  height: 45px;
  transform: translate(4vw, 360px);
  animation: blink-animation 1.5s infinite;
}
.letter_A{
  background-image: url("../assets/letter_A@2.png");
  width: 39px;
  height: 50px;
  transform: translate(24vw, 142px);
  animation: blink-animation 0.9s infinite;
}
.letter_N{
  background-image: url("../assets/letter_N@2.png");
  width: 40px;
  height: 48px;
  transform: translate(34vw, 460px);
  animation: blink-animation 2s infinite;
}
.letter_T{
  background-image: url("../assets/letter_T@2.png");
  width: 36px;
  height: 44px;
  transform: translate(54vw, 178px);
  animation: blink-animation 1s infinite;
}
.letter_E{
  background-image: url("../assets/letter_E@2.png");
  width: 36px;
  height: 52px;
  transform: translate(68vw, 360px);
  animation: blink-animation 1.8s infinite;
}
.letter_D{
  background-image: url("../assets/letter_D@2.png");
  width: 35px;
  height: 50px;
  transform: translate(90vw, 320px);
  animation: blink-animation 0.8s infinite;
}
@keyframes blink-animation{
 0% {opacity: 1}
 50% {opacity: 0.8}
 100% {opacity: 0.2}
}
@-moz-keyframes blink-animation{
 0% {opacity: 1}
 50% {opacity: 0.8}
 100% {opacity: 0.2}
  }
@-webkit-keyframes blink-animation{
  0% {opacity: 1}
  50% {opacity: 0.8}
  100% {opacity: 0.2}
}
.container {
  transform: translateZ(1px);
  padding: 5rem 2rem 8rem;
  margin: -5rem 5rem 6rem;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
}
.wanted{
  padding: 5rem auto;
  p{
    margin: 0;
    text-align: center;
    color: $almost-black;
    font-size: 1.5rem;
  }
}
.introduce{
    margin-top: 9rem;
    display: flex;
    figure{
      margin-bottom: 40px;
    }
}
.intro{
  background-image: url("../assets/intro@2.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 90px;
  height: 128px;
}
.dove{
  background-image: url("../assets/dove@2.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 134px;
  height: 119px;
}
.vision{
  background-image: url("../assets/vision@2.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 85px;
  height: 153px;
}
.post-unit{
  padding: 0 2rem;
  h2{
    font-family: Songti SC;
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
  }
  p{
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
}
.subtitle{
  font-size: 1rem;
  color: #aaa;
}
.flex-column{
  -webkit-flex: 1;
  flex: 1;
}

</style>
