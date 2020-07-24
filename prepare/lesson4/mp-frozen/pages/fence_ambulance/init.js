exports.init = function(app){
  app.globalData.fence_ambulance='https://nan.xidea.org/images/fence_ambulance.mp3';
  getCloudFile('cloud://myfrozen.6d79-myfrozen/mp3/fence_ambulance.mp3',
      path => {
        app.globalData.fence_ambulance = path;
      });
}

function getCloudFile(cloudId,callback){
  wx.cloud.getTempFileURL({
    fileList: [cloudId],
    success: res => {
      var url = res.fileList[0].tempFileURL;
      callback(url)
      console.log('cloud:',res);
    }, fail: err => {
      console.log('cloud err', err);
      callback(null);
    }
  })
}