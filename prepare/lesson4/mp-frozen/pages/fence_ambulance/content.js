var english = `0:0	A Fence or an Ambulance -- by Joseph Matins
0:6.2	It was a dangerous cliff, as they freely confessed,
0:12	Though to walk near its crest was so pleasant；
0:17	But over its terrible edge there had slipped
0:21	A duke and full many a peasant.
0:25	So the people said something would have to be done,
0:29	But their projects did not at all tally；
0:33	Some said, "Put a fence around the edge of the cliff,"
0:37	Some, "An ambulance down in the valley."
0:41	But the cry for the ambulance carried the day,
0:46	For it spread through the neighboring city；
0:48.5	A fence may be useful or not, it is true,
0:53	But each heart became brimful of pity
0:57	For those who slipped over that dangerous cliff；
1:01	And the dwellers in highway and alley
1:04	Gave pounds or gave pence, not to put up a fence,
1:08	But an ambulance down in the valley.
1:11.5	"For the cliff is all right, if you're careful," they said,
1:17	"And, if folks even slip and are dropping,
1:20	It isn't the slipping that hurts them so much,
1:23	As the shock down below when they’re stopping."
1:27	So day after day, as these mishaps occurred,
1:33	Quick forth would those rescuers sally
1:36	To pick up the victims who fell off the cliff,
1:39.5	With their ambulance down in the valley.
1:44	Then an old sage remarked： "It's a marvel to me
1:48.2	That people give far more attention
1:50.5	To repairing results than to stopping the cause,
1:54	When they'd much better aim at prevention."
1:57	"Let us stop at its source all this mischief," cried he,
2:02	"Come, neighbors and friends, let us rally；
2:07	If the cliff we will fence we might almost dispense
2:12	With the ambulance down in the valley."...
2:15	Better guide well the young than reclaim them when old,
2:20	For the voice of true wisdom is calling,
2:24	" To rescue the fallen is good, but it’s best
2:28	To prevent other people from falling."
2:31.5	Better close up the source of temptation and crime
2:35	Than deliver from dungeon or galley；
2:38.3	Better put a strong fence round the top of the cliff
2:42.3	Than an ambulance down in the valley.`.split(/\r\n?|\n/);;
// var total = english.map(a=>a.length).reduce((a,b)=>a+b);
// //2:47=>167
// var inc = 0;
// english = english.map(a=>{
//     inc+=0|(a.length/total*167);
//     return ((inc / 60)| 0) +':'+inc%60 +'\t'+a;
//   })
// console.log(english.join('\n'))
//console.log(total);

var chinese = `护栏还是救护车 
大家都毫不讳言,那是座危险的悬崖。
尽管到崖顶去散步,是那样闲暇。
已经有一位公爵和很多农民,
从那可怕的崖边滑落。
所以人们说,一定要做点什么,
各种建议不一而足,却没有一条令人信服。
有人说：『在悬崖边上筑一道护栏。』
而另一些人却说：『我们只需在下面的山谷里,备上一辆救护车。』
但赞成准备救护车的呼声赢得了胜利,
因为它传遍了邻近的城里。
护栏可能有用也可能没用,这毋庸置疑
但每一颗心都充满了怜悯。
为了那些从危险的悬崖上滑落的人;
公路和小巷里的居民
给了英镑和便士,不是为了竖起护栏,
而是为了有辆救护车在山谷里。
『如果你小心的话,悬崖就没有问题，』他们说,
『而且,如果人们滑到了,
并不是下滑对他们造成了如此大的伤害,
而是撞击落地的一瞬间使他们受伤严重。』
所以,日复一日,当这些不幸发生的时候,
那些救援人员要赶快行动,
开着山谷里的救护车,
去救起那些掉下悬崖的受害者。
一位智者感叹道：『这件事让我感到诧异,
人们给予更多关注的,
是去修复结果而非阻止事故的发生,
他们最好把目标放在防患于未然上。』
『让我们从源头上阻止所有这些灾祸的发生,』他呼吁道,
『来吧,邻居们和朋友们,让我们团结起来;
如果我们在悬崖上筑起护栏
我们也许就用不到下面山谷里的救护车了。』
与其让人们在年老时改过自新,不如在他们年轻时春风化雨,
因为真正智慧的声音在召唤,
『救死扶伤是好事,
但防止他人跌倒才最明智。』
正如要切断诱惑和犯罪的源头,
而非把他们从地牢或囚牢里解救;
与其在山谷里备一辆救护车,
不如在悬崖顶上筑一道坚固的护栏。`.split(/\r\n?|\n/);

var content = [];
for (var i = 0; i < english.length; i++) {
  var ten = english[i].match(/(\d+)\:([\d\.]+)\t(.+)/);
  content.push({
    zh: chinese[i],
    en: ten[3],
    time: ten[1]*60+parseFloat(ten[2]),
    text: ten[3] + '<br><i class="fanyi">' + chinese[i]+'</i>'
  });
}

exports.data = content;