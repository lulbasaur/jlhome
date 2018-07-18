<template>
  <div class="home-container">
    <PageHeader msg="JLH"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Home',
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss">
.home-container {
  padding-right: 10%;
  padding-left: 10%;
}
h2 {
  padding: 5%;
}
</style>
