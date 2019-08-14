const { login, userinfo, logout } = require('./modules/user');
const { workorder } = require('./modules/workorder');
const { news_list, news_detail } = require('./modules/news');

module.exports = {
  // 新闻
  news_list,
  news_detail,

  test: {
    _custom_api: true,
    code: 200,
    msg: '这是自定义测试数据',
    data: {},
    status: true
  },

  login,
  logout,
  /** 用户详情 */
  userinfo,

  workorder
}