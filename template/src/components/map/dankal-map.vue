<template>
  <section class="amap">
    <div :id="identifier" />
  </section>
</template>

<script>
import ScriptLoader from '../../jslib/script-loader';
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
    initial: {
      type: Object,
      default: () => ({
        version: '1.4.6',
        key: '',
      }),
    },

    config: {
      type: Object,
      default: () => ({
        resizeEnable: true,
        zoom: 13,
      }),
    },

    city: {
      type: String,
      default: '',
    },

    hook: {
      type: Function,
      default: () => () => {},
    },
  },

  created() {},

  async mounted() {
    // 高德地图 SDK 的核心库
    if (!window.AMap) {
      const src = `https://webapi.amap.com/maps?v=${this.initial.version || '1.4.6'}&key=${this.initial.key}`;
      const loader = new ScriptLoader(src);
      await loader.load();
    }

    // 高德地图 SDK 的 UI 库
    if (!window.AMapUI) {
      const src = 'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11';
      const loader = new ScriptLoader(src);
      await loader.load();
    }

    const { identifier, city } = this;

    this.map = new window.AMap.Map(identifier, this.config);
    this.map.setCity(city);

    // 设置钩子函数，便于控制权的转移
    this.hook(this.map);
  },

  methods: {
    handlerLocation(address) {
      return new Promise((resolve, reject) => {
        if (window.AMap) reject();
        window.AMap.plugin('AMap.Geocoder', () => {
          const geocoder = new window.AMap.Geocoder();

          geocoder.getLocation(address, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result);
            }
            reject();
          })
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
          })
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
