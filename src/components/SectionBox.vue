<template lang="html">
  <div class="sectionbox">
  <vs-card vs-color="primary">
    <vs-card-header
        vs-background-color="primary"
        :vs-title=title
        :vs-subtitle=subtitle>
    </vs-card-header>
    <vs-card-body>
      <span>{{ body }}</span>
    </vs-card-body>
  </vs-card>
  </div>
</template>

<script>
export default {
  name: 'SectionBox',
  props: {
    title: String,
    subtitle: String,
    body: String,
    mediaURL: String,
  },
};
</script>

<style lang="scss">
.cardbox {
  height: 20%;
}
</style>
