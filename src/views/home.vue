<template>
  <div class="wrapper">

    <section class="head-part">
      <top-nav></top-nav>
      <div class="head-hero">
        <h1 class="slogan">简洁，清晰，逻辑。<br>融合技术与灵感，设计创造价值。<br> <p>币信产品设计团队分享文章、指南、资源的地方</p> </h1>
        <p class="head-deco">Bixin design team. +</p>
        <!-- animated bg  -->
        <svg width="1500px" height="550px" viewBox="-2928 12920 1621 618" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <radialGradient cx="88.5579586%" cy="23.007004%" fx="88.5579586%" fy="23.007004%" r="80.8306023%" id="radialGradient-1">
                    <stop stop-color="#DEE655" offset="0%"></stop>
                    <stop stop-color="#FF5151" offset="100%"></stop>
                </radialGradient>
            </defs>
            <path d="M-2762,13301 C-1910.16146,12823.9178 -1856.69531,12827.4432 -1367,13131.5635 C-1120.52286,13284.6357 -1691.37416,13447.4051 -2210.60835,13510.4971 C-2722.97712,13572.7548 -3185.08474,13537.9536 -2762,13301 Z" id="Path-8-Copy" stroke="none" fill="url(#radialGradient-1)" fill-rule="evenodd"></path>
        </svg>
        <!-- animated bg -->
      </div>
    </section>
    <section>
      <div class="divider">
        <h3>探索如何更有效率的设计与协作</h3>
        <p>Design & cooperate</p>
      </div>
    </section>
    <sub-nav></sub-nav>
    <site-footer></site-footer>
  </div>
</template>

<script>
import anime from 'animejs';
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';
import subNav from '../components/subNav';

export default {
  name: 'home',
  data() {
    return {
    };
  },
  components: {
    topNav,
    siteFooter,
    subNav,
  },
  mounted: function initPage() {
    // this.tryAnime();
  },
  methods: {
    tryAnime: function tryAnime() {
      anime({
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../stylesheets/primary";
polygon{
  color: #808080;
}
.head-hero{
  margin-top: 8rem;
  position: relative;
  .slogan{
    position: absolute;
    top:0%;
    left: 10%;
    line-height: 5rem;
    font-size: 4rem;
    color: $white;
    font-weight: 300 !important;
    &:before {
    content: '●';
    position: absolute;
    z-index: -1;
    color: $yellow;
    font-size: 3rem;
    font-family: serif;
    top:-8%;
    left:-6%;
    }
    p{
      font-size: 1rem;
      line-height: 1.5rem;
      opacity: 0.8;
    }
  }
  .head-deco{
    position: absolute;
    right: 1%;
    top:15%;
    letter-spacing: 5px;
    font-family: Hack;
    color:$dark-blue;
    font-size: 1rem;
    transform: rotate(90deg);
  }
}
.head-part{
  height: 800px;
  background: $orange;
}
.divider{
  text-align: center;
  font-size: 2rem;
  color:$dark-blue;
  padding-top: 3rem;
  padding-bottom: 3rem;
  h3{
    margin-bottom: 0;
  }
  p{
    font-size: 1rem;
    letter-spacing: 1.3rem;
    transform: translateX(8px);
  }
}
</style>
