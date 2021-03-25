<template>
  <section class="container" />
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    toolbar: {
      type: Array,
      default: () => ['ToolBar', 'Scale', 'MapType', 'Geolocation'],
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

  methods: {
    onComponentInitial() {
      const { map, toolbar } = this;

      if (map) {
        if (!toolbar || !toolbar.length) {
          throw Object.assign(new Error(), {
            type: 'map',
            message:
              'please check your config about the component of dankal-map-control',
          });
        }

        const temp = toolbar.map(item => `AMap.${item}`);

        window.AMap.plugin(temp, () => {
          for (let i = 0; i < temp.length; i += 1) {
            map.addControl(new window.AMap[toolbar[i]]());
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scope>
</style>
