<template>
  <section class="container">
    <dankal-card>
      <dankal-map position="南京市栖霞区仙林大道163号">
        <dankal-map-position-picker @success="onDragPickerAddress" />
        <dankal-map-control />
      </dankal-map>
      <div class="address-block">
        <i class="el-icon-location" />
        <span class="message-line">{{ address }}</span>
      </div>
    </dankal-card>
    <dankal-card>
      <dankal-map>
        <dankal-map-geolocation @complete="onGetPositionComplete" />
      </dankal-map>
      <div class="address-block">
        <i class="el-icon-location" />
        <span class="message-line">{{ position }}</span>
      </div>
    </dankal-card>
  </section>
</template>

<script>
import DankalCard from '@/components/card/dankal-card';

import DankalMap from '@/components/map/dankal-map';
import DankalMapControl from '@/components/map/dankal-map-control';
import DankalMapPositionPicker from '@/components/map/dankal-map-position-picker';
import DankalMapGeolocation from '@/components/map/dankal-map-geolocation';

export default {
  data() {
    return {
      address: '',
      position: '',
    };
  },

  components: {
    DankalCard,
    DankalMap,
    DankalMapControl,
    DankalMapPositionPicker,
    DankalMapGeolocation,
  },

  mounted() {},

  methods: {
    onDragPickerAddress(result) {
      this.address = result.address;
    },

    onGetPositionComplete(result) {
      this.position = result.formattedAddress;
    },
  },
};
</script>

<style lang="scss" scope>
.dankal-card {
  margin-bottom: 10px;
}

.address-block {
  text-align: right;
}

.message-line {
  display: inline-block;
  padding: 10px 0px 0px;
}
</style>
