Page({
    data: {
        copyName: ""
    },
    onLoad: function(o) {
        var a = getApp().globalData.officeAccountInfo;
        this.setData({
            officeAccountInfo: a
        });
    },
    onShow: function() {},
    onCopy: function(o) {
        var a = this.data.officeAccountInfo.occaName;
        wx.setClipboardData({
            data: a,
            success: function(o) {
                wx.showToast({
                    title: "ε€εΆζε"
                });
            }
        });
    },
    onShareAppMessage: function() {}
});