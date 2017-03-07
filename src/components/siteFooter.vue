<template lang="html">
  <div class="footer">
    <div class="logo">
      <div>
        <img src="../assets/footer-logo@2x.png" alt="币信 footer-logo" width="100">
      </div>
      <p>币信 © 2017 Design Team</p>
    </div>
    <div class="footer-item">
      <ul>
        <li><a href="https://github.com/rayston92/bixin-style-guide"><img src="../assets/link-to-github@2x.png" alt="币信 style-guide" target="_blank" width="40"></a></li>
        <li><a href="https://dribbble.com/bixin"><img src="../assets/link-to-dribbble@2x.png" alt="币信 dribbble" target="_blank" width="40"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'siteFooter',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/primary";
.footer{
  background-repeat: repeat-x;
  background-image: url(../assets/footer-pattern@2x.png);
  background-size:auto;
}
.logo{
  display: flex;
  align-items: center;
  p{
    font-size: 1rem;
    color: $blue-gray;
    margin-left: 2rem;
  }
}
.footer{
  display: flex;
  justify-content: space-between;
  padding-left:3rem;
  padding-right: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .footer-item{
    align-items: center;
    ul{
      display: flex;
      padding-left: 0;
      padding-top: 1.5rem;
      li {
        list-style-type: none;
        margin-right: 1rem;
      }
    }
  }
}
</style>
