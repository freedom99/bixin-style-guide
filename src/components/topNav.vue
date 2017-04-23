<template lang="html">
  <div class="wrapper">
    <div class="top-nav" :class="{ expand: scrolled, opened: navOpen }">
      <div class="logo">
        <router-link to="/home"><img src="../assets/bixin_logo@2x.png" alt="币信 logo" width="100"></router-link>
      </div>
      <div class="nav-items hidden-xs">
        <ul>
          <!-- <li><router-link to="/articles">文章</router-link></li> -->
          <li><router-link to="/oso" active-class >OSO</router-link></li>
          <li><router-link to="/designGuide" active-class >设计指南与资源</router-link></li>
          <li><router-link to="/career" active-class >工作机会</router-link></li>
        </ul>
      </div>
      <div class="nav-items visible-xs">
        <a class="nav-trigger" @click="navTriggerClick">
            <span class="nav-icon" :class="{ opened: navOpen }"></span>
        </a>
      </div>
      <div class="nav-full visible-xs" :class="{ visible: navOpen }">
        <ul>
          <!-- <li><router-link to="/articles">文章</router-link></li> -->
          <li><router-link to="/articles">OSO</router-link></li>
          <li><router-link to="/designGuide">设计指南与资源</router-link></li>
          <li><router-link to="/career">工作机会</router-link></li>
        </ul>
      </div>
    </div>

  </div>

</template>
=
<script>
export default {
  name: 'topNav',
  data() {
    return {
      scrolled: false,
      navOpen: false,
    };
  },
  mounted: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      this.scrolled = window.scrollY > 40;
    },
    navTriggerClick: function() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss" scoped>@import "../stylesheets/primary";
.wrapper {
    display: flex;
    justify-content: center;
}
.top-nav {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #808080;
    padding: 0.5rem 1rem;
    background: $white;
    border-left:1px solid $gray;
    border-right:1px solid $gray;
    border-bottom:1px solid $gray;
    position: fixed;
    z-index: 99;
    height: 3rem;
    top: 0;
    transition: 0.2s cubic-bezier(.54,.03,0,.77);
    .logo {
        cursor: pointer;
    }
    .nav-items {
        ul li {
            font-size: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            .router-link-active{
              border-bottom: 4px solid $blue;
              color:$blue;
              &:hover{
                color: $blue;
              }
            }
            a {
                color: $dark-blue;
                text-decoration: none;
                padding-bottom: 0.5rem;
                &:hover {
                  color: $blue;
                }
            }
        }
    }
}
.expand {
    width: 100% !important;
    background: $white;
}
.opened{
  width: 100%;
  align-items: flex-start;
  height: 100%;
}
ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
}
.nav-trigger{
  display: block;
  height: 40px;
  width: 40px;
  cursor: pointer;
  .nav-icon{
    position: relative;
    &::before{
      content: '';
      width: 2rem;
      top:8px;
      left: 0px;
      background: $dark-blue;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      transition: 0.15s ease-out;
    }
    &::after{
      content: '';
      width: 2rem;
      top:24px;
      left: 0px;
      background: $dark-blue;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      transition: 0.15s ease-out;
    }
  }
  .opened{
    &::before{
      transform: rotate(45deg) translateY(12px);
      transform-origin: center center;
    }
    &::after{
      transform: rotate(-45deg) translateY(-12px);
      transform-origin: center center;
    }
  }
}
.nav-full{
  position: absolute;
  display: none;
  top:30%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  ul{
    display: block;
    text-align: center;
    li{
      height: 8rem;
      font-size: 2rem;
      a{
        color:$dark-blue;
        text-decoration: none;
        transition: 0.2s ease;
        &:focus{
          color:rgba(255,255,255,0.6);
        }
      }
    }
  }
}
.visible{
  display: block;
}
.navOpen{
  width: 100%;
}
@media(max-width:768px){
  .navOpen{
    width: 100%;
  }
  .nav-full{
    width: 100%;
  }
}
</style>
