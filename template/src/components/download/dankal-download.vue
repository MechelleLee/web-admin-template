<template>
  <section
    class="dankal-download"
    @click="onClickDownload"
  >
    <slot />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    name: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    download: {
      type: Function,
      default: () => () => {},
    },
  },

  methods: {
    async onClickDownload() {
      const { href } = this;
      // eslint-disable-next-line
      const { headers, data } = await this.download(href).catch(err => {
        this.$emit('error', err);
      });

      const { name, type } = this;

      this.handlerDownload(data, name, headers['content-type'] || type);
    },

    handlerDownload(blod, filename, type) {
      try {
        let stream = blod;

        if (blod instanceof ArrayBuffer) {
          stream = new Blob([blod], {
            type,
          });
        }

        const file = window.URL.createObjectURL(stream);
        const element = document.createElement('a');

        if ('download' in element) {
          document.body.appendChild(element);
          element.style.display = 'none';
          element.href = file;
          element.download = filename || '';
          element.click();
          window.URL.revokeObjectURL(file);
          document.body.removeChild(element);
        }
      } catch (error) {
        this.$emit('error', error);
      }
    },
  },
};
</script>

<style lang="scss" scope>
</style>
