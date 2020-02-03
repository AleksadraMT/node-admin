<template lang="pug">
  #app.app
    .app-right-side
      Logo
      SidePanel
    .app-left-side
      router-view
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/Logo/Logo.vue'),
    SidePanel: () => import('@/components/SidePanel/SidePanel.vue')
  }
}
</script>

<style lang="scss">
  @import '../node_modules/normalize-scss/sass/_normalize.scss';
  @import './App.scss';
</style>
