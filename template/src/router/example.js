import Container from '@/vuepage/example/index';

import ExampleList from '../vuepage/example/list';
import ExampleEditor from '../vuepage/example/editor';

export default [
  {
    path: '/example-management',
    component: Container,
    children: [
      {
        path: '',
        redirect: 'example-list',
      },
      {
        path: 'example-list',
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
    ],
  },
];
