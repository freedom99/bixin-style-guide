<template>
<div class="wrapper">
  <div class="head-part">
    <top-nav></top-nav>
    <div class="bixin-ui-sketch-dl">
      <figure class="sketch"></figure>
      <h3>Bixin UI SKetch 组件</h3>
      <p>由币信设计团队维护，基于Symbol，全矢量，涵盖大部分场景与控件，一处修改，全局更新。</p>
      <a href="http://ooowaexz7.bkt.clouddn.com/BixinUI%E7%BB%84%E4%BB%B6%E5%BA%93%28V1.2.1-2017.04.18%29.sketch" class="btn btn-primary">立即下载</a>
    </div>
  </div>

  <site-footer></site-footer>
</div>
</template>

<script>
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';

export default {
  name: 'designGuide',
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
.head-part{
  background: url("../assets/design_src_head.png") no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;
}
.bixin-ui-sketch-dl{
  position: absolute;
  text-decoration: none;
  top:20%;
  left: 10%;
  height: 300px;
  width: 400px;
  border-radius: 10px;
  background: $white;
  padding-right: 1rem;
  padding-left: 1rem;
  h3{
    color:$dark-blue;
    font-size: 1.2rem;
    margin-left:30px;
    margin-top:0;
  }
  p{
    color:$dark-blue;
    font-size: 1rem;
    margin-left:30px;
    margin-top:0;
  }
  a{
    margin-left: 30px;
  }
  .sketch{
    width: 200px;
    height: 200px;
    background: url("../assets/bixin_sketch.png") no-repeat;
    background-size:contain;
    margin-left: 10px;
    margin-top: -100px;
  }
}
@media(max-width:768px){
  .bixin-ui-sketch-dl{
    width: 300px;
    height: 350px;
  }
}
</style>
