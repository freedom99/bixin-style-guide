<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <section class="head-part">
    </section>
    <section class="three-col">
    </section>
    <site-footer></site-footer>
  </div>
</template>

<script>
import topNav from '../components/topNav';
import siteFooter from '../components/siteFooter';

export default {
  name: 'home',
  data() {
    return {
    };
  },
  components: {
    topNav,
    siteFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../stylesheets/primary";
.head-part{
  height: 400px;
  background: $blue-gray;
}
.three-col{
  height: 300px;
  background: $blue;
}
</style>
