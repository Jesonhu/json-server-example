const _ = require('lodash');


/**
 * 判断对象是否为 {}, 或 [].
 * @param {*} obj 
 */
const isNoData = (obj) => {
  return _.isEqual(obj, []) || _.isEqual(obj, {});
}


const resApi = () => {
  return {
    code: 8888,
    msg: '',
    data: {},
    status: false,
    _custom_api: true
  }
}
const resApiSuccess = (data = {}, msg = '') => {
  const _resApi = resApi();
  _resApi.code = 200;
  _resApi.data = data;
  _resApi.msg = msg;
  _resApi.status = true;
  return _resApi;
}

const resApiError = (msg = '') => {
  const _resApi = resApi();
  _resApi.code = 500;
  _resApi.msg = msg;
  return _resApi;
}

module.exports = {
  isNoData,

  resApiSuccess,
  resApiError
}