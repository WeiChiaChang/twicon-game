<template>
  <div>
    <p>
      <md-button to="/game" class="md-raised md-accent">GO！</md-button>
    </p>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'SelectGameType',
};
</script>

<style lang="scss" scoped>
  .md-button{
    display: block;
    width: 100%;
    height: 50px;
    margin: 0;
    img{
      display: inline-block;
      max-width: 30px;
    }
  }
</style>
