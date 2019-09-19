
let a = 1
wx.getLocation({
  type: 'wgs84',
  success(res) {
    console.log(res.latitude)
    console.log(res.longitude)
    console.log(res.speed)
    console.log(res.accuracy)
  }
})
wx.startLocationUpdateBackground({
  success(res) {
    console.log("success")
    setInterval(
      res => {
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            console.log("第" + a + "次")
            console.log("纬度:" + res.latitude + "经度" + res.longitude)
          },
          complete(res) {
            console.log(res)
          }
        })
        ++a
      }
      , 1000)
  }
})
let rpx, speed, scheduleFor,
    ctx, lineargradient;
speed = 1;
ctx = wx.createCanvasContext('scheduleCanvas');
lineargradient = ctx.createLinearGradient(10, 268, 590, 268);
lineargradient.addColorStop(0, 'rgba(61, 183, 199, 1)');
lineargradient.addColorStop(1, 'rgba(1, 189, 142, 1)');

//获取屏幕宽度，获取自适应单位
wx.getSystemInfo({
  success: function(res) {
    rpx = res.windowWidth / 750;
  },
})

Page({
  data: {
    hidden: 0,
    mileData: 6.08
  },
//绘制进度条背景
  drawBackground: function() {
    ctx.save();
    ctx.setStrokeStyle("#e7eaeb");
    ctx.beginPath();
    ctx.arc(300 * rpx, 268 * rpx, 258 * rpx, Math.PI, 0, false);
    ctx.stroke();
    ctx.restore();
    ctx.draw();
  },
//绘制进度条圆点
  drawArc: function() {
    let PI = Math.PI * 2,
        rad = 4 * rpx;

    // ctx.save();
    // ctx.setLineWidth(4 * rpx);
    // ctx.beginPath();
    // ctx.arc(300 * rpx, 268 * rpx, 228 * rpx, Math.PI, 0, false);
    // ctx.stroke();
    // ctx.restore();

    ctx.save();
    ctx.setFillStyle("#00bd8d");
    ctx.beginPath();
    ctx.arc(73 * rpx, 255 * rpx, rad, 0, PI, true);
    ctx.moveTo(0, 0);
    // ctx.arc(83 * rpx, 197 * rpx, rad, 0, PI, true);
    // ctx.moveTo(0, 0);
    ctx.arc(116 * rpx, 133 * rpx, rad, 0, PI, true);
    ctx.moveTo(0, 0);
    // ctx.arc(167 * rpx, 83 * rpx, rad, 0, PI, true);
    // ctx.moveTo(0, 0);
    ctx.arc(230 * rpx, 50 * rpx, rad, 0, PI, true);
    ctx.moveTo(0, 0);
    // ctx.arc(299 * rpx, 40 * rpx, rad, 0, PI, true);
    // ctx.moveTo(0, 0);
    ctx.arc(368 * rpx, 50 * rpx, rad, 0, PI, true);
    ctx.moveTo(0, 0);
    // ctx.arc(431 * rpx, 83 * rpx, rad, 0, PI, true);
    // ctx.moveTo(0, 0);
    ctx.arc(482 * rpx, 133 * rpx, rad, 0, PI, true);
    ctx.moveTo(0, 0);
    // ctx.arc(515 * rpx, 197 * rpx, rad, 0, PI, true);
    // ctx.moveTo(0, 0);
    ctx.arc(525 * rpx, 255 * rpx, rad, 0, PI, true);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.setFillStyle("#f6224a");
    ctx.beginPath();
    ctx.arc(368 * rpx, 50 * rpx, 4 * rpx, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
    ctx.draw(true);

  },
//绘制实时进度条
  drawSchedule: function() {
    var that = this;

    ctx.save();
    ctx.setStrokeStyle(lineargradient);
    ctx.setLineWidth(20 * rpx);
    ctx.beginPath();
    ctx.arc(300 * rpx, 268 * rpx, 258 * rpx, Math.PI, (-Math.PI / 100) * (100 - speed++), false);
    ctx.stroke();
    ctx.restore();
    ctx.draw(true);

    if(speed >= (that.data.mileData * 10) || speed >= 100) {
      clearInterval(scheduleFor);
    }
  },
  onReady: function(e) {
  },

  onLoad: function (options) {
    //初始化ctx样式
    ctx.setLineWidth(20 * rpx);
    ctx.setFillStyle("rgba(0, 0, 0, 0)");
    ctx.setLineCap('round');
    //绘制图形
    this.drawBackground();
    this.drawArc();
    scheduleFor = setInterval(this.drawSchedule, 16);


  },
  onShow:function () {
    //三秒后隐藏提示框
    var that = this;
    setTimeout(function() {
      that.setData({
        hidden: 1
      })
    }, 3000);
  }
})
