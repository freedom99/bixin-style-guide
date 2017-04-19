// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './views/home';
import articles from './views/articles';
import oso from './views/oso';
import designGuide from './views/designGuide';
import career from './views/career';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
/* eslint-disable no-new */

// 配置路由
const routes = [
  { path: '/articles', component: articles },
  { path: '/oso', component: oso },
  { path: '/designGuide', component: designGuide },
  { path: '/career', component: career },
  { path: '/home', component: home },
  { path: '*', redirect: '/home' },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  template: '<App/>',
  components: { App },
});

// mount app
app.$mount('#app');
