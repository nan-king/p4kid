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





/**
 * ,
    "pages/section/section",
    "pages/letitgo/letitgo",
    "pages/letitgo_zh/letitgo"
 */
/*
如释冰 Let it go
The snow glows white on the mountain tonight
霜辄夜白，日暮尽苍生远。  
Not a footprint to be seen
独游偶影江水寒。        
A kingdom of isolation
山门内外蜃城孑然。      
And it looks like I'm the queen
王于冰雪定萧山。
The wind is howling like this swirling storm inside
风掣千刃，寒啸千载，慰我心安。
Couldn't keep it in, heaven knows I've tried
身得托沧海，血以荐轩辕。
Don't let them in, don't let them see
勿近勿探，阴翳犹在。
Be the good girl you always have to be
纲礼持之，也堪念存心善。
Conceal, don't feel, don't let them know
昨日无常，今时无往，
Well, now they know
然，尽矣说。
Let it go, let it go
我如风，任去留。
Can't hold it back anymore
休将鸿鹄比伏囚。
Let it go, let it go
我如虹，任天阔。
Turn away and slam the door;
且听狂澜度三秋。
I don't care what they're going to say
毋言多，不敢同苟合。
Let the storm rage on
一霰风摊破。
The cold never bothered me anyway
唯我，敢挑只身赴寒流。
It's funny how some distance makes everything seem small
啼笑远烟皆邈末，屋舍俨若蚁蝼。
And the fears that once controlled me can't get to me at all
时维往矣不胜惶恐，今非彼可制我。
It's time to see what I can do.To test the limits and break through
适于旦夕，何以为兮。假我之力，惊刹天地。
No right, no wrong, no rules for me
谁是谁非，方圆无稽。
I'm free
肆意行。
Let it go, let it go
我如风，任去留。
I am one with the wind and sky
浩荡中天气无咎。
Let it go, let it go
我如虹，任天阔。
You'll never see me cry
初晴乍逢霁雨后。
Here I stand and here I'll stay
驾寒宫，划地为楼，
Let the storm rage on
不惧风萧索。
My power flurries through the air into the ground
力拔千钧气贯地，聚息摄魄冰。
My soul is spiraling in frozen fractals all around
灵动珠齑腾霜起，重于游丝轻于絮。
And one thought crystallizes like an icy blast
花晶盘郁撷绮思，玉宇观飞惊。
I'm never going back, the past is in the past
过眼翻覆往昔，何必执于归去。
Let it go, let it go
我如风，任去留。
And I'll rise like the break of dawn
愿化羲和驱夜魔。
Let it go, let it go
我如虹，任天阔。
That perfect girl is gone
无暇过隙便无踪。
Here I stand in the light of day
驾寒宫，向阳高耸。
Let the storm rage on
一霰风摊破。
The cold never bothered me anyway
唯我，敢挑只身赴寒流。
*/