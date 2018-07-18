<template>
  <div class="projects">
    <PageHeader msg="JLH"/>
    <p>Project List</p>
    <Card msg="this is a card"/>
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
.projects {
  margin-left: 200px;
}
</style>
