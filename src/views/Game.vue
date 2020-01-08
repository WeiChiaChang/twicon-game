<template>
  <div>
    <score class="score-container" />
    <flag class="flag-container" :code="currentFlag.code" />
    <guessing-buttons
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
import Score from '@/components/Score.vue';

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
    Score,
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
</style>
