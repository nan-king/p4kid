// pages/main.js
var app = getApp();
var sectionMap = app.globalData.sectionMap;
Page({
  //页面的初始数据
  data: {
    speed: '',
    selectedIndex: -2,
    key: 'line_0'
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    var index= options.index;
    var page = app.globalData.pages[index];
    this.setData(
      {
        page : page,
        lyricLines: page.lyricLines
      }
    );
    this.videoCtx = wx.createVideoContext('myVideo');
    this.audioCtx = wx.createAudioContext('myAudio', this);
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
  },
  speak:function(e){

    var en = e.target.dataset.en;
    //https://fanyi.baidu.com/gettts?lan=en&text=hello%20everyone&spd=3&source=web
    this.audioCtx.setSrc('https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(en) + '&spd=3&source=web');
    this.audioCtx.play();
  },
  chooseLine: function (e) {

    var time = e.target.dataset.time;
    var index = e.target.dataset.index
    var item = this.data.lyricLines[index];
    var next = this.data.lyricLines[index + 1];
    var duration = next ? next.time - item.time : 5;
    var videoCtx = this.videoCtx;

    videoCtx.seek(time + 1);
    setTimeout(() => videoCtx.pause(), 100);
    console.log(this.audioCtx, Object.keys(this.audioCtx))
    //https://fanyi.baidu.com/gettts?lan=en&text=hello%20everyone&spd=3&source=web
    this.audioCtx.setSrc('https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(item.en) + '&spd=3&source=web');

    //this.audioCtx.playbackRate(0.5)
    this.audioCtx.play();
    this.setData({
      selectedIndex: index,
      key: 'line_' + index
    });
    if (this.lazyPlay) {
      clearTimeout(this.lazyPlay);
      this.lazyPlay = 0;
    }
    this.lazyPlay = setTimeout(() => {
      videoCtx.play();
      videoCtx.seek(time - 0.5);
      this.lazyPlay = 0;
    }, duration / 0.8 * 1000);
  },
  timeupdate: function (e) {
    //console.log(e)
    var time = e.detail.currentTime;
    var lines = this.data.lyricLines;
    var index = this.data.selectedIndex;
    var start = 0;
    var current = lines[index];
    if (current && time > current.time) {
      var next = lines[index + 1];
      if (next && next.time > time) {
        return;
      }
      start = index;
    }
    while (true) {
      if (time + 0.5 < lines[start].time) {
        start = start - 1;
        break;
      }
      start++;
      if (start >= lines.length) {
        start = lines.length - 1;
        break;
      }
    }
    if (this.data.selectedIndex != start) {
      this.setData({
        selectedIndex: start,
        key: 'line_' + start
      });
    }
  }
})