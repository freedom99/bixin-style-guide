<template>
<div class="wrapper">
  <div class="head-part">
    <top-nav></top-nav>
    
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
</style>
