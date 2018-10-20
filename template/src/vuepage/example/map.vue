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
        :initial="initial"
        city="广州市"
      />
    </dankal-card>
  </section>
</template>

<script>
import DankalMap from '@/components/map/dankal-map';
import DankalCard from '@/components/card/dankal-card';

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
}
</script>

<style lang="scss" scope>
.dankal-card {
  margin-bottom: 10px;
}
</style>
