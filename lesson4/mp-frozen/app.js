//app.js
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

var lyric = `13.The snow glows white on the mountain tonight;  今夜白雪漫山闪亮；
17.Not a footprint to be seen;                                  却寻不见其他脚印；
20.A kingdom of isolation;                                      在与世隔绝的王国；
24.And it looks like I'm the queen;                             我就像这里的女王；
28.The wind is howling like this swirling storm inside;         狂风咆哮得像我内心一样的纷乱；
35.Couldn't keep it in, heaven knows I've tried.                抑制不了它(魔法？)了，上天知道我努力过；
42.Don't let them in,                                           不让他们进来，
44.don't let them see;                                          不让他们看到；
46.Be the good girl you always have to be;                      做一个好女孩，一如继往；
49.Conceal, don't feel,                                         掩饰，不去触摸(避免暴露魔法)，
51.don't let them know;                                         不让他们知道；
55.Well, now they know;                                         好了，被发现了；
59.Let it go,let it go;                                         让他去吧，随心而动；
62.Can't hold it back anymore;                                  不再隐忍；
66.Let it go,let it go;                                         任它去吧，任它去吧；
69.Turn away and slam the door;                                 转过身来，了无牵挂（甩上门）；
74.I don't care what they're going to say;                      我不在乎他们怎样说；
80.Let the storm rage on;                                       让风暴怒吼吧；
84.The cold never bothered me anyway;                           严寒于我何惧；
90.It's funny how some distance                                 有趣的是，距离怎么
94.makes everything seem small;                                 令万物变小？
97.And the fears that once controlled me                        一度箝制我的恐惧
101.can't get to me at all;                                     已经离我远去；
104.It's time to see what I can do;                             是时候看看我的潜力了（我能够做什麼）；
109.To test the limits and break through;                       试验我的极限和突破；
112.No right, no wrong, no rules for me;                        没有对错，不要规则（规范我）；
116.I'm free;                                                   我自由了；
120.Let it go, let it go;                                       任它去吧，任它去吧；
124.I am one with the wind and sky;                             我随风与天同在；
127.Let it go, let it go;                                       随心而行，随心而动；
130.You'll never see me cry;                                    不再哭泣（你看不到）；
135.Here I stand and here I'll stay;                            我就站在这里，留了下来；
141.Let the storm rage on;                                      让风暴怒吼吧；
152.My power flurries through the air into the ground;          我有上天入地的能量（空气，地下）；
159.My soul is spiraling in frozen fractals all around;         心驾冰凌扶摇而上（我的灵魂盘旋而上，随着四周的分形的冰片）；
167.And one thought crystallizes like an icy blast;             一念成晶（一个想法像冰雹一样结晶）；
174.I'm never going back, the past is in the past;              不再回头，往事随风（过去已成往事）；
182.Let it go, let it go;                                       随心而行，随心而动；
185.And I'll rise like the break of dawn;                       我像旭日东升；
189.Let it go, let it go;                                       随心而行，随心而行；
193.That perfect girl is gone;                                  那个完美女孩已不在了；
196.Here I stand in the light of day;                           我就站在日光之下；
204.Let the storm rage on;                                      让风暴怒吼吧；
210.The cold never bothered me anyway;                          不惧寒风（寒冷再也不能烦扰我了）！`
var lyricLines = buildLyricLines(lyric);
function buildLyricLines(lyric){
  var lyricLines = [];
  for (var line of lyric.replace(/^\s+|\s+$/g, '').split(/[\r\n]+/)) {
    var m = line.match(/\s*(\d+)\.([\u0001-\u0100]+?)\s+([\u4e00-\uffff][^\r\n]*)/);
    if (m) {
      var en = m[2];
      var zh = m[3].replace(/[\(（][^)]+[\)\）]/, '<sub>$&</sub>');
      lyricLines.push({
        zh: zh,
        en: en,
        text: en + '<br>' + zh,
        time: +m[1]
      })
    } else {
      console.error('not match line:' + line);
    }
  }
  return lyricLines;
}
var sectionMap = {
  'P2-3': {
    image:"/images/p2-3.jpeg",
  source:`
  4.The KINGDOM OF ARENDELLE was a busy and happy place,          阿伦黛尔王国是一个繁忙而欢乐的地方，
  10.nestled among the mountains and fjords of the far north.      它坐落在群山和峡湾之间。

  16.At night,  the northern lights often lit up the skies in beautiful patterns,    夜晚时分,绚丽的北极光常常点亮夜空,变幻出各种美妙奶的图案。
  22.But the king and queen lived with a secret worry.               但是,国王和王后却有一个萦绕在心头的隐忧。`
  },
  "P4-5": {
    image: "/images/p4-5.jpeg",
    source:`1.Their eldest daughter, Elsa, had a MAGICAL POWER.  他们的大女爱莎拥有一种魔力,
5.She could freeze things and create snow and ice with her hands! 她只要挥择手,就能把东西冰冻起来,而目还能变出冰雪!
10.Anna, the younger daughter, loved her big sister. 小女儿安娜很喜欢她的姐姐。
15.One night,  一天晚上, 
16.she convinced Elsa to sneak into the Great Hall and create a WINTER WONDERLAND! 安娜说服艾莎偷偷地溜进大厅, 用冰雪打造了一座冬日乐园`
  },
   "P6-7":{
    image: "/images/p6-7.jpeg",
    source:`
1.But while the girls were playing,     她们玩得正高兴,
5.Elsa accidentally hit Anna with a blast of icy magic.   意外发生了一艾莎的一道冰雪魔法击中了安娜。
10.The little girl fell to the ground unconscious,   变娜摔倒在地不省人事,
15.A WHITE STREAK APPEARED IN HER HAIR Frightened for her sister,     她的一缕头发変得雪一样白
20.Elsa called out for help 艾莎吓坏了,立即大声呼救。`
  }
}
for (var n in sectionMap){
  var s = sectionMap[n];
  s.lyricLines = buildLyricLines(s.source);
}
//console.log(lyricLines)
var names = [];
for(var i=2;i<=88;i+=2){
  names.push( 'P' + i + '-' + (i + 1));
}
var defaultImage = '/images/frozen.jpg';
App({
  globalData:{
    pages: names.map(n => ({ name: n,image : defaultImage})),
    letitgo: '',
    sectionMap: sectionMap,
    lyricLines: lyricLines
  },
  onLaunch: function () {
    wx.cloud.init({
      env: 'myfrozen'
    })
    //console.log(this.globalData.pages)
    var fileList = names.map(name => 'cloud://myfrozen.6d79-myfrozen/mp3/' + name+'.mp3');
    wx.cloud.getTempFileURL({
      fileList: fileList,
      success: res => {
        var list = res.fileList;
        var pages = this.globalData.pages;
        for (var i = 0; i < list.length; i++) {
          var section = sectionMap[names[i]];
          pages[i].url = list[i].tempFileURL;
          pages[i].image = section && section.image || defaultImage;
          pages[i].lyricLines = section && section.lyricLines
        }
        //console.log('pages', pages, list)
      },
      fail: err => {
        console.log('err',err)
      }
    })
    getCloudFile('cloud://myfrozen.6d79-myfrozen/mp4/letitgo.mp4',path=>{
      this.globalData.letitgo = path;
    })
  }
})

function getCloudFile(cloudId,callback){
  if(false){
    wx.cloud.downloadFile({
      fileID: cloudId, // 文件 ID
      success: res => {
        // 返回临时文件路径
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success(res) {
            const savedFilePath = res.savedFilePath
            console.log('savedFilePath:', savedFilePath)
            callback(savedFilePath);
          },
          fail: err => {
            console.log('err', err);
            callback(null);
          }
        })
      },
      fail: console.error
    });
  }else{
    wx.cloud.getTempFileURL({
      fileList: [cloudId],
      success: res => {
        var url = res.fileList[0].tempFileURL;
        callback(url)
        //console.log(res);
      }, fail: err => {
        console.log('err', err);
        callback(null);
      }
    })
  }
  
}