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

})
