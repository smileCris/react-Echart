const Mock = require('mockjs')
const config = require('../src/utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  rentalPeakSeriesDate: {
    wash: [
      {
        date: '2018/08/19',
        time: 22,
      }, 
      {
        date: '2018/08/20',
        time: 30,
      },
      {
        date: '2018/08/21',
        time: 15,
      },
      {
        date: '2018/08/22',
        time: 30,
      },
      {
        date: '2018/08/23',
        time: 5,
      },
      {
        date: '2018/08/24',
        time: 8,
      },
      {
        date: '2018/08/25',
        time: 12,
      },
      {
        date: '2018/08/26',
        time: 25,
      },
      {
        date: '2018/08/27',
        time: 18,
      },
      {
        date: '2018/08/28',
        time: 12,
      },
      {
        date: '2018/08/29',
        time: 16,
      },
      {
        date:'2018/08/30',
        time: 20,
      },
      {
        date: '2018/08/31',
        time: 10,
      },
      {
        date: '2018/09/01',
        time: 16,
      },
      {
        date: '2018/09/02',
        time: 25,
      },
    ],
    dry: [
      {
        date: '2018/08/19',
        time: 5,
      }, 
      {
        date: '2018/08/20',
        time: 10,
      },
      {
        date: '2018/08/21',
        time: 15,
      },
      {
        date: '2018/08/22',
        time: 30,
      },
      {
        date: '2018/08/23',
        time: 25,
      },
      {
        date: '2018/08/24',
        time: 18,
      },
      {
        date: '2018/08/25',
        time: 12,
      },
      {
        date: '2018/08/26',
        time: 25,
      },
      {
        date: '2018/08/27',
        time: 18,
      },
      {
        date: '2018/08/28',
        time: 12,
      },
      {
        date: '2018/08/29',
        time: 16,
      },
      {
        date:'2018/08/30',
        time: 2,
      },
      {
        date: '2018/08/31',
        time: 10,
      },
      {
        date: '2018/09/01',
        time: 12
      },
      {
        date: '2018/09/02',
        time: 25,
      },
    ],
  },
  washUsageRateSeries: [
    {
      name: '棉织物',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '化纤',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '混合洗',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '丝绸精细',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '羊毛',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  dryUsageRateSeries: [
    {
      name: '棉织物',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '化纤',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '混合洗',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
  ],
  rentIncomeSeries: [
    {
      name: '洗衣机',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '干洗机',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
  ],
  scoringSeries: {
    name: '评分',
    type: 'bar',
    data: [2, 4, 8, 23, 15, 20],
    barWidth: '50%',
    label: {
      normal: {
        show: true,
        position: 'top'
      }
    }
  },
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}
