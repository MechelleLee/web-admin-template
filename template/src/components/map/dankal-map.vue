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
    plugins: {
      type: Array,
      default: () => [],
    },
    city: {
      type: String,
      default: '',
    },
  },

  created() {},

  async mounted() {
    if (!window.AMap) {
      const src = `https://webapi.amap.com/maps?v=${this.initial.version || '1.4.6'}&key=${this.initial.key}`;
      const loader = new ScriptLoader(src);
      await loader.load();
    }

    const { identifier, city } = this;

    this.map = new window.AMap.Map(identifier, this.config);
    window.AMap.plugin(['AMap.ToolBar', 'AMap.Driving', 'AMap.OverView'], () => {
      const toolbar = new window.AMap.ToolBar();
      this.map.addControl(toolbar);
    });
    this.map.setCity(city);
  },

  methods: {
    marker(longitude, latitude) {
      const marker = new window.AMap.Marker({
        map: this.map,
        position: [longitude, latitude],
      });
      this.markers.push(marker);
      this.map.setFitView();
    },

    clear() {
      this.markers.forEach((item) => {
        this.map.remove(item);
      });
      this.markers = [];
    },

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
