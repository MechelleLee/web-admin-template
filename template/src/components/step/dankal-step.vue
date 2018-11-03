<template>
  <section class="dankal-step">
    <div
      class="step-block"
      v-for="(item, index) in source"
      :key="index"
      :item="item"
      :style="style"
    >
      <div
        class="step-above"
        ref="above"
      >
        <slot
          name="above"
          :step="item"
        />
      </div>
      <div class="step-cores">
        <div class="step-cores-icon">
          <slot
            name="cores"
            :step="item"
          />
        </div>
        <div class="step-cores-line">
          <slot
            name="line"
            :step="item"
          />
        </div>
      </div>
      <div class="step-below">
        <slot
          name="below"
          :step="item"
        />
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
      required: true,
    },
    step: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    source(n) {
      if (!n) return;
      this.length = n.length - 1;
    },
  },

  computed: {
    style() {
      const { source } = this;

      return {
        'flex-basis': `${100 / source.length}%`,
      };
    },
  },

  mounted() {
    const { above } = this.$refs;

    const height = above.sort((i, j) => j.clientHeight - i.clientHeight)[0]
      .clientHeight;

    // eslint-disable-next-line
    above.forEach(element => {
      // eslint-disable-next-line
      element.style.height = `${height}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
.dankal-step {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .step-block {
    position: relative;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    // .step-above {
    //   position: absolute;
    //   transform: translate(-50%, 0%);
    // }

    .step-cores {
      margin: 10px 0px;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .step-cores-line {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(0%, -50%);

        height: 2px;
        background-color: #d7e4ed;
      }

      .step-cores-icon {
        z-index: 1;
      }
    }

    .step-below {
      min-width: 100%;
    }
  }

  .step-block:nth-last-of-type(1) {
    flex-basis: auto;

    .step-cores {
      .step-cores-line {
        display: none;
      }
    }
  }
}
</style>
