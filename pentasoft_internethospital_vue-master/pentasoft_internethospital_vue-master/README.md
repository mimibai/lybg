## 前端开发框架说明及开发注意事项

### 开发步骤

##### 环境安装
1. 配置vue运行环境,即安装node环境
2. 安装开发工具,选择自己熟悉的前端开发工具VsCode或其他

##### 配置运行
1. 打开项目,安装项目依赖
  `npm install`
2. 修改项目配置,项目根目录下.env.local文件,修改接口host
   ```
   //接口host
    VUE_APP_URL=http://192.168.1.156:10089/smart/admin/
    //socket路径
    VUE_APP_SOCKET_URL=ws://192.168.1.156:10089/smart/
    //登录不符合规则默认跳转路径
    VUE_APP_DEFAULT_URL=http://49.232.174.117/api/view/index.html#/pages/news/artices/list
    ```
3. 本地运行
  `npm run local`

#### 页面新增步骤说明
##### 1.将生成的文件拷贝到对应项目目录下

- api文件夹下的对应js文件为API接口定义,拷贝到src/api下对应文件目录
- 生成目录中web/下对应表名的文件夹是vue的页面文件，拷贝到/src/views/business下对应目录下
- 配置访问路由
    a. 如果是新增模块,将生成的router/对应的js文件拷贝到/src/router/下,然后再src/router/index.js中引用,注入
    b.如果模块已存在,则在src/router/下对应js文件中新增路由配置,可参照已存在的
###### 2. 

#### 前端代码规范

##### 前端枚举 - 使用vue-enum

使用：新增常量

1. 在src/constants/文件夹下新建js文件,并按照以下格式进行枚举常量的定义
    ```
    export const NOTICE_STATUS = {
        YES: {
            value: 1,
            desc: '是'
        },
        NO: {
            value: 0,
            desc: '否'
        }
    };
    ```

2. 在src/constants/index.js 将常量模块导出
   ```
   import noticeConstantfrom './noticeConstant/index.js'
    export default {
      ...noticeConstant,
    }
    ```
3. 枚举(常量) 三个常规方法以供页面内组件使用

方法名|参数名|结果
:-:|:-:|:-:
getDescByValue|	enumName,value|根据枚举值获取描述desc
getValueDescList|enumName|根据枚举名获取对应的描述键值对[{value:desc}]
getValueDesc|enumName|根据枚举名获取对应的value描述键值对{value:desc}

#### 使用示例

```

//获取值对应的描述
this.$enum.getDescByValue('NOTICE_STATUS',0);
//返回值: '是'

//获取常量的所有值和描述
this.$enum.getValueDescList('NOTICE_STATUS');
/* 返回值:
  [{
    desc:'是'，
    value:1
  },
  {
    desc:'否'，
    value:0
  }]
/*

//获取常量值和描述
this.$enum.getValueDesc('NOTICE_STATUS');
//返回值:
   {
     1:'是'，
     0:'否'
   }
```


### 启动讲解

###### 配置vscode

将 /vscode/settings.json文件配置到vscode中

###### 启动
1 安装依赖：

`npm install`

2 运行本地环境

`npm run local`