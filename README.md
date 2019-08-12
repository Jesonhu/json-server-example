# json-server 定制使用

## 基本使用(baseic use)

`src/mock_db/index.js` 增加导出字段作为路由.

## 地址重写(rewrite)

`src/config/index.js` 文件中修改 `writeList` `key` 和 `value`

## 自定义接口

可以将接口返回全部自定义化, 参考 `src/mock_db/modules/user` 的 `logout` 返回值。使用自定义接口的关键在于 `_custom_api: true` 字段和值.


## Features

+ 无数据返回处理
+ api返回统一格式
+ 自定义接口.

## 参考资料

+ [json-server](https://github.com/typicode/json-server)
+ [浅谈REST API](https://www.cnblogs.com/ibrahim/p/REST-API.html)