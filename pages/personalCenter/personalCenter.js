// pages/personalCenter/personalCenter.js
const app = getApp()
Page({
  data: {
  },
  navTo:function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  onLoad: function () {

  },
  onShow:function () {
    this.setData({
      Shake: 0
    })
    let interval = setInterval(()=> {
      this.setData({
        Shake: 1
      })
      clearInterval(interval)
    },100)
  },
})
