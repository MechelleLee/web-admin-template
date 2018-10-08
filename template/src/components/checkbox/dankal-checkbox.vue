<template>
  <section>
    <label
      for=""
      role="checkbox"
      v-for="(item, index) in [1, 2, 3, 4]"
      :key="index"
      :item="item">
      <input
        type="checkbox"
        :name="name"
        :value="item"
        v-model="model"
        @change="handleChange">
      <span>{{ item }}</span>
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
      value: [],
    }
  },

  props: {
  },

  computed: {
    model: {
      get() {
        return this.store;
      },

      set(val) {
        console.log('====================================');
        console.log(val);
        console.log('====================================');
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
    handleChange(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
