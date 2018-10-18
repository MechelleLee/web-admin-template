<template>
  <section class="dankal-checkbox">
    <label role="checkbox">
      <input
        type="checkbox"
        :value="value || label"
        :disabled="disable"
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
import Emitter from '../../mixins/emitter';

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
        if (!this.limit || !this.disable) {
          this.dispatch('DankalCheckboxGroup', 'input', [val]);
        }
      },
    },

    store() {
      return this.$parent.value;
    },

    limit() {
      return this.$parent.limit;
    },

    disable() {
      if (this.checked) return false;
      return !(this.store.length < this.limit);
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
