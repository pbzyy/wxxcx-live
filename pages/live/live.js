// pages/live/live.js
const RTMPURL = getApp().globalData.rtmpurl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomId: 0,
    rtmpUrl : RTMPURL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      roomId: options.roomId || 0
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    var self = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    console.log('/pages/player/player?roomId=' + self.data.roomId);
    return {
      title: '我的直播',
      path: '/pages/player/player?roomId=' + self.data.roomId
    }
  },
  /**
   * 输出直播日志信息
   */
  statechange(e) {
    console.log('live-pusher code:', e.detail.code)
  }
})