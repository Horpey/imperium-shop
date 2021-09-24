<template>
  <div v-if="showBar" @click="scrollToTop" class="progress-wrap">
    <p>↑</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageOffset: 0,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    showBar() {
      window.onscroll = () => {
        this.pageOffset =
          document.documentElement.scrollTop || document.body.scrollTop;
      };
      if (this.pageOffset >= 300) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.progress-wrap {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  opacity: 1;
  // visibility: hidden;
  transform: translateY(15px);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  p {
    margin: 0;
    line-height: 3;
    color: black;
  }
}
</style>
