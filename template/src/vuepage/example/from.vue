<template>
  <section class="container">
    <dankal-card :style="{width: '300px'}">
      <div>
        <h4>基于 label 实现复选框</h4>
      </div>
      <dankal-checkbox-group
        v-model="group"
        :limit="limit"
      >
        <dankal-checkbox
          v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
          :key="index"
          :label="item"
        >
          <template slot-scope="scope">
            <span
              class="dankal-checkbox-container"
              :class="{checked: scope.checked}"
            >
              {{ scope.data }}
            </span>
          </template>
        </dankal-checkbox>
      </dankal-checkbox-group>
    </dankal-card>
  </section>
</template>

<script>
import DankalCard from '../../components/card/dankal-card';
import DankalInput from '../../components/dankal-input';
import DankalCheckbox from '../../components/checkbox/dankal-checkbox';
import DankalCheckboxGroup from '../../components/checkbox/dankal-checkbox-group';

export default {
  data() {
    return {
      group: [],
      limit: 2,
    }
  },

  components: {
    DankalCard,
    DankalInput,
    DankalCheckbox,
    DankalCheckboxGroup,
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.dankal-checkbox-container {
  display: inline-block;

  width: 48px;
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
