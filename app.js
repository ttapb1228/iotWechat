// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    info: '',
    token: '',
    productList: [],
    departmentList: [],
    title1: '所有部门',
    toUser: false,
    httpUrl: 'https://prod.dgiotcloud.cn/',
    serverUrl: 'https://prod.dgiotcloud.cn',
    tag: '',
  }
})