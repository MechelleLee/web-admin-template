<template>
  <section class="dankal-radio">
    <label
      type="checkbox"
      @click="handlerEmitValue"
    >
      <slot
        :checked="checked"
        :label="label"
      />
    </label>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: [String, Number],
      required: true,
    },
  },

  computed: {
    checked() {
      const { value, label } = this;
      return value === label;
    },
  },

  methods: {
    handlerEmitValue() {
      this.$emit('input', this.label);
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-radio {
  display: inline-block;

  input {
    display: none;
  }
}
</style>
