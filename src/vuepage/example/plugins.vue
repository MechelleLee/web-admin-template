<template>
  <section class="container">
    <dankal-card :hover="false">
      <div class="plugin-block">
        <h3>Loading-Plugin</h3>
        <div>
          <button @click="onHandlerOpenLoadning">
            <span>触发</span>
          </button>
          <button @click="onHandlerHideLoadning">
            <span>隐藏</span>
          </button>
        </div>
      </div>
    </dankal-card>
    <dankal-card :hover="false">
      <div class="plugin-block">
        <h3>Script-Plugin</h3>
        <div>
          <button @click="onHandlerOpenLoadning">
            <span>触发</span>
          </button>
          <button @click="onHandlerHideLoadning">
            <span>隐藏</span>
          </button>
        </div>
      </div>
    </dankal-card>
  </section>
</template>

<script>
import DankalCard from '@/components/card/dankal-card';

export default {
  data() {
    return {};
  },

  components: {
    DankalCard,
  },

  methods: {
    onHandlerOpenLoadning() {
      window.vm.$loading();
    },

    onHandlerHideLoadning() {
      window.vm.$loading.hide();
    },

    onHandlerLoadScripts() {
      window.vm.$scripts({
        scripts: [
          'https://webapi.amap.com/maps?v=1.4.6&amp;key=a4e1f4591bf569936909fefb25663508',
        ],
        tag: 'script',
        type: 'text/javascript',
      });
    },
  },
};
</script>

<style lang="scss" scope>
@import '../../assets/styles/mixins.scss';

button {
  @include button;

  padding: 10px 20px;
  border-radius: 2px;
}

.dankal-card + .dankal-card {
  margin-top: 10px;
}

.plugin-block {
  @include flex-container;
}
</style>
