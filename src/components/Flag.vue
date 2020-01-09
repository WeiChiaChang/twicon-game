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


// Basic Mobile Setting
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .content_wrapper {
    i {
      font-size: 9rem;
    }
  }
}
// For mobile (landscape)
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .content_wrapper {
    i {
      font-size: 9rem;
    }
  }
}
</style>
