﻿<template>
    <div class="Dealer_box">
        <div class="bann" @mouseover="start()">
            <img src="../image/about/dealer/13.png">
            <div>
                <div>COOPERATION</div>
                <p>合作共赢</p>
            </div>
        </div>
        <div class="nav">
            <li class="active">公司简介<i></i></li>
        </div>
        <div class="title">
            <div>JOIN SALIFELINK</div>
            <p class="after">加盟条件</p>
        </div>
        <div class="content">
            <div>
                <div>
                    <img src="../image/about/dealer/1.png">
                    对本行业有所了解，并认同<br>
                    精益的指纹锁产品
                </div>
                <div>
                    <img src="../image/about/dealer/2.png">
                    熟悉当地市场，有较好的经营<br>
                    思路和社会关系
                </div>
                <div>
                    <img src="../image/about/dealer/3.png">
                    具备设立售后服务，安装、<br>
                    维修能力的人，能及时服务
                </div>
            </div>
            <div>
                <div>
                    <img src="../image/about/dealer/4.png">
                    能严格遵守公司的经营模式<br>
                    和招商管理规定
                </div>
                <div>
                    <img src="../image/about/dealer/5.png">
                    有稳定的场所，设有电话传真<br>
                    网络等设备
                </div>
                <div>
                    <img src="../image/about/dealer/6.png">
                    具有合法的独立人资质<br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from '../../public/js/jquery-3.2.1.js'
export default{
    
    data(){return {
        Start:true
     }
    },
    created(){},
    methods:{
        start(){
            if(!this.Start){return}
            let Topdown = 280;
            let WindowWidth = window.innerWidth;
            WindowWidth>=1600?Topdown=210:WindowWidth>=1024?Topdown=280:WindowWidth>=399?Topdown=80:''
            $('.bann>div>div').css({'margin-top':`${Topdown}px`,'opacity':'1'})
            $('.bann>div>p').css({'margin-top':'20px','opacity':'1'})
            
            /*280*/

            this.Start=false
        }
    }
}
</script>


<style scoped>

.bann{position: relative;}
.bann>div{
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 36px;
    color: #fff;
 }
.bann>div div{
    font-size: 50px;
    width:370px;
    margin: 0 auto 0;
    transition: 2s;
    opacity: 0;
    position: relative;
 }

.bann>div p{
    font-size: 46px;
    width: 185px;
    margin: -50px auto 0;
    transition: 3s;
    opacity: 0;
 }
.after:after{
      content: '';
      background:#fec836;
      width: 80px;
      height:4px;
      z-index: 1;
      position: absolute;
      top: -28px;
      left: 20px;
  }
.Dealer_box>img{
    width: 100%;
 } 
    
.Dealer_box>div.nav{
    display: flex;
    justify-content: center;
    font-size: 26px;
    z-index: 1;
 }
.Dealer_box>div.nav>li{
    width:300px;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position:relative;
    background:#fec836;
    color:#fff;
 }


.Dealer_box>div.nav>li>i{
    width:35px;
    height:35px;
    background:#fec836;/**/
    transform: rotate(45deg);
    position: absolute;
    bottom: -18px;
    display:block;
    /* margin-left: 35px; */
 }
.title{
    height:169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 32px;
    position: relative;
 }
.title p{
   position: relative;
 }
.title div{
   margin-top:28px
 }
.content{
    height:500px;
    background:#343434;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.content>div{
    display: flex;
    justify-content: center;
}
.content>div>div img{
    margin-right:20px;
}
.content>div>div{
    width:365px;
    height:144px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    color:#fff;
    font-size: 20px;
    margin: 0 20px;
}

@media (max-width:1336px){
    .content>div>div{
        font-size: 18px
    }
    .content img{
        width:100px;
        height:118px;

    }
 }
@media (max-width:1100px){
  .content>div>div{
        font-size: 18px
    }
    .content img{
        width:80px;
        height:98px;

    }
    .content{
        height:400px;
    }
 }
@media (max-width:414px){
    .content>div{
        flex-direction: column;
    }
    .content>div>div{
        font-size: 18px;
        width: 100%;
        padding-left: 30px;
        box-sizing: border-box;
    }
    .content img{
        width:80px;
        height:98px;

    }
    .content{
        height:730px;
    }
}
</style>





