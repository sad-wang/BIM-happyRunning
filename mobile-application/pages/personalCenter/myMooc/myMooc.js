// pages/personalCenter/myMooc/myMooc.js
const app = getApp()
Page({
  data: {
    moocLists: [
      {
        url:'../../mooc/moocDetails/moocDetails',
        img:'../../../images/mooc/mooc1.png',
        id: 1,
        title: '夏日瘦身特训 瘦出你的最佳身体',
        subTitle:'你本来就很美',
        totalPeriod: 7,
        finishedPeriod: 10,
      },
      {
        url:'../../mooc/moocDetails/moocDetails',
        img:'../../../images/mooc/mooc2.png',
        id: 2,
        title: '篮球技巧七日特训',
        subTitle: '你也可以制霸全场',
        totalPeriod: 20,
        finishedPeriod: 3,
      },
      {
        url:'../../mooc/moocDetails/moocDetails',
        img:'../../../images/mooc/mooc3.png',
        id: 3,
        title: '有氧健身训练',
        subTitle: '让自己健步如飞',
        totalPeriod: 10,
        finishedPeriod: 3,
      },
    ],
  },
  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -2000)
  },
  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, 0)
  },
  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let moocLists = this.data.moocLists
    moocLists[productIndex].xmove = xmove
    this.setData({
      moocLists: moocLists
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },
  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX
  },
  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if(e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if(e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
  },
  /**
   * 删除产品
   */
  handleDeleteProduct: function ({ currentTarget: { dataset: { id } } }) {
    let moocLists = this.data.moocLists
    let productIndex = moocLists.findIndex(item => item.id = id)

    moocLists.splice(productIndex, 1)

    this.setData({
      moocLists
    })
    if (moocLists[productIndex]) {
      this.setXmove(productIndex, 0)
    }
  },
  /**
   * slide-delete 删除产品
   */
  handleSlideDelete({ detail: { id } }) {
    let slideProductList = this.data.slideProductList
    let productIndex = slideProductList.findIndex(item => item.id = id)

    slideProductList.splice(productIndex, 1)

    this.setData({
      slideProductList
    })
  },
  navTo:function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})
