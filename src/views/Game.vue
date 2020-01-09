<template>
  <div>
    <!-- <score class="score-container" /> -->
    <transition mode="out-in">
      <failed v-if="score.failed > 0" />
    </transition>
    <flag class="flag-container" :code="currentFlag.code" v-if="score.failed === 0" />
    <guessing-buttons
      v-if="score.failed === 0"
      class="buttons-container"
      :flags="currentOptions"
      :correct-flag="currentFlag"
      :current-guess="currentGuess"
      :just-guessed="justGuessed"
      v-on:guess="guessFlag"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Flag from '@/components/Flag.vue';
import GuessingButtons from '@/components/GuessingButtons.vue';
import Failed from '@/components/Failed.vue';

export default {
  // Component name
  name: 'GameInfinite',

  mounted() {
    // Set the game mode
    this.setGameMode('infinite');
    // Get a random flag
    this.getRandomFlag();
    // Get options
    this.getRandomOptions();
  },

  // Imported components
  components: {
    Flag,
    GuessingButtons,
    Failed,
  },

  // Methods
  methods: {
    ...mapActions(['guessFlag', 'setGameMode', 'getRandomFlag', 'getRandomOptions']),
  },

  // Computed
  computed: {
    ...mapState({
      currentFlag: ({ currentFlag }) => currentFlag,
      currentOptions: ({ currentOptions }) => currentOptions,
      justGuessed: ({ justGuessed }) => justGuessed,
      currentGuess: ({ currentGuess }) => currentGuess,
      score: ({ score }) => score,
    }),
  },
};

</script>

<style lang="scss" scoped>
.score-container,
.flag-container,
.buttons-container {
  margin-bottom: 30px;
}

.score-container {
  background: transparent !important;
}

.v-leave { opacity: 1; }
.v-leave-active { transition: opacity .5s }
.v-leave-to { opacity: 0; }
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity .5s }
.v-enter-to { opacity: 1; }
</style>
