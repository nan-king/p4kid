// pages/letitgo/letitgo.js
var globalData = getApp().globalData;
Page({
  data: {
    src: globalData.letitgo,
    lyricLines: globalData.lyricLines,
    selectedIndex :-2,
    key:'line_0'
  },
  onLoad: function (options) {
    this.setData({ src: getApp().globalData.letitgo});
    this.videoCtx = wx.createVideoContext('myVideo',this);
    this.audioCtx = wx.createVideoContext('myAudio',this);
  },
  chooseLine:function(e){
    
    var time = e.target.dataset.time;
    var index = e.target.dataset.index
    var item = this.data.lyricLines[index];
    var next = this.data.lyricLines[index+1];
    var duration = next? next.time - item.time : 5;
    var videoCtx = this.videoCtx;

    videoCtx.seek(time+1);
    setTimeout(()=>videoCtx.pause(),100);
    this.audioCtx.setSrc('https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(item.en)+'&spd=3&source=web');

    this.audioCtx.playbackRate(0.5)
    this.audioCtx.play();
    this.setData({
      selectedIndex: index,
      key: 'line_' + index
    });
    if (this.lazyPlay){
      clearTimeout(this.lazyPlay);
      this.lazyPlay = 0;
    }
    this.lazyPlay = setTimeout(()=>{
      videoCtx.play();
      videoCtx.seek(time-0.5);
      this.lazyPlay = 0;
    }, duration/0.8*1000);
  },
  timeupdate:function(e){
    //console.log(e)
    var time = e.detail.currentTime;
    var lines = this.data.lyricLines;
    var index = this.data.selectedIndex;
    var start = 0;
    var current = lines[index];
    if (current && time>current.time){
      var next = lines[index+1];
      if (next && next.time>time){
        return;
      }
      start = index;
    }
    while (true){
      if (time+0.5 < lines[start].time){
        start = start-1;
        break;
      }
      start++;
      if (start >= lines.length){
        start = lines.length-1;
        break;
      }
    }
    if (this.data.selectedIndex != start){
      this.setData({
        selectedIndex:start,
        key:'line_'+start
      });
    }
  }
})