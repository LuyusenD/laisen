<template>
    <div id="halfAutomatic_box">
        <div class="nav">
            产品中心<span>半自动系列</span>
        </div>
        <div class="shop">
            <div>
                <img src="../../image/products/half_automatic/SL-Kda.png">
            </div>
            <div class="shop_two">
                <div>
                    <img src="../../image/products/half_automatic/SL-K11da.png">
                </div>
                <div>
                    安防系统 五大解锁功能
                    <div class="shop_two_img">
                        <div>
                            <img src="../../image/products/half_automatic/zhiwen2.png">
                            <img src="../../image/products/half_automatic/mima.png">
                        </div>
                        <div>
                            <img src="../../image/products/half_automatic/shuaka.png">
                            <img src="../../image/products/half_automatic/weixin.png">
                            <img src="../../image/products/half_automatic/yaoshi.png">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
  p{
      padding:0;
      margin:0;
  }
  #halfAutomatic_box{
    font-size:30px;
    font-weight: 600;
    font-family: '黑体';
    position:relative;
  }
  #halfAutomatic_box>div.nav{
    padding:15.5px 0;
    vertical-align:text-bottom;
    position:relative;
    width:240px;
    margin:0 auto;
  }
  #halfAutomatic_box>div.nav>span::before{
    z-index: 1;
    position: absolute;
    display:block;
    top: 18px;
    left: 6px;
    width:1px;
    height:20px;
    background:#505050;
    content:'';
  }
  #halfAutomatic_box>div{
      position:relative;
  }
  #halfAutomatic_box>div.nav>span{
      font-size:20px;
      color:#505050;
      padding: 12px 0 0 14px;
      position:relative;
  }
  #halfAutomatic_box .shop>div:nth-child(1) img{
      width:100%;
  }
  .shop div{
      position:relative;
  }
  .shop_two{
      background:url(../../image/products/half_automatic/beijing.png);
      height:900px;
      display:flex;
      justify-content: center
  }
  .shop_two>div:nth-child(2){
      padding:104px 0 0 76px;
      font-family:'方正兰亭超细黑简体','宋体','黑体';
      font-size:56px;
      width:904px;
  }
  .shop_two .shop_two_img>div{
      display:flex;
      justify-content: space-around;
      top:138px;
  }
  .shop_two .shop_two_img>div:nth-child(2){
      justify-content: space-between;
      margin-top: 46px;
  }
@media (max-width:1024px){
    .shop_two_img img{
        width:150px;
        height:150px;
    }
    .shop_two>div:nth-child(2){
      padding:104px 0 0 76px;
      font-family:'方正兰亭超细黑简体','宋体','黑体';
      font-size:46px;
      width:904px;
  }
}
@media (max-width:414px){
    /*不满意更改此*/
    .shop_two{
        display:block!important;
        text-align: center;
        padding-top: 50px;
        height:620px;
    }
    .shop_two>div>img{
        width:220px;
    }
    .shop_two_img img{
        width:100px;
        height:100px;
    }
    .shop_two>div:nth-child(2){
      padding:104px 0 0 76px;
      font-family:'方正兰亭超细黑简体','宋体','黑体';
      font-size:46px;
      width:904px;
  }
    .shop_two>div:nth-child(2){
        font-size:16px;
        padding:0;
        width:100%;
        margin-top:-400px;
        background:rgba(0,0,0,0.5);
        color:#fff;
    }
    .shop_two>div:nth-child(2)>div>div{
        top:0;
    }
}
</style>
