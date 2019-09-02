// pages/personalCenter/myScore/myScore.js
import * as echarts from '../../../ec-canvas/echarts';
let chart = null;

let optionData ={
  color:['#c7ccd2', '#9457e6','#57d3e6'],
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
        {value:20, name:'日常运动',},
        {value:70, name:'活动/比赛的参加'},
      ],
    }
  ]
};
//初始化 chart
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
  // 页面数据
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
})
