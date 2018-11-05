<template>
  <section class="container">
    <dankal-card :style="{width: '240px'}">
      <dankal-qrcode data="linksystem" />
    </dankal-card>
  </section>
</template>

<script>
import DankalQrcode from '../../components/qrcode/dankal-qrcode';
import DankalCard from '../../components/card/dankal-card';

export default {
  data() {
    return {};
  },

  components: {
    DankalQrcode,
    DankalCard,
  },
};
</script>

<style lang="scss" scope>
</style>
