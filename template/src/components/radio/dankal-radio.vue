<template>
  <section class="dankal-radio">
    <label type="checkbox">
      <input
        type="radio"
        v-model="status"
      >
      <slot />
    </label>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
.image-radio {
  input {
    display: none;
  }
}
</style>
