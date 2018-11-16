<template>
    <div id="service_Box">
        <div class="bann" @mouseover="start()">
            <img src="../image/service/1.png">
            <div>
                <div>发展品牌为一个大胆的未来</div>
                <p>DEVELOPING A BRAND FOR ABOLD FUTURE</p>
            </div>
        </div>
        <div class="title">
                <p>我们的服务</p>
                <span>service</span>
        </div>
        <div class="body">
            <div>
                <div>
                    <div><img src="../image/service/men.png"></div>
                    <div>2小时上门紧急售后问题</div>
                </div>
                <div>
                    <div><img src="../image/service/anquan.png"></div>
                    <div>一年免费质保</div>
                </div>
            </div>
            <div>
                <div>
                    <div><img src="../image/service/phone.png"></div>
                    <div>统一服务热线</div>
                </div>
                <div>
                    <div><img src="../image/service/set.png"></div>
                    <div>免费安装不收取任何费用</div>
                </div>
            </div>
        </div>
        <div class="serve">
            <div>
                <div><img src="../image/service/yuyue.png">时间可预约</div>
                <div><img src="../image/service/tunhuo.png">无忧退货</div>
            </div>
            <div>
                <div><img src="../image/service/30anzhuang.png">30天免费安装</div>
                <div><img src="../image/service/kefu.png">售后客服</div>
            </div>
        </div>
    </div>
</template>

<script>
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
            WindowWidth>=1600?Topdown=280:WindowWidth>=1024?Topdown=230:WindowWidth>=414?Topdown=80:''
            $('.bann>div>div').css({'margin-top':`${Topdown}px`,'opacity':'1'})
            $('.bann>div>p').css({'margin-top':'20px','opacity':'1'})
            
            /*280*/

            this.Start=false
        }
    }
}
</script>

<style scoped>
p{
    padding:0;
    margin:0;
 }
#service_Box .bann img{
    width:100%;
 }
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
    width:450px;
    margin: 0 auto 0;
    transition: 2s;
    opacity: 0;
    position: relative;
 }
.bann>div div:after{
    content: '';
    width: 120px;
    height:4px;
    background:#fff;
    position:absolute;
    top: -80px;
    left: 150px;
 }
.bann>div p{
    font-size: 26px;
    width:560px;
    margin: -50px auto 0;
    transition: 3s;
    opacity: 0;
 }
#service_Box .title{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:180px;
    font-size:22px;
    color:#666666;
    position:relative;
 }
#service_Box .title p{
    font-size:26px;
    color:#000;
    position:relative;
 }
.title p:after,.title p:before{
    position:absolute;
    content:'';
    z-index: 1;
    width: 94px;
    height: 2px;
    background:#a3a3a3;
    top: -16px;
    left:-70px;
 }
.title p:before{
    top: 86px;
    left:100px;
 }
.body,.serve{
    height:800px;
    background:url(../image/service/2.png);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
 }
 .serve{
     justify-content: flex-start;
 }
.body>div{
    display:flex;
    margin-top:30px;
 }
.body>div>div:hover{
    border:2px solid #fec836;
 }
.body>div>div{
    width:596px;
    height:236px;
    display: flex;
    align-items: center;
    padding:30px;
    font-size:26px;
    color:#535353;
    border:2px solid #aaa;
 }
.body>div>div>div:nth-child(1){
    margin-right: 60px;
 }
.body>div>div:nth-child(1){
    margin-right: 60px;
 }
.serve{
    background:#fff;
 }
.serve>div{
    display:flex;
    margin-top:50px;
 }
.serve>div>div{
    width:486px;
    height:330px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size:26px;
 }
.serve>div>div>img:hover{
    transform: rotate(360deg)
 }
.serve>div>div>img{
    margin-bottom: 40px;
    transition:1s
 }





@media (max-width:1336px){
    .body{
        height:650px;
    }
    .body>div>div{
        width:545px;
        height: 195px;
    }
    .serve img{
        width:230px;
    }
 }
@media (max-width:1180px){
  .body{
        height:600px;
    }
    .body>div>div{
        width:480px;
        height: 165px;
    }
    .body>div>div img{
        width:100px;
        height: 100px;
    }
    .body>div>div:nth-child(1) {
        margin-right: 40px;
    }
    .body>div>div>div:nth-child(1){
        margin-right: 25px;
    }
    .serve img{
        width:200px;
    }
 }
@media (max-width:414px){
    .bann>img{
        height:250px;
    }
    .bann>div>div,.bann>div p{
        font-size: 18px;
        width:100%;
        text-align: center;
    }
    .bann>div>div:after{
        width:60px;
        top:-25px;
        left:169px;
    }
    .body>div{
        margin-top: 0px;
    }
    .body>div>div{
        width:100%;
        margin-top: 20px;
        padding: 0 30px;
        height:150px;
        font-size: 20px;
        box-sizing: border-box;
    }
    .body>div>div>div:nth-child(1){
        margin-right: 30px;
    }
    .serve{
        height:850px;
    }
    .body>div,.serve>div{
        flex-direction: column;
        height:400px;
    }
    .serve>div>div{
        width:300px;
        
    }
    .serve>div img{
        width:100px;
    }
    
}
</style>

