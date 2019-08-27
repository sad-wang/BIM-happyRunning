// pages/personalCenter/myScore/myScore.js
import * as echarts from '../../../ec-canvas/echarts';
let chart = null;

let optionData ={
  color:['#c7ccd2', '#9457e6','#57d3e6','#57e694'],
  series: [
    {
      type:'pie',
      radius: ['64%', '80%'],
      label: {
        normal: {
          show: false,
          position: 'center'
        },
      },
      data:[
        {value:0, name:'',},
        {value:20, name:'固定加分'},
        {value:70, name:'日常打卡',},
        {value:70, name:'活动/比赛的参加'},
      ],
    }
  ]
};
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = optionData;
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    ec: {
      onInit: initChart
    },
    optionData:optionData
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    console.log(1)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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
