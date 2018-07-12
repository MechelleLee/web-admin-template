import authority from "./authority";
import example from "./example";

// 配置权限表的时候，建议与动态组件的名称保持一致
// 配置使用Key：Value结构，
// 同样的你也可以使用uuid来来作为key，但是这样需要后端的配合所以不建议
// 使用Key：Value结构,需要你核外的作一个转换配置，
// 来方便过滤出你权限对应的模块

const auth = {
  'dynamic': {
    serial: 'dankal-dynamic',
    router: authority,
    component: 'dynamic',
  },
  'example': {
    serial: 'dankal-example',
    router: example,
    component: 'example',
  },
}

export default auth;
