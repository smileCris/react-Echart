const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'dashboard',
    name: '数据分析',
    route: '/dashboard',
  },
  {
    id: '2',
    name: 'HomeConnect账号管理',
    icon: 'form',
  },
  {
    id: '21',
    mpid: '2',
    bpid: '2',
    name: 'HomeConnect账号列表',
    route: '/accountManage',
  },
  {
    id: '3',
    name: '设备管理',
    icon: 'tool',
  },
  {
    id: '31',
    mpid: '3',
    bpid: '3',
    name: '设备列表',
    route: '/deviceManage',
  },
  {
    id: '4',
    name: '预约订单管理',
    icon: 'file',
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: '预约订单列表',
    route: '/orderManage',
  },
  {
    id: '5',
    name: '用户管理',
    icon: 'user',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: '用户列表',
    route: '/userManage/userList',
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: '用户评价',
    route: '/userManage/userEvaluation',
  },
  {
    id: '6',
    name: '优惠券管理',
    icon: 'red-envelope',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: '优惠券列表',
    route: '/couponManage',
  },
  {
    id: '7',
    name: '系统通知',
    icon: 'sound',
  },
  {
    id: '71',
    bpid: '7',
    mpid: '7',
    name: '系统通知列表',
    route: '/systemNotice',
  },
  {
    id: '8',
    name: '应用管理',
    icon: 'appstore-o',
  },
  {
    id: '81',
    bpid: '8',
    mpid: '8',
    name: 'APP首页广告管理',
    route: '/applicationManage/adManage',
  },
  {
    id: '82',
    bpid: '8',
    mpid: '8',
    name: '洗衣程序价格信息管理',
    route: '/applicationManage/price',
  },
  {
    id: '9',
    name: '门店管理',
    icon: 'shop',
  },
  {
    id: '91',
    bpid: '9',
    mpid: '9',
    name: '门店列表',
    route: '/storeManage',
  },
  {
    id: '10',
    name: '系统管理',
    icon: 'schedule',
  },
  {
    id: '101',
    bpid: '10',
    mpid: '10',
    name: '账号管理',
    route: '/systemManage/account',
  },
  {
    id: '102',
    bpid: '10',
    mpid: '10',
    name: '角色管理',
    route: '/systemManage/role',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
