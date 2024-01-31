import notice from './notice.js';
import login from './login.js';
import file from './file.js';
import privilege from './privilege';
import article from './article';
import wxenum from './enum-wx';
import vote from './vote';
import user from './user';
import dataScope from './data-scope';
import site from './site';
import enumType from './enum-type';
import common from './common';
import department from './department';
import scheduling from './enum-scheduling';
export default {
  ...common,
  ...notice,
  ...login,
  ...file,
  ...privilege,
  ...article,
  ...wxenum,
  ...vote,
  ...user,
  ...dataScope,
  ...site,
  ...enumType,
  ...department,
  ...scheduling
};
