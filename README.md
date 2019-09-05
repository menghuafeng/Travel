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
static 静态目录,可以被外部访问到(可以将放一些模拟测试的数据)
.gitignore 不需要提交git的文件
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
# 使用第三方首页轮播图插件vue-awesome-swiper(index-swiper分支)
npm install vue-awesome-swiper@2.6.7 --save
# 图标区域的页面布局(index-icon分支)

#chrome插件Vue.js devtools
扩展程序中打开"允许访问文件网址"

# 使用axios发送ajax数据 (index-ajax分支)
安装axios cnpm install axios --save
使用index.js中proxyTable代理机制转发路径

# 城市选择页面-路由配置(city-router分支)
varibles.style使用全局变量定义行高,方便之后统一修改页面行高表头

# 城市列表页面布局(city-list分支)
城市列表滚动效果插件 better-scroll(iscroll的封装)

# 城市列表页面布局(city-ajax分支)
城市的动态数据渲染

# 城市列表页面布局(city-components分支)
兄弟组件间的传值
Bscroll可以滚动定位,但是需要传递一个dom元素或者dom选择器进去,所以[0]表示第一个元素
使用的防抖机制时间设定需要根据实际情况来测试,否者滑动时会变得很不流畅,导致用户认为是手机问题





