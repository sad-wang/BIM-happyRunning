// pages/personalCenter/myPoints/myPoints.js

import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
let chart = null;
let optionData = null;
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
    // 页面数据
    data: {
        currentTab: 0,
        ec: null,
        optionData:null
    },

    onLoad:function(options){
        backgroundColor: "#ffffff",
            optionData = {
                color:['#9457e6','#57d3e6'],
                series: [
                    {
                        type:'pie',
                        radius: ['64%', '80%'],
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        data:[
                            {value:20, name:'日常运动',},
                            {value:70, name:'活动/比赛的参加'},
                        ],
                    }
                ]
            };
        this.setData({
            ec:{
                onInit: initChart,
            },
            optionData:optionData,
        })
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
    }
})
