// pages/bindBank/bind.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bank:"",
        value:null,
        array: ['北京', '邯郸', '石家庄', '承德','山西','上海'],
        index:0,
        money:""
    },
    card:function(e){
        this.setData({
            value: e.detail.value
        })
       
    },
    bindPickerChange(e) {
        this.setData({
            index: e.detail.value
        })
    },
    sure(){
       wx.navigateTo({
           url: '/pages/money/money?bank='+this.data.bank+"&value="+this.data.value+"&money="+this.data.money,
       })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            bank:options.bank,
            name:options.name,
            money:options.money
        })
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