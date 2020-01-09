<template>
  <div class="wrapper">
    <div class="slogan">
      <span v-if="0 <= score.success && score.success <= 10">{{slogan.low}}</span>
      <span v-if="10 < score.success && score.success <= 20">{{slogan.medium}}</span>
      <span v-if="20 < score.success">{{slogan.high}}</span>
    </div>
    <p class="score_wording">{{score.success}} / {{flags.length}}</p>
    <md-button to="/" class="restart_btn">Restart</md-button>
    <img src="../assets/kumamon.png" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Failed',
  data () {
    return {
      slogan: {
        low: '已經是 .... 極限了嗎？',
        medium: '兄 day 加油好嗎？',
        high: '當台灣人還是很不錯的對吧'
      }
    }
  },
  computed: {
    ...mapState({
      score: ({ score }) => score,
      flags: ({ flags }) => flags,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}
.slogan {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.score_wording {
  font-size: 2rem;
  font-weight: bolder;
}
.restart_btn {
  cursor: pointer;
  font-size: 1.2rem;
  background: #2ab6fb !important;
  border-radius: 5px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  padding: 16px 20px;
  text-align: center;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 4rem;
}

img {
  position: absolute;
  bottom: -5px;
  width: 360px;
}
</style>
