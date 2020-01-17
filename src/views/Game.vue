<template>
  <div>
    <transition mode="out-in">
      <succeeded :test="test" v-if="score.success === numberOfQuestions" />
      <failed :test="test" v-else-if="score.failed > 0" />
    </transition>
    <template v-if="score.success !== numberOfQuestions && score.failed === 0">
      <score class="score-container" />
      <flag
        class="flag-container"
        :code="currentFlag"
      />
      <guessing-buttons
        class="buttons-container"
        :flags="currentOptions"
        :correct-flag="currentFlag"
        :current-guess="currentGuess"
        :just-guessed="justGuessed"
        v-on:guess="guessFlag"
        @click.native="failedIcon(currentFlag)"
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Flag from '@/components/Flag.vue';
import GuessingButtons from '@/components/GuessingButtons.vue';
import Score from '@/components/Score.vue'
import Failed from '@/components/Failed.vue';
import Succeeded from '@/components/Succeeded.vue';

export default {
  // Component name
  name: 'GameInfinite',

  data () {
    return {
      test: {}
    }
  },

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
    Failed,
    Succeeded,
  },

  // Methods
  methods: {
    ...mapActions(['guessFlag', 'setGameMode', 'getRandomFlag', 'getRandomOptions']),
    failedIcon (icon) {
      this.test = icon
    }
  },

  // Computed
  computed: {
    ...mapState({
      currentFlag: ({ currentFlag }) => currentFlag,
      currentOptions: ({ currentOptions }) => currentOptions,
      justGuessed: ({ justGuessed }) => justGuessed,
      currentGuess: ({ currentGuess }) => currentGuess,
      score: ({ score }) => score,
      numberOfQuestions: ({ numberOfQuestions }) => numberOfQuestions,
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
