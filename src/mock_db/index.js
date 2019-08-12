const { login, userinfo, logout } = require('./modules/user');
const { workorder } = require('./modules/workorder');

module.exports = {
  // 新闻
  news_list: [
    {
      id: 0,
      title: '荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器',
      tags: ['水务集团', '荆楚网', '防汛'],
      detail: '6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。',
      publistLink: 'www.whwater.com',
      pub_author_avatar: '',
      pub_author_name: '水务集团',
      meta: {
        like: 156,
        support: 156,
        discuss: 2
      }
    },
    {
      id: 1,
      title: '荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器',
      tags: ['水务集团', '荆楚网', '防汛'],
      detail: '6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。',
      publistLink: 'www.whwater.com',
      pub_author_avatar: '',
      pub_author_name: '水务集团',
      meta: {
        like: 156,
        support: 156,
        discuss: 2
      }
    },
    {
      id: 2,
      title: '荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器',
      tags: ['水务集团', '荆楚网', '防汛'],
      detail: '6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。',
      publistLink: 'www.whwater.com',
      pub_author_avatar: '',
      pub_author_name: '水务集团',
      meta: {
        like: 156,
        support: 156,
        discuss: 2
      }
    }
  ],
  news_detail: {
    id: 0,
    title: '荆楚网：新型防汛挡水板投入使用',
    meta: {
      views: 200,
      like: 0,
      diss: 25
    },
    pub_time: '2017-1-12 12:12',
    author: '海纳',
    content: '<p>荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器</p><p>6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。</p>',
  },

  // 
  auth_login: [
    
  ],

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