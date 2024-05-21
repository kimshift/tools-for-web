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

| 名称                              | API            | 说明 |
| --------------------------------- | -------------- | ---- |
| store2-localStorage 缓存          | local          |      |
| store2-sessionStorage 缓存        | session        |      |
| 设置过期时间                      | setExpires     |      |
| 获取过期状态                      | getExpires     |      |
| 下载流文件                        | downloadStream |      |
| 将定制 txt 文件内容转化成数组对象 | textTransform  |      |
| 浏览器内核                        | kernelInfo     |      |
| 移动端/PC端                       | isMobile       |      |
| 是否android终端                   | isAndroid      |      |
| 是否ios终端                       | isIOS          |      |
| 是否微信环境                      | isWeiXn        |      |
| 是否QQ环境                        | isQQ           |      |
| 是否钉钉环境                      | isDingTalk     |      |
| 是否微博环境                      | isWeiBo        |      |
