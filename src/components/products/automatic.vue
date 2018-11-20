<template>
    <div id="automatic_box">
        
        <div class="nav">
            产品中心<span>全自动系列</span>
        </div>
        <div class="shop">
            <div>
                <img src="../../image/products/automatic/8.png">
            </div>
            <div>
                <img src="../../image/products/automatic/shop.png">
                <!-- <div class="shop_text">
                    <p>真正的手机智能APP 每周自动升级</p>
                    <span>开锁过程一目了然 安全可靠 蓝牙传输 距离短  更安全  耗能低</span>
                </div> -->
            </div>
            
        </div>
    </div>
</template>

<style scoped>
  p{
      padding:0;
      margin:0;
  }
  #automatic_box{
    font-size:30px;
    font-weight: 600;
    font-family: '黑体';
    position:relative;
  }
  #automatic_box>div.nav{
    padding:15.5px 0;
    vertical-align:text-bottom;
    position:relative;
    width:280px;
    text-align: center;
    margin:0 auto;
  }
  #automatic_box>div.nav>span::before{
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
  #automatic_box>div{
      position:relative;
  }
  #automatic_box>div.nav>span{
      font-size:20px;
      color:#505050;
      padding: 12px 0 0 14px;
      position:relative;
  }
  #automatic_box>div img{
      width:100%;
  }
  .shop div{
      position:relative;
  }
  
 
  .shop div>div.shop_text{
      width:836px;
      height:119px;
      color:#afafaf;
      position:absolute;
      top:100px;
      left:50%;
      margin-left:-413px;
      font-size:54px;
      text-align:center;
  }
  .shop div>div.shop_text span{
      font-size:26px;
      position:relative;
      bottom: 26px;
  }



  @media (max-width:414px){

    .shop>div>div.shop_text{
        font-size:16px!important;
        width:100%;
        margin:0;
        left:0;
        top:0
    }
    .shop>div>div.shop_text span{
        font-size:16px!important;
        bottom: 0;
    }
}
</style>
