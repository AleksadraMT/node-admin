<template lang="pug">
  #app.app
    Navigation
    router-view
</template>

<script>
export default {
  name: 'App',
  components: {
    Navigation: () => import('./components/Navigation/Navigation'),
  },
};
</script>

<style lang="scss">
  @import '../node_modules/normalize-scss/sass/_normalize.scss';
  @import './App.scss';
</style>
