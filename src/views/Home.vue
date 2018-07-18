<template>
  <div class="home">
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
.home {
  margin-left: 200px;
}
</style>
