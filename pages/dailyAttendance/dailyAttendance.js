import * as echarts from '../../ec-canvas/echarts';
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
let dateArray = [];

//获取日期填入dataArray数组
function getDateArray() {
  let date = new Date(),
      day, dayOfWeek, month, year;

  //获取当前日、星期、月、年
  day = date.getDate();
  dayOfWeek = date.getDay();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  //循环遍历获得本周日期
  if(dayOfWeek === 0) {
    dayOfWeek = 7;
  }
  for (let i = dayOfWeek - 1, subDay = day; i >= 0; i--) {
    if (subDay === 0) {
      subDay = getDayBefore(month - 1, year);
    }
    dateArray[i] = subDay--;
  }
  for (let i = dayOfWeek, addDay = day + 1; i < 7; i++) {
    if(addDay === 29 || addDay === 30 || addDay === 31 || addDay === 32) {
      addDay = getDayNext(addDay, month, year);
    }
    dateArray[i] = addDay++;
  }
  //将星期放入数组
  dateArray[7] = dayOfWeek;
}

//判断获取上个月的最后一天
function getDayBefore (subMonth, year) {
  let subDay;
  if (subMonth === 0 || subMonth === 1 || subMonth === 3 || subMonth === 5 || subMonth === 7 || subMonth === 8 || subMonth === 10) {
    subDay = 31;
  } else if (subMonth === 4 || subMonth === 6 || subMonth === 9 || subMonth === 11) {
    subDay = 30;
  } else if (subMonth === 2) {
    if (year % 4 === 0) {
      subDay = 29;
    } else {
      subDay = 28;
    }
  }

  return subDay;
}

//判断是否为本月最后一天并获取下一天
function getDayNext (addDay, month, year) {
  if((addDay === 29 || addDay === 30) && month === 2) {
    if (year % 4 != 0) {
      addDay = 1;
    } else if (addDay === 30) {
      addDay = 1;
    }
  }
  if(addDay === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) addDay = 1;
  if (addDay === 32 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) addDay = 1;

  return addDay;
}

Page({
  data: {
    date1: 0,
    date2: 0,
    date3: 0,
    date4: 0,
    date5: 0,
    date6: 0,
    date7: 0,
    dayOfWeek: 1,
    Shake: 0,
    ec: null,
    optionData:null
},
  onLoad:function (options) {
        optionData =  {

          color: ["#37A2DA", "#32C5E9", "#67E0E3",'#FF4500'],
          series: [{
            min: 0,                     // 最小值
            max: 120,    
            fontSize: 7,
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%',
              fontSize: 15,
            },
            axisTick: { // 坐标轴小标记
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 5,
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {

              textStyle: {

                fontSize: 8,
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 3,
                shadowBlur: 0,
                color: [
                  [0.25, '#70CEB0'],
                  [0.4999, '#55C3D1'],
                  [0.50, '#ff4500'],
                  [0.58, '#55C3D1'],
                  [0.83, '#4CB2D6'],
                  [1,'#4DB5D6']
                ],

              }
            },
            data: [{
              value: 35,

            }]

          }]
        };
    getDateArray();
    this.setData({
      date1: dateArray[0],
      date2: dateArray[1],
      date3: dateArray[2],
      date4: dateArray[3],
      date5: dateArray[4],
      date6: dateArray[5],
      date7: dateArray[6],
      dayOfWeek: dateArray[7],
      ec:{
        onInit: initChart,
      },
      optionData:optionData,
    })
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
