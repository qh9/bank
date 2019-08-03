// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            { bank: "中国国家开发银行",flag:false },
            { bank: "中国农业发展银行", flag: false },
            { bank: "中国国家开发银行", flag: false },
            { bank: "中国农业银行", flag: false},
            { bank: "中国银行", flag: false},
            { bank: "中国建设银行", flag: false },
            { bank: "中国光大银行", flag: false},
            { bank: "中国民生银行", flag: false },
            { bank: "华夏银行", flag: false},
            { bank: "中信银行", flag: false},
            { bank: "恒丰银行", flag: false },
            { bank: "兴业银行", flag: false},
            { bank: "上海浦东发展银行", flag: false},
            { bank: "交通银行", flag: false },
            { bank: "浙商银行", flag: false}
        ]
    },
    click:function(e){
        let { item } = e.currentTarget.dataset;
        let current = getCurrentPages()
        // console.log(current)
        let bankChoose = current[current.length-2]
        bankChoose.setData({
           bank:item
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