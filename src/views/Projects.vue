<template>
  <div class="projects-container">
    <PageHeader msg="JLH"/>
    <h2>Projects</h2>
    <vs-divider vs-style="solid" vs-color="dark"></vs-divider>
    <Card msg="this is a card"/>
    <vs-divider vs-style="solid" vs-color="dark"></vs-divider>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Projects',
  components: {
    PageHeader,
    Card,
  },
};
</script>

<style lang="scss">
.projects-container {
  padding-right: 10%;
  padding-left: 10%;
}
h2 {
  padding: 5%;
}
</style>
