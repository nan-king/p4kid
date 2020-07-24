//百度翻译tts接口
var audioPrefix = 'https://fanyi.baidu.com/gettts?lan=en&spd=3&source=web&text=';
// [{
//     en: "englsh contents",
//     zh: "中文翻译",
//     text: en + '<br>' + zh
//   }..]
var content = require('./content.js').data;

Page({
  onLoad: function (options) {
    var data = {
      audioSrc: getApp().globalData.fence_ambulance,
      content: content
    }
    this.setData(data);
    this.audioCtx = wx.createAudioContext('myAudio', this);
  },
  chooseLine: function (e) {
    var index = e.target.dataset.index
    var item = this.data.content[index];
    var encodedItem = encodeURIComponent(item.en) ;
    var audioSrc = audioPrefix + encodedItem;
    this.setData({
      audioSrc: getApp().globalData.fence_ambulance
    })
    this.audioCtx.seek(item.time);
    this.audioCtx.play();
    this.setData({
      selectedIndex: index
    });
  },

  timeupdate: function (e) {
    //console.log(e)
    var time = e.detail.currentTime;
    var lines = this.data.content;
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
        selectedIndex: start
      });
    }
  },
  onShareAppMessage(res) {
    return {
      title: '护栏还是救护车', path: 'pages/start/start'
    }
  }
})