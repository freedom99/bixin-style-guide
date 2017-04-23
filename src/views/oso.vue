<template>
<div class="wrapper">
  <top-nav></top-nav>
  <div id="oso">
  </div>
  <div class="demo">
  </div>
  <site-footer></site-footer>
</div>
</template>

<script>
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';

export default {
  name: 'oso',
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
.demo{
  width: 350px;
  height: 716px;
  background: url("../assets/phone-container.png") no-repeat;
  background-size: contain;
}
</style>
