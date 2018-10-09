<template>
  <section class="container">
    <!-- <dankal-input /> -->
    <dankal-checkbox-group v-model="group">
      <dankal-checkbox
        v-for="(item, index) in [1, 2, 3, 4]"
        :key="index"
        :label="item"
      >
        <template slot-scope="scope">
          <span
            class="dankal-checkbox-container"
            :class="{checked: scope.checked}"
          >{{ scope.data }}</span>
        </template>
      </dankal-checkbox>
    </dankal-checkbox-group>
  </section>
</template>

<script>
import DankalInput from '../../components/dankal-input';
import DankalCheckbox from '../../components/checkbox/dankal-checkbox';
import DankalCheckboxGroup from '../../components/checkbox/dankal-checkbox-group';

export default {
  data() {
    return {
      source: [1, 2, 3],
      group: [],
    }
  },

  components: {
    DankalInput,
    DankalCheckbox,
    DankalCheckboxGroup,
  },

  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.dankal-checkbox-container {
  display: inline-block;

  width: 46px;
  height: 32px;
  background: rgba(249, 249, 249, 1);
  border: 1px solid rgba(210, 210, 210, 1);

  text-align: center;

  @include font($color: #000000, $line-height: 32px);

  transition: all 0.3s ease-in-out;
}

.dankal-checkbox-container.checked {
  background: rgba(217, 33, 40, 1);
  color: #ffffff;
  border: 1px solid rgba(217, 33, 40, 1);
}
</style>
