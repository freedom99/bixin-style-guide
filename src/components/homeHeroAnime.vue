<template lang="html">
<div class="wrapper">
  <svg id="curveOne" width="1600px" height="580px" viewBox="-2929 12919 1622 620" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <linearGradient x1="88.5579586%" y1="23.007004%" x2="27.7528496%" y2="76.2641631%" id="linearGradient-1">
              <stop stop-color="#D10000" offset="0%"></stop>
              <stop stop-color="#FF1E1E" offset="100%"></stop>
          </linearGradient>
      </defs>
      <path d="M-2762.41869,13301 C-1910.58015,12823.9178 -1857.114,12827.4432 -1367.41869,13131.5635 C-1120.94156,13284.6357 -1691.79286,13447.4051 -2211.02704,13510.4971 C-2723.39582,13572.7548 -3185.50343,13537.9536 -2762.41869,13301 Z" id="Path-8-Copy" stroke="#FF1F28" stroke-width="2" fill="url(#linearGradient-1)" fill-rule="evenodd" opacity="0.8"></path>
  </svg>

  <svg id="curveTwo" width="1400px" height="640px" viewBox="-2769 12901 1453 612" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <linearGradient x1="88.5579586%" y1="23.007004%" x2="27.7528496%" y2="76.2641631%" id="linearGradient-1">
              <stop stop-color="#D10000" offset="0%"></stop>
              <stop stop-color="#FF1E1E" offset="100%"></stop>
          </linearGradient>
      </defs>
      <path d="M-2708.60124,13039.1745 C-2377.97566,12855.5071 -1857.114,12827.4432 -1367.41869,13131.5635 C-1120.94156,13284.6357 -1832.2402,13529.5186 -2211.02704,13510.4971 C-2589.81388,13491.4755 -2902.23436,13146.7406 -2708.60124,13039.1745 Z" id="curve2-1" stroke="#FF1F28" stroke-width="2" fill="url(#linearGradient-1)" fill-rule="evenodd" opacity="0.6"></path>
  </svg>


  <svg id="curveThree" width="1400px" height="550px" viewBox="-2555 13006 1130 406" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
      <desc>Created with Sketch.</desc>
      <defs>
          <linearGradient x1="88.5579586%" y1="23.007004%" x2="27.7528496%" y2="76.2641631%" id="linearGradient-1">
              <stop stop-color="#D10000" offset="0%"></stop>
              <stop stop-color="#FF1E1E" offset="100%"></stop>
          </linearGradient>
      </defs>
      <path d="M-2553.43094,13117.3583 C-2516.67001,12896.7111 -1638.87226,13062.5195 -1535.94645,13128.5694 C-1369.41838,13235.4343 -1363.91379,13396.125 -1720.34687,13410.5828 C-2076.77995,13425.0406 -2571.50066,13225.8166 -2553.43094,13117.3583 Z" id="curve3-1" stroke="#FF1F28" stroke-width="2" fill="url(#linearGradient-1)" fill-rule="evenodd" opacity="0.4"></path>
  </svg>


</div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'homeHeroAnime',
  data() {
    return {};
  },
  mounted: function startCurve() {
    this.curveOne();
    this.curveTwo();
    this.curveThree();
  },
  methods: {
    curveOne: function curveOne() {
      anime({
        targets: '#curveOne path',
        d: 'M-2718.64561,13152.4628 C-2271.90451,12945.3053 -1367.41869,12778.4419 -1367.41869,13131.5635 C-1367.41869,13224.1746 -1691.79286,13447.4051 -2211.02704,13510.4971 C-2723.39582,13572.7548 -3196.83013,13374.2009 -2718.64561,13152.4628 Z',
        duration: 8000,
        easing: 'easeOutExpo',
        loop: true,
        direction: 'alternate',
      });
    },
    curveTwo: function curveTwo() {
      anime({
        targets: '#curveTwo path',
        d: 'M-2553.43094,13117.3583 C-2222.80537,12933.6909 -1205.39538,12808.9454 -1367.41869,13131.5635 C-1493.19663,13382.0105 -1827.8825,13477.038 -2070.64172,13460.5612 C-2313.40095,13444.0844 -2747.06407,13224.9243 -2553.43094,13117.3583 Z',
        duration: 9000,
        easing: 'easeOutExpo',
        loop: true,
        direction: 'alternate',
      });
    },
    curveThree: function curveThree() {
      anime({
        targets: '#curveThree path',
        d: 'M-2499,13192.9142 C-2452.58142,13038.5556 -2025.70533,12995.0768 -1904.14869,13054.7078 C-1720.34687,13144.8737 -1363.91379,13396.125 -1720.34687,13410.5828 C-2076.77995,13425.0406 -2531.43857,13300.7842 -2499,13192.9142 Z',
        duration: 10000,
        easing: 'easeOutExpo',
        loop: true,
        direction: 'alternate',
      });
    },
  },
};
</script>

<style lang="scss" scoped>@import "../stylesheets/primary";
svg {
    position: absolute;
    z-index: 0;
}
</style>
