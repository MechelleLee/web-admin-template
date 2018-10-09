<template>
  <section class="dankal-checkbox">
    <label role="checkbox">
      <input
        type="checkbox"
        :value="value || label"
        v-model="model"
        @change="handleChange"
      >
      <slot
        :data="value || label"
        :checked="checked"
      />
    </label>
  </section>
</template>

<script>
import Emitter from '../../minxins/emitter';

export default {
  mixins: [Emitter],

  data() {
    return {
      name: 'dankal-checkbox',
      checked: false,
    }
  },

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    model: {
      get() {
        return this.store;
      },

      set(val) {
        this.dispatch('DankalCheckboxGroup', 'input', [val]);
      },
    },

    store() {
      return this.$parent.value;
    },
  },

  mounted() {
  },

  methods: {
    handleChange(event) {
      this.checked = event.target.checked;
    },
  },
}
</script>

<style lang="scss" scoped>
.dankal-checkbox {
  display: inline-block;

  input {
    display: none;
  }
}
</style>
