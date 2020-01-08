<template>
  <md-content>
    <md-button
      v-for="flag in flags"
      v-bind:key="`guessbutton-${flag.code}`"
      @click="onClick(flag.code)"
      :disabled="justGuessed"
      v-bind:class="{
        'correct': justGuessed && correctFlag.code === flag.code,
        'wrong': justGuessed && currentGuess === flag.code && correctFlag.code !== flag.code,
      }"
    >
      {{flag.name}}
    </md-button>
  </md-content>
</template>

<script>
export default {
  // Component name
  name: 'GuessingButtons',

  // Imported components
  props: {
    flags: Array,
    justGuessed: Boolean,
    currentGuess: String,
    correctFlag: Object,
  },

  // Methods
  methods: {
    onClick(code) {
      this.$emit('guess', code);
    }
  },
};
</script>

<style lang="scss" scoped>
  .md-button{
    display: block;
    width: 100%;
    height: 50px;
    margin: 0;
    margin-bottom: 10px;
    border: 2px solid #cecece;
    border-radius: 20px;
  }
  .correct{
    background-color: #239e23 !important;
    color: white !important;
  }
  .wrong{
    background-color: #c21a1a !important;
    color: white !important;
  }
</style>
