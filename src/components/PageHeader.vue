<template>
  <div class="viewheaderbox">
    <div class="textfield">
      <h1>{{ msg }}</h1>
      <p>
        JERN LUKAS HAMBERG
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.viewheaderbox {
  color: whitesmoke;
  background-color: rgb(78, 74, 74);
  height: 20%;
}
.textfield {
  padding: 5%;
}
</style>
