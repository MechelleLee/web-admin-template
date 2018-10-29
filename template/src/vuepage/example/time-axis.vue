<template>
  <section class="container">
    <!-- <dankal-time-axis :sources="sources">
      <template
        slot="time"
        slot-scope="scope"
      >
        <dankal-card v-if="scope.item.time">
          <span>{{ scope.item.time }}</span>
        </dankal-card>
      </template>
      <template
        slot="content"
        slot-scope="scope"
      >
        <dankal-card>
          <span>{{ scope.item.article }}</span>
        </dankal-card>
      </template>
    </dankal-time-axis> -->
    <dankal-time-axis :source="source">
      <template
        slot="side"
        slot-scope="scope"
      >
        <div
          v-if="scope.item.time"
          class="side-block"
        />
      </template>
      <template
        slot="icon"
        slot-scope="scope"
      >
        <i
          slot="icon"
          class="el-icon-menu icon-block"
        />
      </template>
      <template
        slot="main"
        slot-scope="scope"
      >
        <div class="main-block" />
      </template>
    </dankal-time-axis>
  </section>
</template>

<script>
import DankalTimeAxis from '@/components/time-axis/dankal-time-axis';
import DankalCard from '@/components/card/dankal-card';

export default {
  data() {
    return {
      source: [
        {
          article:
            '如果熟悉 react 的读者这里可能马上就会想到 HOC（高阶组件） 的概念，而且这也是 react 中一个很常见的模式，该模式能够提高 react 组件的复用程度和灵活性。在 vue 中，我们是否也有一些手段或特性来提高组件的复用程度和灵活性呢？答案当然是有的，那就是 mixin。',
          time: '2018-10-25',
        },
        {
          article:
            '通过实现 toggleMixin，我们成功将注入的逻辑抽离了出来，这样每次需要共享 toggle 组件的状态和方法时，混入该 mixin 即可。这样就解决了第三方组件无法共享其状态和方法的问题，在在线实例代码中，我实现了两个第三方组件，分别是 custom-button 和 custom-status-indicator，前者是自定义开关，使用 withToggleMixin 来混入注入逻辑，后者是自定义的状态指示器，使用 withToggle 高阶函数来混入注入逻辑',
        },
        {
          article:
            '喂！那谁！你别笑！开发公司官网怎么了？AI公司的官网还真的就和其他公司的不一样！除去轮播图、全屏翻页、html5动画这种高端技能，你不做点其他的好意思叫AI官网？你可以整点AI人脸识别吧？可以整点摄像头手势控制吧？好，那么这种简单模型就可以放到前端来跑。你说咋跑？嗯。。。这里不做介绍，毕竟不是教程文嘛。有兴趣的同学可以找我私聊交流。',
          time: '2018-10-26',
        },
        {
          article:
            '如果熟悉 react 的读者这里可能马上就会想到 HOC（高阶组件） 的概念，而且这也是 react 中一个很常见的模式，该模式能够提高 react 组件的复用程度和灵活性。在 vue 中，我们是否也有一些手段或特性来提高组件的复用程度和灵活性呢？答案当然是有的，那就是 mixin。',
          time: '2018-10-25',
        },
        {
          article:
            '通过实现 toggleMixin，我们成功将注入的逻辑抽离了出来，这样每次需要共享 toggle 组件的状态和方法时，混入该 mixin 即可。这样就解决了第三方组件无法共享其状态和方法的问题，在在线实例代码中，我实现了两个第三方组件，分别是 custom-button 和 custom-status-indicator，前者是自定义开关，使用 withToggleMixin 来混入注入逻辑，后者是自定义的状态指示器，使用 withToggle 高阶函数来混入注入逻辑',
        },
        {
          article:
            '喂！那谁！你别笑！开发公司官网怎么了？AI公司的官网还真的就和其他公司的不一样！除去轮播图、全屏翻页、html5动画这种高端技能，你不做点其他的好意思叫AI官网？你可以整点AI人脸识别吧？可以整点摄像头手势控制吧？好，那么这种简单模型就可以放到前端来跑。你说咋跑？嗯。。。这里不做介绍，毕竟不是教程文嘛。有兴趣的同学可以找我私聊交流。',
          time: '2018-10-26',
        },
      ],
    };
  },

  components: {
    DankalTimeAxis,
    DankalCard,
  },
};
</script>

<style lang="scss" scope>
.icon-block {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #75ce66;

  text-align: center;
  color: #ffffff;
  line-height: 25px;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.side-block {
  width: 200px;
  height: 40px;
  background-color: #ffe793;
  border-radius: 2px;
  box-shadow: 0 0 0 4px white, 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.main-block {
  // width: 420px;
  width: 100%;
  height: 360px;
  background-color: #0dbc79;
  border-radius: 2px;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}
</style>
