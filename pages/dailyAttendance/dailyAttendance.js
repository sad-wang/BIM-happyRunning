let rpx, speed, pct, scheduleFor,
    ctx, lineargradient;
speed = 1;
pct = 80;
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
    mileData: 8.07
},
writeBackground: function() {
  ctx.save();
  ctx.setStrokeStyle("#e7eaeb");
  ctx.beginPath();
  ctx.arc(300 * rpx, 268 * rpx, 258 * rpx, Math.PI, 0, false);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.draw();
},
writeSchedule: function() {
  var that = this;
  ctx.save();
  ctx.setStrokeStyle(lineargradient);
  ctx.beginPath();
  ctx.arc(300 * rpx, 268 * rpx, 258 * rpx, Math.PI, (-Math.PI / 100) * (100 - speed++), false);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.draw(true);
  if(speed >= (that.data.mileData * 10)) {
    clearInterval(scheduleFor);
  }
},
onReady: function(e) {
  ctx.setLineWidth(20 * rpx);
  ctx.setFillStyle("rgba(0, 0, 0, 0)");
  ctx.setLineCap('round');

  this.writeBackground();
  scheduleFor = setInterval(this.writeSchedule, 16);
},

onLoad: function (options) {
  var that = this;
  setTimeout(function() {
    that.setData({
      hidden: 1
    })
  }, 3000);
},
onShow:function () {
}
})
