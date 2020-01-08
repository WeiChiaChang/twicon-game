<template>
  <md-table>
    <md-table-row>
      <md-table-head md-numeric>Total</md-table-head>
      <md-table-head md-numeric>Right</md-table-head>
      <md-table-head md-numeric>Wrong</md-table-head>
      <md-table-head md-numeric>Ratio</md-table-head>
    </md-table-row>
    <md-table-row>
      <md-table-head md-numeric>{{score.total}}</md-table-head>
      <md-table-head md-numeric>{{score.success}}</md-table-head>
      <md-table-head md-numeric>{{score.failed}}</md-table-head>
      <md-table-head md-numeric>{{ratio}}%</md-table-head>
    </md-table-row>
  </md-table>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'Score',

  // Computed methods & state
  computed: {
    ratio() {
      if (this.score.total > 0) {
        return (100 * this.score.success / this.score.total).toFixed(2);
      }
      return '-';
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
  height: 20px !important;
  line-height: 20px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}
</style>
