<template>
  <section
    class="dankal-card"
    :class="{hover: hover}"
  >
    <slot name="header" />
    <slot />
    <slot name="bottom" />
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    // 用于自定义 Card 的样式
    // style: {
    //   type: Object,
    //   default: () => {},
    // },
    // 用于控制 Shadow 的显示
    hover: {
      type: [Boolean],
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.dankal-card {
  padding: 15px 15px;
  overflow: hidden;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
}

.dankal-card.hover {
  border: 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
