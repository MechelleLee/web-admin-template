<template>
  <section class="dankal-upload">
    <slot
      name="images"
      :files="list"
    />
    <label rule="file">
      <input
        type="file"
        ref="file"
        :accept="AcceptProxy"
        :multiple="multiple"
        @change="onInputChange"
      >
      <slot />
    </label>
  </section>
</template>

<script>
import ImageCompressor from 'image-compressor.js';

export default {
  data() {
    return {
      list: [],
    }
  },

  props: {
    value: {
      type: [Array, String],
      default: () => [],
    },

    accept: {
      type: [Array, String],
      require: true,
      default: () => [],
    },

    limit: {
      type: Number,
      default: 0,
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    // 限制图片的上传大小
    size: {
      type: [Number],
      default: 0,
    },

    // 是否使用压缩
    compress: {
      type: Boolean,
      default: false,
    },

    // 压缩启动的阀值
    threshold: {
      type: Number,
      default: 500,
    },

    // 用于上传的异步函数，需传入Promise 的封装模式
    upload: {
      type: Function,
      default: () => () => {},
      require: true,
    },

    // 用于处理上传完成的回调函数
    handle: {
      type: Function,
      default: () => () => {},
      require: true,
    },
  },

  watch: {
    list(n) {
      this.$emit('input', n);
    },
  },

  computed: {
    AcceptProxy() {
      if (this.accept instanceof Array) return this.accept.join(',');
      return this.accept;
    },
  },

  mounted() {
    if (this.value instanceof Array) {
      this.list = [].concat(this.value);
      return;
    }

    this.list = [].push(this.value);
  },

  methods: {
    async onInputChange(event) {
      const { files } = event.target;

      if (this.handlerFileListVaild(files)) {
        const temps = this.compress ? await this.handlerFileCompress(files) : files;
        this.handlerFileUpload(temps);
      }
    },

    handlerFileClear() {
      this.$refs.file = [];
    },

    handlerFileListVaild(files) {
      try {
        if (this.limit && (this.list.length + files.length) > this.limit) {
          throw Object.assign(new Error(), { type: 'limit', message: 'the length of file is not include !' });
        }

        for (let i = 0; i < files.length; i += 1) {
          const { size, type } = files[i];

          if (!this.accept.includes(type)) {
            throw Object.assign(new Error(), { type: 'accept', message: 'the type of file is not include !' });
          }

          if ((this.size && size) && size > this.size) {
            throw Object.assign(new Error(), { type: size, message: 'the size of file is more than szie !' });
          }
        }
        return true;
      } catch (e) {
        this.$emit('error', e);
        return false;
      }
    },

    async handlerFileCompress(files) {
      const compressor = new ImageCompressor();

      const queue = [];

      for (let i = 0; i < files.length; i += 1) {
        if (this.compress && files[i].size > this.threshold * 1024) {
          const quality = (this.threshold * 1024) / files[i].size;
          // 将图片压缩至阀值之下
          queue.push(compressor.compress(files[i], {
            quality,
          }));
        } else {
          queue.push(files[i]);
        }
      }

      const temps = await Promise.all(queue);

      return temps;
    },

    handlerFileUpload(files) {
      // 推送上传开始信号
      this.$emit('start', {});

      const queue = [];

      for (let i = 0; i < files.length; i += 1) {
        queue.push(this.upload(files[i]));
      }

      Promise.all(queue).then((res) => {
        const list = res.map(item => this.handle(item));
        this.list = [].concat(this.list, list);
      }).catch((error) => {
        this.$emit('error', Object.assign(error, {
          type: 'upload',
          message: 'the file is not upload',
        }));
      }).finally(() => {
        // 推送上传结束信号
        this.$emit('end', {});
      });
    },
  },
}
</script>

<style lang="scss" scope>
.dankal-upload {
  input {
    display: none;
  }
}
</style>
