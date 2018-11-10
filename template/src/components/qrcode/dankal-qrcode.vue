<template>
  <section class="dankal-qrcode">
    <img :src="image">
  </section>
</template>

<script>
import Qrcode from 'qrcode';

export default {
  data() {
    return {
      image: '',
    };
  },

  props: {
    data: {
      type: String,
      default: '',
    },
    config: {
      type: Object,
      default: () => ({
        margin: 2,
        scale: 4,
        width: 240,
        color: {
          dark: '#000000ff',
          light: '#ffffffff',
        },
      }),
    },
  },

  mounted() {
    this.draw();
  },

  methods: {
    draw() {
      const { data, config } = this;
      // eslint-disable-next-line
      Qrcode.toString(this.data, (error, url) => {
        this.html = url;
      });

      Qrcode.toDataURL(data, config, (error, url) => {
        this.image = url;
      });
    },
  },

  watch: {
    data() {
      this.draw();
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-qrcode {
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }
}
</style>
