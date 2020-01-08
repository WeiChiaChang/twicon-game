<template>
  <div>
    <md-button to="/game" class="wording md-raised md-accent">快來測驗看看吧！</md-button>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'SelectGameType',
};
</script>

<style lang="scss" scoped>
div {
  margin: 1.6rem;
}
.wording {
  font-size: 1.2rem;
  background: #2ab6fb !important;
  border-radius: 5px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  padding: 0 16px;
  height: 56px;
}
</style>
