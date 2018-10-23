<template>
  <section class="container">
    <dankal-card
      :hover="false"
    >
      <div
        class="loading-block"
      >
        <h3>Loading-Plugin</h3>
        <div>
          <button
            @click="onHandlerOpenLoadning"
          >
            <span>触发</span>
          </button>
          <button
            @click="onHandlerHideLoadning"
          >
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
      window.vm.loading.hide();
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

.loading-block {
  @include flex-container;
}
</style>
