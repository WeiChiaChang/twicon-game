<template>
  <div class="content_wrapper">
    <i :class="code"></i>
  </div>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'Flag',

  // Imported components
  props: {
    code: String,
  },

  // Methods
  methods: {
  },

  // Computed methods & state
  computed: {
    ...mapState({
      flags: ({ flags }) => flags,
    }),
  },
};
</script>

<style lang="scss" scoped>
.content_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 12rem;
  }
}
</style>
