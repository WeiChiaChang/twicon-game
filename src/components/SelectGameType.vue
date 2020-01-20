<template>
  <div>
    <md-button
      @click.native="restart()"
      to="/game"
      class="wording md-raised md-accent"
    >挑戰模式</md-button>
    <md-button
      @click.native="restart()"
      to="/practice"
      class="wording md-raised md-accent"
    >新手練習</md-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // Component name
  name: 'SelectGameType',
  methods: {
    ...mapActions(['guessFlag', 'setGameMode', 'getRandomFlag', 'getRandomOptions', 'setScoreInitial']),
    restart () {
      this.setScoreInitial();
      // Set the game mode
      this.setGameMode('challenge');
      // Get a random flag
      this.getRandomFlag();
      // Get options
      this.getRandomOptions();
    }
  }
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
  color: white !important;
  font-weight: bolder;
  cursor: pointer;
  padding: 0 16px;
  height: 56px;
}
</style>
