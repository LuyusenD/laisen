<template>
    <div id="pro_box">
        <div class="shop_nav">
            <table></table>
            <p>Smart Password  Lock Series</p>
            <ul>
                <li @click="slide_shop($event,-0,1)" class="active">全自动系列</li>
                <li @click="slide_shop($event,-1579,2)">半自动系列</li>
                <li @click="slide_shop($event,-3158,3)">高档别墅系列</li>
                <li @click="slide_shop($event,-4737,4)">玻璃门系列</li>
            </ul>
        </div>
        <div class="shop_list">
            <div class="shop_small_box" >
                <div class="SL_A">
                    <span>SL_A 系列</span>
                    <div class="shop_img">
                        <div>
                            <a href="/details?id=1"><img src="../image/products/automatic/SL-A6.png"></a>
                            <p>SL-A6</p>
                        </div>
                        <div>
                            <a href="/details?id=3">
                            <img src="../image/products/automatic/SL-A8.png"></a>
                            <p>SL-A8</p>
                        </div>
                        <div>
                            <a href="/details?id=2">
                            <img src="../image/products/automatic/SL-A7.png"></a>
                            <p>SL-A7</p>
                        </div>
                    </div>
                </div>
                <div class="SL_K">
                    <span>SL_K 系列</span>
                    <div class="shop_img">
                        <div>
                            <img src="../image/products/half_automatic/SL-K10.png">
                            <p>SL-K10</p>
                        </div>
                        <div>
                            <img src="../image/products/half_automatic/SL-K10-1.png">
                            <p>SL-K10-1</p>
                        </div>
                        <div>
                            <img src="../image/products/half_automatic/SL-K11.png">
                            <p>SL-K11</p>
                        </div>
                        <div>
                            <img src="../image/products/half_automatic/SL-K12.png">
                            <p>SL-K12</p>
                        </div>
                    </div>
                </div>
                <div class="SL_V">
                    <span>SL_V 系列</span>
                    <div class="shop_img">
                        <div class="img_bot"></div>
                    </div>
                    <div class="SLV_text">
                        <div class="SLV_motai"></div>
                        <div>
                            <img src="../image/products/villa/SL-V8.png">
                            <div>
                                <h1>SL_V8</h1>
                                <div class="SLV_con">
                                    <p>华丽机身 流畅线条</p>
                                    <p>EXPLAIN OUR STRENGTH</p>
                                    <p>诠释我们的实例</p>
                                    <a href="javascript:;">了解更多》</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="SL_V SL_D">
                    <span>SL_D 系列</span>
                    <div class="shop_img">
                        <img src="../image/products/glass/12.png">
                        <div class="img_bot"></div>
                    </div>
                    <div class="SLV_text">
                        <div class="SLV_motai"></div>
                        <div>
                            <img src="../image/products/glass/SL-D18.png">
                            <div>
                                <h1>SL_D18</h1>
                                <div class="SLV_con">
                                    <p>小巧机身 高端智能</p>
                                    <p>EXPLAIN OUR STRENGTH</p>
                                    <p>诠释我们的实例</p>
                                    <a href="javascript:;">了解更多》</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pro-automatic v-if="this.view == 1"></pro-automatic>
        <pro-halfAutomatic v-if="this.view == 2"></pro-halfAutomatic>
        <pro-villa v-if="this.view == 3"></pro-villa>
        <pro-glass v-if="this.view == 4"></pro-glass>
    </div>
</template>

<script>
import automatic from '../components/products/automatic.vue'
import halfAutomatic from '../components/products/halfAutomatic.vue'
import villa from '../components/products/villa.vue'
import glass from '../components/products/glass.vue'
export default{
    data(){return {
        view:1
    }},
    methods:{
        slide_shop(e,i,v){
            $('.shop_nav li[class]').removeClass("active");
            e.target.className='active';
            $('.shop_small_box').animate({'left':i});
            this.view = v
            console.log(this.view)
        }
    },
    components:{
        'pro-automatic':automatic,
        'pro-halfAutomatic':halfAutomatic,
        'pro-villa':villa,
        'pro-glass':glass
    }
}
</script>

<style scoped>
  p,ul,li,a{
      text-decoration:none;
      list-style:none;
      padding:0;
      margin:0;
   }
  #pro_box>.shop_nav{
      height:800px;
      background:url(../image/products/7.png);
      position: relative;
      color:#fff;
   }
  #pro_box>.shop_nav p{
      font-size:51px;
      width:400px;
      text-align: center;
      margin:278px auto 254px;
   }
  #pro_box>.shop_nav ul{
      position:relative;
      width:1500px;
      height:60px;
      margin:0 auto;
   }
  #pro_box>.shop_nav li.active{
      color:#fec836;
   }
  #pro_box>.shop_nav li{
      color:#9d9d9d;
      font-size:40px;
      float:left;
      padding: 0 84px 0 79px;
      cursor: pointer;
      position:relative;
      /* bottom: 91px; */
   }
  #pro_box>.shop_nav li::before,#pro_box>.shop_list span::before,#pro_box>.shop_list span::after{
      z-index: 1;
      position: absolute;
      display:block;
      top: 15%;
      right: 0;
      width:4px;
      height:70%;
      background:#fec836;
      border-radius:1px;
      content:'';
   }
  #pro_box>.shop_nav li:last-child:before{
      width:0;
      height:0;
   }
  #pro_box>.shop_list{
      height:1130px;
      background:url(../image/products/9.png);
      position: relative;
      width:100%;
      overflow: hidden;
   }
  
  #pro_box>.shop_list>div>div{
      height:1130px;
      width:1579px;
      color:#fff;
      font-size:40px;
      text-align: center;
      position:relative;
      float:left;
   }
  #pro_box>.shop_list span{
      position:relative;
      top:100px;
   }
  #pro_box>.shop_list span::before,#pro_box>.shop_list span::after{
      height:4px;
      width:76px;
      color:#ffc965;
      top:50%;
      margin-top:-2px;
      right:-134px;
   }
  #pro_box>.shop_list span::before{
     left:-134px;
   }
  #pro_box>.shop_list .shop_img{
     display:flex;
     justify-content: center;
     width:100%;
     margin-top:200px;
     position:relative;
   }
  #pro_box .shop_img img,.SL_V .SLV_text img{
      transition:1s;
      cursor:pointer;
   }
  #pro_box .shop_img img:hover{
      transform: scale(1.1);
   }
 .SL_V .SLV_text img:hover{
      transform: scale(1.07);
   }
  #pro_box>.shop_list .shop_img>div{
     width:420px;
   }
  #pro_box>.shop_list .shop_img>div>p{
     margin-top:30px;
   }



  #pro_box>.shop_list .shop_small_box{
      position:relative;
      width:500%;
   }
  
  #pro_box>.shop_list .shop_small_box .SL_K p{
      margin-left:-120px
   }
  #pro_box>.shop_list .shop_small_box .SL_V{
      background:#000;
   }
  #pro_box>.shop_list .shop_small_box .SL_V .shop_img>div{
      z-index: 21;
   }
  #pro_box>.shop_list .shop_small_box .SL_V .shop_img{
      margin-top:54px;
      background:url(../image/products/villa/11.png);
      height:100%;
      display:block;
      
   }
  #pro_box>.shop_list .shop_small_box .SL_V .shop_img .img_bot{
      background:#ffce75;
      width:100%;
      position:absolute;
      bottom:114px;
      height:150px;
      z-index: 0;
   }
  #pro_box>.shop_list .shop_small_box .SLV_text h1{
      margin-top:32px ;
   }
  .shop_list .SL_V .SLV_text{
      position:absolute;
      top:115px;
      width:100%;
      height:89.5%;
      display:flex;
      justify-content: center;
   }
  #pro_box>.shop_list .SL_V span{
      z-index: 2;
      top:38px ;
   }
  .shop_list .SL_V .SLV_text img{
      margin-left:40px;
      z-index: 1;

   }
  .shop_list .SL_V .SLV_text>div{
      position:relative;
      margin-top:58px;
      width:972px;
      text-align:start;
      display:flex;
      align-items: center;
   }
  .shop_list .SL_V .SLV_text .SLV_motai{
      position:absolute;
      width:100%; 
      height:105%; 
      background:rgba(0,0,0,.5);
      margin-top:-38px;
   }
  .shop_list .SLV_text>div>div{
      width:100%;
      height:660px;
      background:rgba(288,187,61,.7);
      position:absolute;
      text-align:center
   }
  .shop_list .SLV_text .SLV_con a{
      color:#000;
      background:#fff;
      padding:0px 14px;
   }
  .shop_list .SLV_text .SLV_con{
      text-align:start;
      font-size:36px;
      font-family: '宋体';
      padding:100px 0 0 406px;
      height:355px;
      display:flex;
      flex-direction:column;
      justify-content: space-between;
      align-items:flex-start

   }
  
/*shop list 4 */
  .shop_list .SL_D .shop_img>img{
      width:100%;
      height:77%;
   }
  .shop_list .SL_D .shop_img .img_bot{
      background:#7e7e7e !important;
   }
  .shop_list .SL_D .SLV_text>div>div{
      width:100%;
      height:660px;
      background:rgba(0,0,0,.7);
      position:absolute;
      text-align:center
   }

   
</style>





