<template>
  <div class="container">
    <img src="https://upload.cc/i1/2020/01/09/dJejGS.png" alt="TW Icon Game" />
    <h1 class="md-display-6">The 100 icons of Taiwan</h1>
    <select-game-type />
  </div>
</template>

<script>
import SelectGameType from '@/components/SelectGameType.vue';

export default {
  name: 'App',
  components: {
    SelectGameType,
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  background: #d9f2e7;
}
img {
  display: inline-block;
  max-width: 72%;
}
</style>
