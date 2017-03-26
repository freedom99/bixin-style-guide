<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  },
};
</script>

<style>
body{
  margin: 0;
  font-size: 10px;
}
#app {
  font-family: "PingFangSC-Light", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
