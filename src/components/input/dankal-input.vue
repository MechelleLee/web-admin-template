<template>
  <section class="dankal-input">
    <label>
      <input
        type="text"
        :placeholder="placeholder"
        @change="handlerValidInput"
      >
      <slot />
    </label>
  </section>
</template>

<script>
import Validate from '@/jslib/validate';
import _ from '@/jslib/lodash';

export default {
  data() {
    return {};
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    number: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      required: true,
    },
    validate: {
      type: [RegExp, Function],
      default: () => new RegExp(/[^]/, 'gi'),
    },
    error: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  mounted() {},

  methods: {
    handlerValidInput: _.debounce(() => {
      const { proxy: value } = this;

      let status = false;

      switch (this.mode) {
        case 'mobile':
          status = Validate.isMobile(value);
          break;
        case 'email':
          status = Validate.isEmail(value);
          break;
        case 'number':
          status = Validate.isNumber(value);
          break;
        case 'href':
          status = Validate.isHref(value);
          break;
        case 'icard':
          status = Validate.isICard(value);
          break;
        case 'zipcode':
          status = Validate.isZipCode(value);
          break;
        default:
          if (this.validate instanceof RegExp) {
            status = this.validate.test(value);
            break;
          }
          status = this.validate(value);
      }

      // eslint-disable-next-line
      status ? this.$emit('input', value) : this.$emit('error');
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
