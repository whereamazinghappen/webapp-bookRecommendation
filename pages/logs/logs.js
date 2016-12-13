// pages/logs/logs.js
var util = require('../../utils/util.js')
console.log(util);
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {       
        return util.formatTime(new Date(log))
      })
    })
  }
})