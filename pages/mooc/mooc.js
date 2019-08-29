// pages/mooc/mooc.js
Page({
  data: {
  },
  navTo:function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})
