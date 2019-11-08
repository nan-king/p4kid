// pages/main.js
var app = getApp();
Page({
  //页面的初始数据
  data: {
    speed:''
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    var index= options.index;
    var page = app.globalData.pages[index];
    this.setData(
      {
        page : page
      }
    );
    this.videoCtx = wx.createVideoContext('myVideo');
  },
  play : function(){
    if (this.data.speed == 'slow'){
      this.setData({ speed: 'slow' })
    }else{
      this.setData({ speed: 'normal' })
    }
  },
  slowPlay: function () {
    var rtv = this.videoCtx.playbackRate(0.8)
    this.setData({ speed:'slow'})
    this.videoCtx.play();
  },
  normalPlay: function () {
    this.setData({ speed: 'normal' })
    this.videoCtx.playbackRate(1)
    this.videoCtx.play();
  },
  stop: function () {
    this.setData({ speed: '' })
    this.videoCtx.stop();
  }
})