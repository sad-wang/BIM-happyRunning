// pages/mooc/mooc.js
Page({
  data: {
    searchBoxState:false,
  },
  navTo:function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  changeSearchBoxState:function (e) {
    this.setData({
      searchBoxState:true
    })
  },
  confirmSearch:function (e) {
    this.setData({
      searchBoxState:false
    })

  }
})
