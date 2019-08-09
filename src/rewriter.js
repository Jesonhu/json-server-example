

// 需要重写的路由在 `defineWriteMap` 增加.
const defineWriteMap = {
  '/news/list': '/news_list',
  '/announcement/list': 'announcement_list'
}

/**
 * 重写生成器.
 * 
 * @param {string} source 匹配的路由地址.
 * @param {string} target 重写后的路由.
 * @return {Object} 
 * @example
 * ```
 * rewriterBuilder('/a', '/b');
 * => { 
 *  '/a': '/b',
 *  '/a/*': '/b/$1',
 *  '/a?*': '/b?$1'
 * }
 * ```
 */
const rewriterBuilder = (source, target) => {
  const keyMap = [source, `${source}/*`, `${source}?*`];
  const valueMap = [target, `${target}/$1`, `${target}?$1`];
  const resObj = {};

  for (let i = 0; i < keyMap.length; i++) {
    resObj[keyMap[i]] = valueMap[i];
  }
  return resObj;
}

const mapBuider = (obj) => {
  let resObj = {};
  for (let key in obj) {
    const rewriteBuild = rewriterBuilder(key, obj[key]);
    resObj = Object.assign({}, resObj, rewriteBuild);
  }
  return resObj
}

const rewriteMapList = mapBuider(defineWriteMap);

const rewriterList = Object.assign({},
  { '/api/*': '/$1' },
  rewriteMapList
)

module.exports = rewriterList;