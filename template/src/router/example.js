import Container from '@/vuepage/example/index';

import ExampleList from '../vuepage/example/list';
import ExampleEditor from '../vuepage/example/editor';
import ExampleFrom from '../vuepage/example/from';

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
            name: '文本编辑',
            url: '',
          },
        ],
      },
      {
        path: 'example-from',
        component: ExampleFrom,
        meta: [
          {
            name: '样例管理',
            url: '/example-management',
          },
          {
            name: '文本编辑',
            url: '',
          },
        ],
      },
    ],
  },
];
