# wx_shop_server
微信小程序商店服务端代码
1. [数据库连接时出现的错误及解决方案](https://blog.csdn.net/m_amazing/article/details/84313789)
2. 数据表，[样例](https://www.jianshu.com/p/91cc254cbe1b)

 - 用户信息表 user_info  
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|  
>|userId|用户id|字符串|主键
>|userName|用户名|字符串|非空
>|password|密码|字符串|非空
>|userImg|用户头像|字符串|
>|telPhone|电话|字符串|
>|email|邮箱|字符串|
>|address|默认收货地址|字符串|
>|time|注册时间|字符串|非空

 - 地址表 address_info
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|  
>|id|id|整型|主键
>|userId|用户id|字符串|非空
>|address|收货地址|字符串|非空
>|isDefaultAddress|是否是默认地址|布尔|

 - 商品收藏表 collection
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|  
>|id|id|整型|主键
>|userId|用户id|字符串|非空
>|shopId|店铺id|字符串|非空
>|proId|商品id|字符串|非空
>|time|收藏时间|字符串|非空

 - 购物车信息表 shop_car
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|  
>id|id|整型|主键
>|userId|用户id|字符串|非空
>|shopId|店铺id|字符串|非空
>|proId|商品id|字符串|非空
>|time|加入时间|字符串|非空

 - 订单信息表 order_info
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|
>|id|订单id|整型|主键
>|userId|用户id|字符串|非空
>|proId|产品id|字符串|非空
>|shopId|店铺id|字符串|非空
>|proNum|商品数量|整型|非空
>|totalPrice|总价格|浮点型|非空
>|address|收货地址|字符串|非空
>|expressCom|快递公司|字符串|非空
>|orderStatus|订单状态|字符串|非空
>|time|交易时间|字符串|非空

 - 商品信息表 product_info
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|
>|proId|商品id|字符串|主键
>|proName|商品名称|字符串|非空
>|proImg|商品图片|字符串|非空
>|proPrice|商品单价|浮点型|非空
>|shopId|店铺id|字符串|非空
>|proDes|商品描述|字符串|
>|likeNum|用户点赞数|整型|非空
>|saleNum|销售数|整型|非空
>|appraiseNum|评价数量

 - 商品评价表 appraise_info
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|
>|id|id|整型|主键
>|proId|商品id|字符串|非空
>|userId|用户id|字符串|非空
>|appraise|用户评价|字符串|非空
>|likeNum|点赞数|整型|非空
>|time|评论时间|字符串|非空

 - 店铺表 shop_info
 
>|属性名|字段名|类型|要求  
>|---|---|---|---|
>|shopId|店铺id|字符串|主键
>|shopName|店铺名字|字符串|非空
>|shopImg|店铺图片|字符串|非空



