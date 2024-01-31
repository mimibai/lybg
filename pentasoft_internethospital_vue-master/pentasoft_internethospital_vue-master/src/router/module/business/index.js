
import Main from '@/components/main';

import { home } from '../home';
import { content } from './content';
import { organization } from './organization';
import { scheduling } from './scheduling';
import { platform } from './app-platform';
import { functions } from './function';
import { vote } from './vote';
import { flowModulation } from './flowModulation';
import { medicalconsortiums } from './medicalconsortiums';
import { consulation } from './internetConsultation';

// 业务
export const business = [
  {
    path: '/business',
    name: 'Business',
    component: Main,
    meta: {
      title: '业务功能',
      topMenu: true,
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      ...home,
      ...content,
      ...organization,
      ...consulation,
      ...scheduling,
      ...platform,
      ...functions,
      ...vote,
      ...flowModulation,
      ...medicalconsortiums
    ]
  }
];
