// pages/letitgo_zh/letitgo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  timeupdate:function(e){
    var time = e.detail.currentTime;
    if(time>226){
      var myVideo = wx.createVideoContext('myVideo', this);
      myVideo.stop();
    }

  }

})