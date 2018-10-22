<template>
  <section class="container">
    <dankal-card>
      <dankal-map
        :initial="initial"
        city="深圳市"
      />
    </dankal-card>
    <dankal-card>
      <dankal-map
        city="广州市"
        ref="picker"
        :initial="initial"
        :hook="handlerMapHook"
      />
    </dankal-card>
  </section>
</template>

<script>
import DankalMap from '@/components/map/dankal-map';
import DankalCard from '@/components/card/dankal-card';

import PositionPicker from '../../components/map/plugins/position-picker';

export default {
  data() {
    return {
      initial: {
        key: 'a4e1f4591bf569936909fefb25663508',
      },
    }
  },

  components: {
    DankalMap,
    DankalCard,
  },

  mounted() {},

  methods: {
    handlerMapHook(map) {
      const picker = new PositionPicker(map);
      picker.init();
    },
  },
}
</script>

<style lang="scss" scope>
.dankal-card {
  margin-bottom: 10px;
}
</style>
