var e = require("./../userInfoPath.js"), o = require("./../cinemaPath.js"), r = require("./../shopPath.js"), _ = require("./../couponPath.js"), i = require("./../cardPath.js"), n = require("./../orderPath.js"), d = require("./../mimePath.js"), a = new Object();

a.wx_phone_login = e.wx_phone_login(), a.sendLoginMessage = e.sendLoginMessage(), 
a.codeLogin = e.codeLogin(), a.user_info = e.user_info(), a.login_openid = e.login_openid(), 
a.send_message = e.send_message(), a.logout = e.logout(), a.update_user_info = e.update_user_info(), 
a.user_login = e.user_login(), a.send_message = e.send_message(), a.set_phone = e.set_phone(), 
a.user_un_register_info = e.user_un_register_info(), a.user_un_register_mobile_code = e.user_un_register_mobile_code(), 
a.user_un_register = e.user_un_register(), a.contact_list = e.contact_list(), a.deleteContact = e.deleteContact(), 
a.save_companion = e.save_companion(), a.movieList = o.movieList(), a.movieComingList = o.movieComingList(), 
a.unlock_seat = o.unlock_seat(), a.advertList = o.advertList(), a.movieInfo = o.movieInfo(), 
a.playInfo = o.playInfo(), a.cityList = o.cityList(), a.cinemaList = o.cinemaList(), 
a.cinemaDetail = o.cinemaDetail(), a.init = o.init(), a.seat_list = o.seat(), a.lock_seat = o.lock_seat(), 
a.lock_seat_log = o.lock_seat_log(), a.orderCreate = o.orderCreate(), a.orderBuy = o.orderBuy(), 
a.calculatePrice = o.calculatePrice(), a.cancelOrder = o.cancelOrder(), a.updateCompleted = o.updateCompleted(), 
a.promoList = r.promoList(), a.goodsIndex = r.goodsIndex(), a.goodsList = r.goodsList(), 
a.coupon_package_detail = r.coupon_package_detail(), a.goodsDetail = r.goodsDetail(), 
a.optionGoodsDetail = r.optionGoodsDetail(), a.shopCalculate = r.calculate(), a.goodCreateOrder = r.goodCreateOrder(), 
a.foodsIndex = r.foodsIndex(), a.getDelivery = r.getDelivery(), a.getDeliveryTime = r.getDeliveryTime(), 
a.openid = r.openid(), a.goodBuy = r.goodBuy(), a.cancelGoodOrder = r.cancelGoodOrder(), 
a.goodList = r.goodList(), a.get_add_more_goods = r.get_add_more_goods(), a.couponListMine = _.couponListMine(), 
a.bind_offline_coupon = _.bind_offline_coupon(), a.offline_coupon_list = _.offline_coupon_list(), 
a.couponListPay = _.couponListPay(), a.checkCoupon = _.checkCoupon(), a.coupon_share = _.coupon_share(), 
a.coupon_package_order_create = _.coupon_package_order_create(), a.coupon_package_order_cancel = _.coupon_package_order_cancel(), 
a.coupon_package_order_detail = _.coupon_package_order_detail(), a.score_exchange_coupons = _.score_exchange_coupons(), 
a.score_exchange = _.score_exchange(), a.card_list = i.card_list(), a.card_info = i.card_info(), 
a.score_exchange_recod_list = i.score_exchange_recod_list(), a.card_transaction = i.card_transaction(), 
a.bind_card = i.bind_card(), a.unbind_card = i.unbind_card(), a.recharge = i.recharge(), 
a.deposit_result = i.deposit_result(), a.online_list = i.online_list(), a.online_card_details = i.online_card_details(), 
a.online_creat = i.online_creat(), a.online_card_buy = i.online_card_buy(), a.online_card_status = i.online_card_status(), 
a.card_modify_pwd_vertify_code = i.card_modify_pwd_vertify_code(), a.update_card_pwd = i.update_card_pwd(), 
a.card_verify_mobile = i.card_verify_mobile(), a.code_exchange = i.code_exchange(), 
a.code_exchange_check = i.code_exchange_check(), a.saveUserRelationShip = i.saveUserRelationShip(), 
a.getLastOrder = n.getLastOrder(), a.noGetOrder = n.noGetOrder(), a.order_list = n.order_list(), 
a.unfinished_order = n.unfinished_order(), a.order_detial = n.order_detial(), a.ticket_refund = n.ticket_refund(), 
a.order_progress = n.order_progress(), a.delete_order = n.delete_order(), a.good_refund = n.good_refund(), 
a.question = d.question(), a.add_suggestion = d.add_suggestion(), module.exports = a;