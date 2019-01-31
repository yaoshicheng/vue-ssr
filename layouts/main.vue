<template>
  <div>
      <admin-header></admin-header>
      <Nuxt />
      <admin-advisory></admin-advisory>
      <admin-footer></admin-footer>
  </div>
</template>
<script>
  import AdminHeader from '../template/admin-header';
  import AdminAdvisory from '../template/admin-advisory';
  import AdminFooter from '../template/admin-footer';

  export default {
    components: {
      AdminHeader,
      AdminAdvisory,
      AdminFooter,
    },
  };
</script>
<style lang="scss">
  @import '../assets/css/main';
  @import '../assets/css/index';
</style>