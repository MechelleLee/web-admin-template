<template>
  <section class="dankal-map-position-picker" />
</template>

<script>
export default {
  data() {
    return {
      picker: null,
    };
  },

  props: {
    mode: {
      type: String,
      default: 'dragMarker',
    },
  },

  computed: {
    map() {
      if (this.$parent.map) {
        return this.$parent.map;
      }

      return null;
    },
  },

  mounted() {},

  methods: {
    onComponentInitial() {
      const { map, mode } = this;
      if (map) {
        // eslint-disable-next-line
        window.AMapUI.loadUI(['misc/PositionPicker'], PositionPickerPlugin => {
          const picker = new PositionPickerPlugin({
            mode,
            map,
          });

          this.picker = picker;

          picker.on('success', result => this.handlerSuccess(result));
          picker.on('fail', result => this.handlerFail(result));

          picker.start();
          // map.panBy(0, 1);
        });
      }
    },

    onPickerStart() {
      this.picker.start();
    },

    onPickerStop() {
      this.picker.stop();
    },

    handlerSuccess(result) {
      this.$emit('success', result);
    },

    handlerFail(result) {
      this.$emit('fail', result);
    },
  },
};
</script>

<style lang="scss" scope>
</style>
