<template>
  <div class="wrapper">
    <p class="score_wording">{{score.success}} / {{flags.length}}</p>
    <div class="slogan">
      <span v-if="0 <= score.success && score.success <= 10">{{slogan.low}}</span>
      <span v-if="10 < score.success && score.success <= 20">{{slogan.medium}}</span>
      <span v-if="20 < score.success">{{slogan.high}}</span>
    </div>
    <md-button to="/" class="restart_btn">Restart</md-button>
    <div class="failed_wrapper">
      <span>還有</span>
      <i :class="test.code"></i>
      <span>
        我是 <span class="keyword">{{test.name}} </span>啦
      </span>
    </div>
    <img src="../assets/kumamon.png" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Failed',
  props: {
    test: {
      type: Object,
      default () {
        return {}
      }
    }
  },
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
      currentFlag: ({ currentFlag }) => currentFlag,
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
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.score_wording {
  font-size: 2rem;
  font-weight: bolder;
  font-family: monospace;
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
  margin-bottom: 1rem;
}

.failed_wrapper {
  margin-bottom: 10rem;
}

img {
  position: absolute;
  bottom: -5px;
  width: 320px;
}

i {
  font-size: 4rem;
}

.keyword {
  font-weight: bolder;
  color: black;
  font-size: 1rem;
}
</style>
