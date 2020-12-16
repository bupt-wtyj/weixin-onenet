// start.js

Page({
    data: {

    },
    //跳转到天气页面
    navigate: function() {
        wx.navigateTo({
            url: '../data/tianqi/tianqi',
        })
    },
    navigate1: function() {
        wx.navigateTo({
            url: '../upload/upload',
        })
    },
    navigate2: function() {
        wx.navigateTo({
            url: '../index/index',
        })
    }
})