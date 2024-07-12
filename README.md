### 项目名称

> tools-for-web —— 浏览器端相关的 JavaScript 工具库

### 安装

```sh
npm install tools-for-web --save
```

### 使用

```js
import { API } from 'tools-for-web'
```

### API

| 名称                       | API            |
| -------------------------- | -------------- |
| store2-localStorage 缓存   | local          |
| store2-sessionStorage 缓存 | session        |
| 设置过期时间               | setExpires     |
| 获取过期状态               | getExpires     |
| 获取 cookie                | getCookie      |
| 设置 cookie                | setCookie      |
| 将 txt 的 blob 转文本内容  | blobToText     |
| 下载流文件                 | downloadStream |
| 图片转 base64              | getBase64      |
| 浏览器内核                 | kernelInfo     |
| 移动端/PC 端               | isMobile       |
| 是否 android 终端          | isAndroid      |
| 是否 ios 终端              | isIOS          |
| 是否微信环境               | isWeiXn        |
| 是否 QQ 环境               | isQQ           |
| 是否钉钉环境               | isDingTalk     |
| 是否微博环境               | isWeiBo        |
| 获取哈希路由参数           | getHashParam   |
| 获取路由参数               | getQueryParams |
| 获取当前路径               | getPath        |
| 获取移动端转换比例         | getScale       |
| 移动端自适应尺寸转换       | sizeConvert    |
| 创建 script 标签加载 js    | createScript   |
