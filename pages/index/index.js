// pages/index/index.js
const devicesId = "657334691" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133
const api_key = "1VGglee9UCS7BGb=S07twHp3HSI=" // 填写在OneNet上的 api-key 例子: VeFI0HZ44Qn5dZO14AuLbWSlSlI=
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  watering:function(){
    var that=this
    let deviceid = "657334691"
    let apikey = "1VGglee9UCS7BGb=S07twHp3HSI="
    let data={
      "datastreams": [
        {"id":"watering",
         "datapoints":
         [{
           "value":"1",
         }]
        },
        // {"id": "temp2","datapoints":[{"value": that.data.temp1-1}]},
      ]
    }
    wx.request({
      url: "https://api.heclouds.com/devices/" + deviceid + "/datapoints",
      method:'POST',
      header:{
        "content-type": 'application/json',
        "api-key": apikey
      },
      data:JSON.stringify(data),
      
      success(res){
        console.log("更新数据成功",res)
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
  },
  wateringoff:function(){
    var that=this
    let deviceid = "657334691"
    let apikey = "1VGglee9UCS7BGb=S07twHp3HSI="
    let data={
      "datastreams": [
        {"id":"watering",
         "datapoints":
         [{
           "value":"0",
         }]
        },
        // {"id": "temp2","datapoints":[{"value": that.data.temp1-1}]},
      ]
    }
    wx.request({
      url: "https://api.heclouds.com/devices/" + deviceid + "/datapoints",
      method:'POST',
      header:{
        "content-type": 'application/json',
        "api-key": apikey
      },
      data:JSON.stringify(data),
      
      success(res){
        console.log("更新数据成功",res)
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})