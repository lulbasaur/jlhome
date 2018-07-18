<template lang="html">
  <div id="parentx3" class="con-example-sidebar">
    <vs-sidebar
      style="width:200px"
      vs-static
      vs-parent="#parentx3"
      :vs-active.sync="active">
      <vs-avatar vs-size="180px" vs-src="https://github.com/lulbasaur/jlhome/blob/master/src/assets/prof-avatar.png?raw=true"/>
      <vs-sidebar-item
        @click="actives=1,active=!active,$router.push('/')"
        :vs-active="actives==1"
        vs-icon="home">
        Home
      </vs-sidebar-item>
      <vs-sidebar-item
        @click="actives=2,active=!active,$router.push('/projects')"
        :vs-active="actives==2"
        vs-icon="gavel">
        Projects
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>

export default {
  name: 'sidebar',
  data: () => ({
    active: false,
    actives: 1,
  }),
};
</script>

<style lang="scss">
.con-example-sidebar {
    height: 100%;
    position: absolute;
}
.con-example-sidebar .con-sidebar .vs-sidebar{
  background: rgb(226, 226, 226);
}
.con-example-sidebar .con-sidebar .vs-sidebar .vs-sidebar-item:hover a{
  background: rgb(226, 226, 226);
  color: white
}
.con-example-sidebar .con-sidebar .vs-sidebar .vs-sidebar-item a{
  background: rgb(226, 226, 226);
}
</style>
