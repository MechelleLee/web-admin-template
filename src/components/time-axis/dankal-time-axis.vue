<template>
  <section class="dankal-time-axis">
    <div
      class="axis-block"
      v-for="(item, index) in source"
      :key="index"
    >
      <div
        class="axis-side"
        ref="side"
      >
        <slot
          name="side"
          :item="item"
        />
      </div>
      <div
        class="axis-main"
        ref="main"
      >
        <div class="line">
          <slot
            name="line"
            :item="item"
          />
        </div>
        <div class="icon">
          <slot
            name="icon"
            :item="item"
          />
        </div>
        <div class="main">
          <slot
            name="main"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      length: 0,
    };
  },

  props: {
    source: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    sources(n) {
      if (!n) return;
      this.length = n.length - 1;
    },
  },

  computed: {},

  mounted() {
    const { side } = this.$refs;
    // eslint-disable-next-line
    const width = side.sort((i, j) => j.clientWidth - i.clientWidth)[0]
      .clientWidth;
    // eslint-disable-next-line
    side.forEach(element => {
      // eslint-disable-next-line
      element.style.width = `${width}px`;
    });

    if (!this.sources) return;
    this.length = this.sources.length - 1;
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.dankal-time-axis {
  .axis-block {
    display: flex;
    z-index: 10;

    .axis-side {
      padding-right: 10px;
    }

    .axis-main {
      position: relative;
      flex: 1;
      padding-left: 10px;

      .icon {
        position: absolute !important;
        top: 0px;
        left: 0px;
        transform: translate(-50%, -50%);
      }

      .line {
        position: absolute !important;
        left: 0px;
        width: 6px;
        transform: translate(-50%);
        background-color: #d7e4ed;
        height: 100%;
      }

      .main {
        display: block;
      }
    }
  }

  .axis-block:nth-last-of-type(1) {
    .axis-main {
      .line {
        display: none;
      }
    }
  }
}
</style>
