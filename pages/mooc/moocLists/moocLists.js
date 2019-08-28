// pages/mooc/moocLists/moocLists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moocLists: [
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 1,
        title: '夏日瘦身特训 瘦出你的最佳身体',
        subTitle:'你本来就很美',
        totalPeriod: 7,
        finishedPeriod: 10,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc2.png',
        id: 2,
        title: '篮球技巧七日特训',
        subTitle: '你也可以制霸全场',
        totalPeriod: 20,
        finishedPeriod: 3,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc3.png',
        id: 3,
        title: '有氧健身训练',
        subTitle: '让自己健步如飞',
        totalPeriod: 10,
        finishedPeriod: 3,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 1,
        title: '夏日瘦身特训 瘦出你的最佳身体',
        subTitle:'你本来就很美',
        totalPeriod: 7,
        finishedPeriod: 10,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 2,
        title: '篮球技巧七日特训',
        subTitle: '你也可以制霸全场',
        totalPeriod: 20,
        finishedPeriod: 3,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 3,
        title: '有氧健身训练',
        subTitle: '让自己健步如飞',
        totalPeriod: 10,
        finishedPeriod: 3,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 1,
        title: '夏日瘦身特训 瘦出你的最佳身体',
        subTitle:'你本来就很美',
        totalPeriod: 7,
        finishedPeriod: 10,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 2,
        title: '篮球技巧七日特训',
        subTitle: '你也可以制霸全场',
        totalPeriod: 20,
        finishedPeriod: 3,
      },
      {
        url:'../moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 3,
        title: '有氧健身训练',
        subTitle: '让自己健步如飞',
        totalPeriod: 10,
        finishedPeriod: 3,
      }
    ],
  },


  navTo:function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
