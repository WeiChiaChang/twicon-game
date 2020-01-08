// All of our mutation constants, in one tidy spot
//
// This allows us to easliy read all the possible mutations
// from the root of the store and any modules we define. It also
// acts as a repository of mutations that our store's actions
// can use to compose in differnt ways.


export const SET_GAME_MODE = 'SET_GAME_MODE';
export const GET_RANDOM_FLAG = 'GET_RANDOM_FLAG';
export const GET_GUESSING_OPTIONS = 'GET_GUESSING_OPTIONS';
export const GUESS_FLAG = 'GUESS_FLAG';
