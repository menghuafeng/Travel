# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue项目的目录结构
package.json    第三方工具
package-lock.json   第三方工具具体信息(名称,版本信息等) 统一引入
node_mnodules   node包
config    基本配置开发生产环境配置
build   打包
src   源码包
    main.js   整个项目的入口文件
    App.vue   项目原始的根组件
    router    路由
    components    组件
## 项目问题及注意事项
# 路由
根据不同的网址,返回不同的内容
<router-view>  显示的是当前路由地址所对应的内容
# 统一手机样式
reset.css
# 手机一像素边框问题
border.css
# 点击事件延时300毫秒,使用fastclick第三方工具包
bash命令 : npm install fastclick --save
页面使用 : fastClick.attach(document.body)
# css开发辅助工具 stylus
bash命令 : npm install stylus --save
          npm install stylus-loader --save
# 页面样式布局
* 移动端布局一般使用rem方式,注意样式编写的缩进布局
1rem = html font-size=50px
* 自定义全局样式
导入使用 : @
src目录表示 : '~@'
* 自定义路径名称
webpack.base.conf.js
新路径名前加~
# 使用第三方首页轮播图插件vue-awesome-swiper
npm install vue-awesome-swiper@2.6.7 --save









