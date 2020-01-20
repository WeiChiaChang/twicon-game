<template>
  <md-table>
    <md-table-row>
      <md-table-head style="min-width: 120px;" md-numeric>
        <router-link to="/">
          <span class="back_emoji">🔙</span>
        </router-link>
      </md-table-head>
    </md-table-row>
  </md-table>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'ScoreRatio',

  // Computed methods & state
  computed: {
    ratio() {
      if( this.score.total > 0 ){
        return (100 * this.score.success / this.score.total).toFixed(1);
      }
      return '0.0';
    },
    ...mapState({
      score: ({ score }) => score,
    }),
  },
};
</script>

<style lang="scss">
.md-table-head-container {
  text-align: center;
  height: auto;
  padding: 0;
}
.md-table-head-label {
  height: 32px !important;
  line-height: 32px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.md-table-head {
  font-size: 1.5rem;
  font-family: monospace;
}
.md-table-content {
  background: transparent !important;
}
.md-table-head-container {
  text-align: center;
  height: auto;
  padding: 0;
}
.md-table-head-label {
  height: 35px !important;
  line-height: 35px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

a {
  text-decoration: none !important;
}

.back_emoji {
  font-size: 2rem;
}
</style>
