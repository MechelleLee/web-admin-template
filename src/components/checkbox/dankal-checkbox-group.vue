<template>
  <section class="dankal-checkbox-group">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'DankalCheckboxGroup',

  componentName: 'DankalCheckboxGroup',

  props: {
    // eslint-disable-next-line
    value: {
      type: [Array],
      default: () => [],
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
}
</script>
