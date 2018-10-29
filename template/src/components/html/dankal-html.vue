<template>
  <section
    class="dankal-html"
    v-html="html"
    :style="{ width: width }"
  />
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    html: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '1024px',
    },
  },
};
</script>

<style lang="scss" scope>
.dankal-html {
  overflow: hidden;
  margin: 0 auto;
}

.image {
  text-align: center;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  img {
    max-width: 100%;
  }

  figcaption {
    color: #333;
    background-color: #f7f7f7;
    padding: 0.6em;
    font-size: 0.75em;
    outline-offset: -1px;
    clear: both;
  }
}

.image-style-align-left,
.image-style-align-right {
  max-width: 50%;
}

.image-style-align-left {
  float: left;
  margin-right: 1.5em;
}

.image-style-align-right {
  float: right;
  margin-left: 1.5em;
}
</style>
