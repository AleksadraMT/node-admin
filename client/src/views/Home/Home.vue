<template lang="pug">
  #home.home.home-bg-pic( :style="{'background-image': 'url(' + image + ')'}")
    .home-wrapper
</template>

<script>
export default {
  name: 'home',
  computed: {
    image() {
      // eslint-disable-next-line global-require
      return require('./../../assets/home-bg.jpg');
    },
  },
};
</script>

<style lang="scss">
  @import './Home';
</style>
