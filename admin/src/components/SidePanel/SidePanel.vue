<template lang="pug">
  #sidepanel.sidepanel
    nav#nav
      .nav-item
        router-link.nav-link(to="/") Home
</template>

<script>
export default {
  name: 'side-panel'
}
</script>

<style lang="scss">
  @import './SidePanel.scss';
</style>
