// pages/mooc/moocLists/moocLists.js
Page({
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
})
