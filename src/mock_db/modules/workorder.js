const Mock = require('mockjs');

/**
 * 工单数据．
 */
const workorder = () => {
  const mockList = Mock.mock({
    'list|10-30': [
      {
        'id|+1': 0,
        title: '武昌区-某某泵房',
        sub_title: '泵房2号水泵发生故障，无法运行',
        owner: '吴加好',
        start_time: '2016-06-16  14:03',
        'status|1': [0, 1]
      }
    ]
  });
  return mockList.list;
}

module.exports = {
  workorder: workorder()
}