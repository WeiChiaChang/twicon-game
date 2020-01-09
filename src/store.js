import Vue from 'vue';
import Vuex from 'vuex';
import { find, shuffle } from 'lodash';
import flags from './constants/flags';

// Mutation constants
import {
  GUESS_FLAG,
  SET_GAME_MODE,
  GET_RANDOM_FLAG,
  GET_GUESSING_OPTIONS,
  RESET_STATE_DATA
} from './mutation-constants';

Vue.use(Vuex);

function initialState () {
  return {
    flags: [...flags],
    numberOfQuestions: flags.length,
    score: {
      total: 0,
      failed: 0,
      success: 0,
    },
    currentFlagIndex: -1,
    currentFlag: {},
    currentGameMode: '',
    currentOptions: [],
    justGuessed: false,
    currentGuess: '',
  }
}

export default new Vuex.Store({

  // Root state
  state: initialState,

  // Actions
  actions: {
    setScoreInitial({ commit }) {
      commit(RESET_STATE_DATA);
    },
    // Set the game mode
    setGameMode({ commit }, mode) {
      commit(SET_GAME_MODE, mode);
    },
    // Get a random flag
    getRandomFlag({ commit }) {
      commit(GET_RANDOM_FLAG);
    },
    // Get options
    getRandomOptions({ commit }) {
      commit(GET_GUESSING_OPTIONS);
    },
    // Guess a flag & get new one!
    guessFlag({ commit }, code) {
      commit(GUESS_FLAG, code);
      setTimeout(() => {
        commit(GET_RANDOM_FLAG);
        commit(GET_GUESSING_OPTIONS);
      }, 1000)
    },
  },

  // Mutations
  mutations: {
    [RESET_STATE_DATA](state) {
      const s = initialState()

      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    },
    [GET_RANDOM_FLAG](state) {
      const randomFlagIndex = Math.floor(Math.random() * (state.flags.length - 1));
      state.currentFlagIndex = randomFlagIndex
      state.currentFlag = state.flags[randomFlagIndex];
      state.currentGuess = '';
      state.justGuessed = false;
    },
    [GET_GUESSING_OPTIONS](state) {
      const numberOfOptions = 4;
      state.currentOptions = [];

      state.currentOptions.push(state.currentFlag);
      while (state.currentOptions.length < numberOfOptions) {
        const randomFlagIndex = Math.floor(Math.random() * (flags.length - 1));
        const randomFlag = flags[randomFlagIndex];
        if( !find(state.currentOptions, {code: randomFlag.code}) ) {
          state.currentOptions.push(randomFlag);
        }
      }
      state.currentOptions = shuffle(state.currentOptions);
    },
    [GUESS_FLAG](state, code) {
      // Increase total
      state.score.total += 1;
      // Did we guess?
      if (state.currentFlag.code === code ) {
        state.score.success += 1;
      } else {
        state.score.failed += 1;
      }
      // Set flags
      state.currentGuess = code;
      state.justGuessed = true;
      
      // Remove flag
      state.flags.splice(state.currentFlagIndex, 1)
    },
    [SET_GAME_MODE](state, mode) {
      // Increase total
      state.currentGameMode = mode;
    },
  },
});
