<template>
  <md-app>
    <md-app-content>
      <router-view/>
    </md-app-content>
  </md-app>
</template>

<style lang="scss">
.md-app {
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #D9F2E7 !important;
}
.md-app-content{
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  border: 0 !important;
  background: #D9F2E7 !important;
}
</style>
