<template lang="html">
  <div class="cardbox">
  <vs-card vs-color="primary">
    <vs-card-media vs-media="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-header
        vs-background-color="primary"
        vs-title="A nice title"
        vs-subtitle="A nice subtitle"
        vs-icon="check">
    </vs-card-header>
    <vs-card-body>
      <span>{{ msg }}</span>
    </vs-card-body>
  </vs-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.cardbox {
  height: 20%;
}
</style>
