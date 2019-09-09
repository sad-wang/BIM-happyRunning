let rpx;
//获取屏幕宽度，获取自适应单位
wx.getSystemInfo({
  success: function(res) {
    rpx = res.windowWidth / 750;
  },
})
// let speed = 1,
//     pct = 80;
// let lineargradient = ctx.createLinearGradient(10, 268, 590, 268);
// lineargradient.addColorStop(0, 'rgba(61, 183, 199, 1)');
// lineargradient.addColorStop(1, 'rgba(1, 189, 142, 1)');


// //绘制当前进度条
// function writeSchedule(n) {
//   ctx.save();
//   ctx.setStrokeStyle(lineargradient);
//   ctx.beginPath();
//   ctx.arc(300, 268, 258, Math.PI, (-Math.PI / 100) * (100 - n), false);
//   ctx.fill("evenodd");
//   ctx.stroke();
//   ctx.restore();
// }

//绘制进度条背景
function writeBackground(ctx) {
  ctx.save();
  ctx.setStrokeStyle("#e7eaeb");
  ctx.beginPath();
  ctx.arc(300 * rpx, 268 * rpx, 258 * rpx, Math.PI, 0, false);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.draw();
  ctx.restore();
}

// (function drawFrame() {
//   ctx.requestAnimationFrame(drawFrame);
//   writeSchedule(speed);

//   if (speed > pct) speed = 0;
//   speed += 1;
// }());

Page({
  data: {
    hidden: 0
},
onReady: function(e) {
  let ctx = wx.createCanvasContext('scheduleCanvas');

  ctx.setLineWidth(20 * rpx);
  ctx.setFillStyle("rgba(0, 0, 0, 0)");
  ctx.setLineCap('round');

  writeBackground(ctx);
  // ctx.requestAnimationFrame(drawFrame);
},
onLoad: function (options) {
  var that = this;
  setTimeout(function() {
    that.setData({
      hidden: 1
    })
  }, 3000)
},
onShow:function () {
}
})
