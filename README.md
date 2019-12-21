# vue-spa-template(vue单页应用模板)

## Npm scripts
```
$ npm install           # 安装依赖
$ npm run serve         # 运行项目（本地开发）
$ npm run build         # 生产环境打包
$ npm run build:prod    # 生产环境打包
$ npm run build:yufa    # 预发环境打包
$ npm run build:test    # 测试环境打包
$ npm run dist          # 本地预览打包文件
```

## Feature
>* [Vue CLI 3](https://cli.vuejs.org/zh/)
>* [Vue](https://cn.vuejs.org/index.html)
>* [VueX](https://vuex.vuejs.org/zh/)
>* [Vue Router](https://router.vuejs.org/zh/)
>* [axios](https://www.kancloud.cn/yunye/axios/234845)
>* [Workbox离线存储](https://webpack.docschina.org/guides/progressive-web-application/)
>* [better-scroll处理移动端滚动](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)
>* [postcss-pxtorem自动将px转成rem，计算规则为： 750px设计稿 -----> 7.5rem](https://github.com/cuth/postcss-pxtorem)
>* [Commitizen规范git commit](https://juejin.im/post/5bd2debfe51d457abc710b57)
>* [抽取loading效果到html，降低首屏空白时间](https://www.jb51.net/article/146109.htm)
>* 伪元素 + transform 解决Retina屏1像素问题
>* @yolkpie/utils [前端工具类库](https://www.npmjs.com/package/@yolkpie/utils)

## Project structure
```
├── dist                           # 打包后生成的文件
├── node_modules                   # 安装的依赖
├── public                         # 静态资源文件夹
└── src
    ├── api                        # 接口
    ├── assets                     # 项目依赖的一些静态资源
    ├── components                 # 公共组件
        ├── skeletons              # 页面骨架屏
    ├── config                     # 公共配置
    ├── directives                 # vue指令
    ├── filters                    # vue过滤器
    ├── mixin                      # vue混入
    ├── plugins                    # 插件
    ├── request                    # 网络请求相关
    ├── router                     # vue-router
    ├── store                      # vuex
    ├── styles                     # 公共样式
    ├── views                      # 页面视图组件
├── .browserslistrc                # 在不同的前端工具间共享目标浏览器
├── .editorconfig                  # 统一代码风格
├── .env                           # 环境变量，在所有的环境中被载入
├── .env.prod                      # 环境变量，在生产环境被载入
├── .env.test                      # 环境变量，在测试环境被载入
├── .env.yufa                      # 环境变量，在预发环境被载入
├── .eslintrc.js                   # 代码检查配置文件
├── .gitignore                     # git忽略文件
├── .huskyrc                       # 阻止错误的 git 提交
├── babel.config.js                # 代码转换规则
├── package.json                   # npm包描述文件
├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号
├── postcss.config.js              # css转换规则
├── README.md                      # 项目说明
├── vue.config.js                  # vue-cli配置文件
```

## [环境变量与模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)
本模板主要包括四种模式，通常一种模式会对应多个环境变量。通常情况下后端的API会有多个指向不同环境的域名（测试、预发、线上）
>* 开发模式：本地开发，通过修改 `.env` 文件中的 `REQUEST_URL` 变量来请求不同后端环境API
>* 测试模式：对应后端测试环境API域名
>* 预发模式：对应后端预发环境API域名
>* 生产模式：对应后端线上环境API域名

例如以 vue-cli-service build --mode prod 命令进行打包，会在prod模式下加载可能存在的 .env、.env.prod 和 .env.prod.local 文件然后构建出生产环境应用。

可以替换项目根目录中的下列文件来指定环境变量：
```
.env         # 在所有环境中被载入
.env.test    # 在测试环境中被载入
.env.yufa    # 在预发环境中被载入
.env.prod    # 在生产环境中被载入
```
以.env.prod文件为例：
```
# 左边是变量名(一般大写，下划线分割单词)，右边是变量值
NODE_ENV = "production"
REQUEST_URL = "//api.m.jd.com"
```
只有以 `VUE_APP_` 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。可以在应用的代码中这样访问它们：
```javascript
console.log(process.env.VUE_APP_SECRET)
```
非 `VUE_APP_` 开头的变量需要手动嵌入到客户端侧的包中
```javascript
config.plugin('define')
    .tap(args => {
        args[0]['process.env'].REQUEST_URL = JSON.stringify(process.env.REQUEST_URL)
        return args
    })
```
除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：
>* NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
>* BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
