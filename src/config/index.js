module.exports = {
  /** 重写地址列表 */
  rewriteList: {
    '/news/list': '/news_list',
    '/news/detail': '/news_detail',
    '/announcement/list': 'announcement_list',

    // auth
    '/auth/login': '/login',
    '/auth/logout': '/logout',
    '/user/info': '/userinfo'
  }
}