<template>
  <section class="tree">
    <slot />
  </section>
</template>

<script>
export default {
  components: {
    NodeRender: {
      props: {
        text: {
          type: Object,
          default: () => {},
        },
      },
      render() {
        const { text } = this.props;
        return (<span>{{ text }}</span>)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
