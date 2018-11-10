<template>
  <section
    class="dankal-scroll-card"
    :style="parent"
  >
    <div
      class="scroll-card-view"
      :style="childs"
    >
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
      require: true,
    },
    overflow: {
      type: Number,
      default: 20,
    },
  },

  computed: {
    parent() {
      const { width } = this;
      return Object.assign({}, { width: `${width}px` });
    },
    childs() {
      const width = this.width + this.overflow;
      const { height } = this;

      return Object.assign(
        {},
        { width: `${width}px`, 'max-height': `${height}px` },
      );
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.dankal-scroll-card {
  overflow-x: hidden;

  .scroll-card-view {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
