<template>
  <md-app>
    <md-app-content>
      <transition mode="out-in">
        <router-view />
      </transition>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },
};
</script>

<style lang="scss">
.md-app {
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #d9f2e7 !important;
}
.md-app-content {
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  border: 0 !important;
  background: #d9f2e7 !important;
}
.v-leave { opacity: 1; }
.v-leave-active { transition: opacity .5s }
.v-leave-to { opacity: 0; }
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity .5s }
.v-enter-to { opacity: 1; }
</style>
