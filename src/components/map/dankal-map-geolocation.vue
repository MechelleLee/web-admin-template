<template>
  <section class="dankal-map-geolocation" />
</template>

<script>
export default {
  data() {
    return {};
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
      const { map } = this;
      window.AMap.plugin('AMap.Geolocation', () => {
        const geolocation = new window.AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new window.AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB',
        });

        map.addControl(geolocation);

        geolocation.getCurrentPosition();

        window.AMap.event.addListener(
          geolocation,
          'complete',
          this.handlerComplete,
        );

        window.AMap.event.addListener(geolocation, 'error', this.handlerError);
      });
    },

    handlerComplete(data) {
      this.$emit('complete', data);
    },

    handlerError(data) {
      this.$emit('error', data);
    },
  },
};
</script>

<style lang="scss" scope>
</style>
