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
# vue组件的结构
*  template标签三个特性: HTML5出来的新标签
  (1)隐藏性：该标签不会显示在页面的任何地方，即便里面有多少内容，它永远都是隐藏的状态
  (2)任意性：该标签可以写在页面的任何地方，甚至是head、body、sciprt标签内
  (3)无效性：该标签里的任何HTML内容都是无效的，不会起任何作用(:不会解析html)
在vue中,template标签下必须有且只能有一个根元素,这里类似dom寻根的原理,这个根元素即组件的入口
<template><div>demo</div></template>
*  vue使用import来导入相应模块,使用export导出模块(多个模块),export default默认只导出一个模块
<script>
  export default { name : 'DetailList' }
</script>
*  scoped当组件有这个属性的时候,它的css样式仅仅作用于当前组件,实现了样式模块化(>>>样式穿透)
<style lang="stylus" scoped></style>
# vue主要命令
* v-text {{}}   文本
* v-html		    HTML
* v-bind :		  属性绑定,用来绑定数据和属性以及表达式
* v-model		    用来在表单控件元素上创建双向数据绑定,在表单元素外使用不起作用
* v-if  v-else  v-else-if	条件语句
* v-show		    根据条件展示元素
* v-for		      循环语句
* v-on  @		    事件监听

## 项目问题及注意事项
# 路由
*  根据不同的网址,返回不同的内容
*  <router-view>  显示的是当前路由地址所对应的内容
# 统一手机样式
reset.css
# 手机一像素边框问题
border.css
# 点击事件延时300毫秒,使用fastclick第三方工具包
*  bash命令 : npm install fastclick --save
*  页面使用 : fastClick.attach(document.body)
# css开发辅助工具 stylus
*  bash命令 : npm install stylus --save
          npm install stylus-loader --save
*  scoped  当组件有这个属性的时候,它的css样式仅仅作用于当前组件,实现了样式模块化;
*  scoped穿透使用>>>   当引入第三方组件的时候,可能需要修改其中的样式,这时候使用( 外层 >>> 第三方组件 {样式} )
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

# chrome插件Vue.js devtools
扩展程序中打开"允许访问文件网址"

# 使用axios发送ajax数据 (index-ajax分支)
* 安装axios cnpm install axios --save
* 使用index.js中proxyTable代理机制转发路径

# 城市选择页面-路由配置(city-router分支)
* varibles.style使用全局变量定义行高,方便之后统一修改页面行高表头

# 城市列表页面布局(city-list分支)
* 城市列表滚动效果插件 better-scroll(iscroll的封装)

# 城市列表页面布局(city-ajax分支)
* 城市的动态数据渲染

# 城市列表页面布局(city-components分支)
* 兄弟组件间的传值
* Bscroll可以滚动定位,但是需要传递一个dom元素或者dom选择器进去,所以[0]表示第一个元素
* 使用的防抖机制时间设定需要根据实际情况来测试,否者滑动时会变得很不流畅,导致用户认为是手机问题

# 城市搜索功能(city-search-logic)
需要考虑的情况: 1.没有搜索值时 2.有搜索值 3.未匹配到数据时 4.数据过长的滚动效果

# 使用vuex实现数据共享(city-vuex)
* npm install vuex --save
* 配置在store文件夹,vuex的作用就是实现不同组件之间的数据共享,提供一个公共的store来存储数据
* 组件dispatch() -> actions -> commit() -> mutations  -> 修改state内容 

# keep-alive实现页面数据的缓存,避免数据的重复加载,会新增一个生命周期函数activated

# 详情页面的图标(detail-banner)
* 使用iconfont图标库,选择相应的图标添加至购物车,添加到自己的项目中,下载图标至本地
找到需要用的图标文件复制到本地项目,同时注意修改iconfont.css中base64这行代码
* 将图片轮播这个功能独立为一个组件gallary;注意swiper的用法(可查阅官网api)

# 实现header渐隐渐现的效果(detail-header)
* 在使用window对象进行事件绑定的时候,会对全局有一个事件绑定的效果,需要进行解绑
* 增加了keep-alive组件之后,会新增两个生命周期钩子activated(每次页面展示) deactivated(页面被隐藏前)

# 组件的递归调用(detail-list)
* 在组件内部调用本组件标签,实现递归

# 使用ajax请求动态展示详情页面
组件的name属性有三个用处:
* 递归调用使用
* keep-alive 的exclude和include配置是否缓存(大小写敏感)
* 浏览器的devtools开发工具中展示的组件名字
对于所有路由导航，简单地让页面滚动到顶部的方法
* scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } }

# 详情页面图片转换增加动画效果(detail-animation)
用到组件transition,该组件有几个钩子函数:
* v-enter：定义上半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
* v-enter-to：定义上半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
* v-enter-active：这里包含了上面的v-enter、v-enter-to两个时间段，在这里可以对上半场过渡定义过渡时间、曲线等
* v-leave：定义下半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
* v-leave-to：定义下半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
* v-leave-active：这里包含了上面的v-leave、v-leave-to两个时间段，在这里可以对下半场过渡定义过渡时间、曲线等

# 注意事项
* 在手机测试详情页面，向下滚动的时候头部header不会出现,在电脑端是可以的
  解答：scrollTop的兼容性问题。const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
* Android真机测试时城市列表页面点击事件不生效，点击城市无法跳转回主页
这是因为better-scroll的原因。this.scroll = new BScroll(this.$refs.wrapper, {
click: true // 一开始的点击事件被bscroll阻止了，设置这个才能点击
});
* 可能访问会有白屏问题,原因可能是浏览器不支持Promise对象
npm install babel-polyfill
* 将打包后的项目放到后端服务器自定义的目录下的时候,需要修改前端代码的打包路径
config/index.js   build -> 修改assetsPublicPath参数重新打包即可
* 组件的异步加载
1. router目录下的index.js,修改routers内component: () => import ('@/pages/home/home')
2. 在使用该组件的时候加载,调用者代码中components修改为如上写法
* 使用IP访问项目
在package.json的scripts配置项中添加--host 0.0.0.0,然后将index.js请求路径修改为IP地址

# vue进阶
router路由  vuex实现数据共享  vue服务器端渲染  vue各种资源组件

# 代码格式化
1. webpack.base.config.js
{
     test: /\.(js|vue)$/,
     loader: 'eslint-loader',
     enforce: 'pre',
     include: [resolve('src'), resolve('test')],
     options: {
      formatter: require('eslint-friendly-formatter')
     }
}
2. package.json
    "babel-eslint": "^8.2.1",
    "eslint": "^4.15.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "eslint-plugin-vue": "^4.0.0",
3. 拷贝.eslintignore和.eslintrc.js文件
4. 删除node_modules目录,重新npm install
