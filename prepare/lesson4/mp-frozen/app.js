//app.js
App({
  globalData:{
    
  },
  onLaunch: function () {
    wx.cloud.init({
      env: 'myfrozen'
    })
    //初始化 frozen 数据
    require('./pages/frozen/init').init(this);
    //初始化 fence or ambulance 数据
    require('./pages/fence_ambulance/init').init(this);
    
  }
})