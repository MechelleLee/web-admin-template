<template>
  <section
    class="dankal-back-top"
    :class="{hidden: hidden}"
    @click="backtop"
  >
    <slot name="icon" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      hidden: false,
    };
  },

  props: {
    element: {
      type: [HTMLHtmlElement, HTMLElement],
      default: () => document.documentElement || document.body,
    },
  },

  mounted() {
    window.addEventListener('scroll', this.scroll, true);
  },

  methods: {
    scroll() {
      const { element } = this;
      // eslint-disable-next-line
      const distance =
        // eslint-disable-next-line
        window.pageXOffset || element.scrollTop;

      // eslint-disable-next-line
      const height =
        document.documentElement.clientHeight || document.body.clientHeight;

      this.hidden = distance > height;
    },

    backtop() {
      const self = this;

      if (self.timer) {
        cancelAnimationFrame(self.timer);
      }

      self.timer = requestAnimationFrame(function fn() {
        const { element } = self;

        // eslint-disable-next-line
        const scrollTop = element.scrollTop;

        if (scrollTop > 0) {
          // eslint-disable-next-line
          element.scrollTop = scrollTop - 50;

          self.timer = requestAnimationFrame(fn);

          return;
        }

        cancelAnimationFrame(self.timer);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-back-top {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 100px;
  bottom: 175px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
  visibility: hidden;
}

.hidden {
  visibility: inherit;
}
</style>
