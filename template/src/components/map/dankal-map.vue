<template>
  <section class="amap">
    <div :id="identifier" />
    <slot />
  </section>
</template>

<script>
import Uuid from '../../jslib/uuid';

export default {
  data() {
    return {
      identifier: Uuid('dankal'),
      map: null,
      // markers: [],
    };
  },

  props: {
    config: {
      type: Object,
      default: () => ({
        resizeEnable: true,
        zoom: 13,
      }),
    },
    position: {
      type: [String, Array],
      default: '',
    },
  },

  async mounted() {
    // 高德地图 SDK 的 UI 库
    const { identifier } = this;

    const config = await this.onComponentInitial();

    this.map = new window.AMap.Map(identifier, config);

    this.map.on('complete', () => {
      this.onInitialChildren();
    });
  },

  methods: {
    async onComponentInitial() {
      const { config, position } = this;

      if (!position) {
        return config;
      }

      if (position instanceof Array) {
        return Object.assign({}, this.config, { center: position });
      }

      const result = await this.handlerLocation(position);

      return Object.assign({}, this.config, {
        center: [
          result.geocodes[0].location.lng,
          result.geocodes[0].location.lat,
        ],
      });
    },

    onInitialChildren() {
      // eslint-disable-next-line
      this.$children.forEach(child => {
        child.onComponentInitial();
      });
    },

    handlerLocation(address) {
      return new Promise((resolve, reject) => {
        if (!window.AMap) reject();
        window.AMap.plugin('AMap.Geocoder', () => {
          const geocoder = new window.AMap.Geocoder();
          geocoder.getLocation(address, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result);
            }
            reject();
          });
        });
      });
    },

    handlerAddress(lnglat) {
      return new Promise((resolve, reject) => {
        if (window.AMap) reject();
        window.AMap.plugin('AMap.Geocoder', () => {
          const geocoder = new window.AMap.Geocoder();

          geocoder.getAddress(lnglat, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result);
            }
            reject();
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.amap-container {
  height: 437px;
}
</style>
