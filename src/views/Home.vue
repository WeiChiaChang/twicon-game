<template>
  <div class="container">
    <img src="https://www.twicon.page/imgs/about_version.png" alt="TW Icon Game">
    <h1 class="md-display-6">The 100 icons of Taiwan</h1>
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
    background: #D9F2E7;
  }
  img {
    display: inline-block;
    max-width: 72%;
  }
</style>
