<template>
  <div id="app">
    <head><link href="https://fonts.googleapis.com/css?family=Cantarell" rel="stylesheet"></head>
    <sidebar></sidebar>
    <div class="nav">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
html, #app {
  font-family: 'Cantarell','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #352f2f;
  background-color:whitesmoke;
  height: 100%;
}
.nav {
  margin-left: 200px;
}
</style>
