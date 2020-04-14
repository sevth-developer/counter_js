# counter_js

[![counter](https://img.sevth.com/website/2020/04/13/7d210d6eb2b90890ae3795967d57cb59.svg)](https://circleci.com/gh/sevth-developer/counter_js)[![MIT](https://cdn.sevth.com/website/2020/04/13/3a2757504750cc2bf8a72b9db7bf029f.svg)](https://github.com/sevth-developer/counter_js)



使用 humen 作为后端开发的简易网页计数器，用于支持 `Hexo` 博客的 `uv`、`pv`统计。



## 浏览器支持



| ![Chrome](https://img.sevth.com/website/2020/04/13/afb9fb228a33ef1d32046c58e0514c84.png) | ![Firefox](https://img.sevth.com/website/2020/04/13/8514567e43b648e652cf9920105fba1e.png) | ![Safari](https://img.sevth.com/website/2020/04/13/f3fca4e5ed1f1d30c3f937da02d4103e.png) | ![Opera](https://img.sevth.com/website/2020/04/13/dc9fed3161a20ad4bd04f6de52e6bf5e.png) | ![Edge](https://img.sevth.com/website/2020/04/13/fb222f7bea11564f30705e8f756910a4.png) |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                           Latest ✔                           |                           Latest ✔                           |                           Latest ✔                           |                           Latest ✔                           |                           Latest ✔                           |



## 快速使用

**在 `head` 中添加 `script` 标签：**

```javas
<script src="https://cdn.sevth.com/website/counter_js/counter.min.js"></script> 
```

## 数据说明

### 返回数据

**引入 `script` 后，将返回四个数据：**

```
callback({
site_pv:12		//站点总访问量
site_uv:4			//站点访问人次
page_pv:6			//当前页面访问量
version:1.0		//版本号
})
```

其中 `site_pv` 将自动填入页面中 `id` 为 `counter-site-pv` 的容器中，`site_uv` 将自动填入页面中 `id` 为 `counter-site-uv` 的容器中，`page_pv` 将自动填入页面中 `id` 为 `counter-page_pv` 的容器中。 `version` 暂时没有其他作用。

### 配置

```javascript
<script>
    window.counter_config = {
    	strict: true		//启用严格uv统计模式
    }
</script>
```

这个开关的作用就是在统计 `uv` 时更严格。统计的原理是首次访问时将写入一个检测 `cookie` ，未开启时，每过24h，旧用户将按照新用户计入 `uv` ，也就是cookie将在24h后删除，再次访问就相当于一个新用户了，开启严格模式后，用户在24h内访问一次，将刷新`cookie` 时间。按访问自然人统计。

**注意：该配置默认是关闭的**

## 实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
    window.counter_config = {
    	strict: true
    }
    </script>
    <script src="https://cdn.sevth.com/website/counter_js/counter.min.js"></script>
</head>
<body>
<div>
总人数：<span id="counter-site-uv">99+</span>
<br>
此页面访问量：<span id="counter-page-pv">99+</span>
<br>
本站总访问量：<span id="counter-site-pv">99+</span>
</div>
</body>
</html>
```

## 

## 

## webpack 打包

1. 克隆仓库

   ```bash
   git clone https://github.com/sevth-developer/counter_js.git
   ```

2. 进入目录并安装依赖

   ```bash
   cd ./counter_js && npm install
   ```

3. 打包文件

   ```bash
   npm run build
   ```

   打包完成后会在 `dist` 目录生成打包好的文件。

## 计划

- [ ] 访问热度页面统计接口

## 警告⚠️

> 为推进互联网从 `http` 过渡到 `https` ，默认提供的加载地址仅支持 `https` 方式访问，如果有特殊需要，请自行下载文件引入。

## 支持

- [Issues](https://github.com/sevth-developer/counter_js/issues)

- [sevth的小破站](https://sevth.com)
- [sevthdev@gmail.com](mailto:sevthdev@gmail.com)