<template lang="pug">
  #nav.nav
    router-link.nav-link( to="/" ) Home
    router-link.nav-link( to="/about" ) About
    router-link.nav-link( to="/work" ) Work
    router-link.nav-link( to="/contacts" ) Contacts
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss">
  @import './Navigation';
</style>
