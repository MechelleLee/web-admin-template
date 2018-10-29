import Container from '@/vuepage/example/index';

import ExampleList from '../vuepage/example/list';
import ExampleEditor from '../vuepage/example/editor';
import MultiPleDownload from '../vuepage/example/multiple-download';
import Operation from '@/vuepage/example/operation-filter';
import ExampleForm from '@/vuepage/example/form';
import ExampleTree from '@/vuepage/example/tree';
import ExampleMap from '@/vuepage/example/map';
import ExamplePlugins from '@/vuepage/example/plugins';
import ExampleTimeAxis from '../vuepage/example/time-axis';

export default [
  {
    path: '/example-management',
    component: Container,
    children: [
      {
        path: '',
        component: ExampleList,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
        ],
      },
      {
        path: 'example-editor',
        component: ExampleEditor,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '文本设计',
            url: '',
          },
        ],
      },
      {
        path: 'multiple-download',
        component: MultiPleDownload,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '批量下载',
            url: 'multiple-download',
          },
        ],
      },
      {
        path: 'example-form',
        component: ExampleForm,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '表单设计',
            url: '/example-form',
          },
        ],
      },
      {
        path: 'example-tree',
        component: ExampleTree,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '树形设计',
            url: '/example-tree',
          },
        ],
      },
      {
        path: 'example-map',
        component: ExampleMap,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '地图选址',
            url: '/example-map',
          },
        ],
      },
      {
        path: 'example-plugins',
        component: ExamplePlugins,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '插件设计',
            url: '/example-plugins',
          },
        ],
      },
      {
        path: 'example-time-axis',
        component: ExampleTimeAxis,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '轴型设计',
            url: '/example-time-axis',
          },
        ],
      },
      {
        path: 'operation',
        component: Operation,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '操作权限控制',
            url: '/operation',
          },
        ],
      },
    ],
  },
];
