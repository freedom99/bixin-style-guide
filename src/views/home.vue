<template>
  <div class="wrapper">

    <section class="head-part">
      <top-nav></top-nav>
      <div class="head-hero">
        <h1 class="slogan">简洁，清晰，逻辑。<br>融合技术与灵感，设计创造价值。<br> <p>币信产品设计团队分享文章、指南、资源的地方</p> </h1>
        <p class="head-deco">Bixin design team. +</p>
        <!-- animated bg  -->
        <home-hero-anime></home-hero-anime>
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
    <posts></posts>
    <site-footer></site-footer>
  </div>
</template>

<script>
import anime from 'animejs';
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';
import subNav from '../components/subNav';
import homeHeroAnime from '../components/homeHeroAnime';
import posts from '../components/posts';

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
    homeHeroAnime,
    posts,
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
    z-index: 10;
    font-weight: 300 !important;
    &:before {
    content: '●';
    position: absolute;
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
    top:30%;
    letter-spacing: 5px;
    font-family: Hack;
    color:$white;
    font-size: 1rem;
    transform: rotate(90deg);
    z-index: 10;
  }
}
.head-part{
  height: 800px;
  background-image: linear-gradient(-180deg, #D10000 0%, #000000 100%);
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
