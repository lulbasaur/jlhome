<template>
  <div class="viewheaderbox">
    <h1>{{ msg }}</h1>
      <p>
        JERN LUKAS <br> HAMBERG
      </p>
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
  margin-left: 15%;
  margin-right: 15%;
  height: 20%;
}
</style>
