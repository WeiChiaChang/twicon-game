<template>
  <div class="container">
    <img src="../assets/logos/logo.svg" alt="Flag Quiz">
    <h1 class="md-display-2">Icon Quiz</h1>
    <select-game-type></select-game-type>
  </div>
</template>

<script>
// Imported components
import SelectGameType from '@/components/SelectGameType.vue';

export default {
  // Component name
  name: 'App',

  // Imported components
  components: {
    SelectGameType,
  },
};
</script>

<style scoped>
  .container{
    text-align: center;
  }
  img{
    display: inline-block;
    max-width: 50%;
  }
</style>
