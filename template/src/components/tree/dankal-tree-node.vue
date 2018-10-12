<template>
  <section class="dankal-tree-node">
    <node-content
      :root="data.root"
      :data="data"
      :template="template"
    />
    <transition-group
      tag="div"
      name="dankal-tree-node-animation"
    >
      <dankal-tree-node
        v-if="data.root && launch"
        v-for="(item, index) in data.child"
        :key="index"
        :data="item"
        :template="template"
      />
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'DankalTreeNode',

  componentName: 'DankalTreeNode',

  data() {
    return {
      launch: true,
      height: 0,
    }
  },

  mounted() {
    // this.height = this.$refs.node.clientHeight;
  },

  props: {
    data: {
      type: Object,
      // eslint-disable-next-line
      default: () => {
        return {
          text: 'node',
          root: false,
          datasource: [],
        };
      },
    },

    template: {
      type: Function,
      default: () => () => (<span>This is default template of tree's node</span>),
    },
  },

  components: {
    NodeContent: {
      props: {
        data: {
          type: Object,
          default: () => {},
          require: true,
        },
        root: {
          type: Boolean,
          default: false,
        },
      },

      render(h) {
        // eslint-disable-next-line
        const parent = this.$parent;
        const { data, root } = this;
        // 该 call 方法无法使 render 函数的 this 重新指向
        return this.$parent.template.call(this, h, { data, root, parent });
      },
    },
  },

  methods: {
    handlerLaunch() {
      this.launch = !this.launch;
    },
  },
}
</script>

<style lang="scss" scoped>
.dankal-tree-node {
  position: relative;
}

.dankal-tree-node-animation {
  position: relative;
  height: 200px;
  overflow: hidden;
  transition: height 0.2s;

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    position: absolute;
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }

  &-enter-active {
    // transition-delay: 100ms;
  }
}
</style>
