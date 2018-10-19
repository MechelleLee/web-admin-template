<template>
  <section class="amap">
    <div id="container" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      markers: [],
    };
  },

  props: {
    postion: {
      type: Object,
      default: () => {},
      required: false,
    },
    city: {
      type: String,
      default: '',
    },
    zoom: {
      type: Number,
      default: 13,
    },
    longitude: {
      type: String,
      default: '',
    },
    dimension: {
      type: String,
      default: '',
    },
    // 启用事件
    getPostion: {
      type: Boolean,
      default: false,
    },
  },

  created() {},

  mounted() {
    const element = document.createElement('script');
    element.src = 'https://webapi.amap.com/maps?v=1.4.6&key=a4e1f4591bf569936909fefb25663508&plugin=AMap.Geocoder';
    document.head.appendChild(element);
    console.log('====================================');
    console.log(window.AMap);
    console.log('====================================');

    // this.map = new window.AMap.Map('container', {
    //   resizeEnable: true,
    //   zoom: 13,
    // });

    // this.map.setCity('深圳市');
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
  },
};
</script>

<style lang="scss" scoped>
.amap-container {
  height: 437px;
}
</style>
