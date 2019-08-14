const Mock = require('mockjs');

/**
 * 新闻相关接口.
 */

const news_list = () => {
  const news_list = [
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
  ];
  
  const mockList = Mock.mock({
    'list|10-30': [
      {
        'id|+1': 0,
        title: '荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器',
        start_time: '2016-06-16  14:03',
        tags: ['水务集团', '荆楚网', '防汛'],
        detail: '6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。',
        publistLink: 'www.whwater.com',
        pub_author_avatar: '',
        pub_author_name: '水务集团',
        'like|1': [156, 233, 8, 6],
        'support|1': [156, 0],
        'discuss|1': [2, 0],
        pub_time: '2019-8-14 11:13:40'
      }
    ]
  });
  return mockList.list;
}

const news_detail = () => {
  // const news_detail = {
  //   id: 0,
  //   title: '荆楚网：新型防汛挡水板投入使用',
  //   meta: {
  //     views: 200,
  //     like: 0,
  //     diss: 25
  //   },
  //   pub_time: '2017-1-12 12:12',
  //   author: '海纳',
  //   content: '<p>荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器</p><p>6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。</p>',
  // }
  // return news_detail;

  const mockList = Mock.mock({
    'list|10-30': [
      {
        'id|+1': 0,
        title: '荆楚网：新型防汛挡水板投入使用 武水集团再添维修利器',
        start_time: '2016-06-16  14:03',
        tags: ['水务集团', '荆楚网', '防汛'],
        detail: '6月30日，记者从武汉市水务集团了解到，为了提升服务质量和效率，以高质量的文明施工促进品质城市建设，该公司武昌供水部勇于创新，引进“新型防汛挡水板”，用科技助力抢修，做到少打围、少挠民、快施工、保安全，减少对道路交通、市民生活和城市环境的影响。',
        publistLink: 'www.whwater.com',
        pub_author_avatar: '',
        pub_author_name: '水务集团',
        'like|1': [156, 233, 8, 6],
        'support|1': [156, 0],
        'discuss|1': [2, 0],
        pub_time: '2019-8-14 11:13:40'
      }
    ]
  });
  return mockList.list;
}

module.exports = {
  news_list: news_list(),
  news_detail: news_detail()
}