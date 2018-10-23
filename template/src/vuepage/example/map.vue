<template>
  <section class="container">
    <dankal-card>
      <dankal-map
        :initial="initial"
      >
        <dankal-map-position-picker
          @success="onDragPickerAddress"
        />
      </dankal-map>
      <span
        class="message-line"
      >{{ address }}</span>
    </dankal-card>
  </section>
</template>

<script>
import DankalCard from '@/components/card/dankal-card';

import DankalMap from '@/components/map/dankal-map';
import DankalMapPositionPicker from '@/components/map/dankal-map-position-picker';

export default {
  data() {
    return {
      initial: {
        key: 'a4e1f4591bf569936909fefb25663508',
      },
      address: '',
    };
  },

  components: {
    DankalCard,
    DankalMap,
    DankalMapPositionPicker,
  },

  mounted() {},

  methods: {
    onDragPickerAddress(result) {
      this.address = result.address;
    },
  },
};
</script>

<style lang="scss" scope>
.dankal-card {
  margin-bottom: 10px;
}

.message-line {
  display: inline-block;
  padding: 10px 0px 0px;
}
</style>
