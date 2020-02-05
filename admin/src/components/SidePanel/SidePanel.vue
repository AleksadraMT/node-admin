<template lang="pug">
  #sidepanel.sidepanel
    nav#nav
      .nav-item
        router-link(to="/") Home
</template>

<script>
export default {
  name: 'side-panel'
}
</script>

<style lang="scss">
  @import './SidePanel.scss';
</style>
