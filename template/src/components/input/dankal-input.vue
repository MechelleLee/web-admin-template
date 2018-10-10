<template>
  <section class="dankal-input">
    <label for="">
      <input
        type="text"
        :pattern="pattern"
        :placeholder="placeholder">
    </label>
  </section>
</template>

<script>
export default {
  props: {
    // 用于v-model传值
    value: {
      type: String,
      default: '',
    },

    // 匹配输入值是否符合要求
    pattern: {
      type: RegExp,
      default: () => new RegExp(/[^]/, 'ig'),
    },

    // 监听输入值变化模式
    model: {
      type: String,
      default: '',
      // 用于校验必传配置
      validator: value => !!value,
    },

    placeholder: {
      type: String,
      default: '',
    },
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
