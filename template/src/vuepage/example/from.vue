<template>
  <section class="container">
    <!-- <dankal-input /> -->
    <dankal-checkbox-group v-model="group">
      <dankal-checkbox />
      <dankal-checkbox />
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
</style>
