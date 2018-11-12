<template>
    <div id="pro_box">
        <div class="shop_nav">
            <table></table>
            <p>Smart Password  Lock Series</p>
            <div>
                <el-button icon="el-icon-arrow-left" @click="min_nav_L_R(-363,'-')" circle></el-button>
                <div>
                    <ul>
                        <li @click="slide_shop($event,-0,1)" class="active">全自动系列</li>
                        <li @click="slide_shop($event,-width,2)">半自动系列</li>
                        <li @click="slide_shop($event,-width*2,3)">高档别墅系列</li>
                        <li @click="slide_shop($event,-width*3,4)">玻璃门系列</li>
                    </ul>
                </div>
                <el-button icon="el-icon-arrow-right" @click="min_nav_L_R(363,'+')" circle ></el-button>
            </div>
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
                    <div class="shop_phone_img">
                        <el-button icon="el-icon-arrow-left" @click="phone_img($event,-240,'.phone_imgs0')" circle></el-button>

                        <div class="shop_phone_ImgList">
                            <div class="phone_imgs0">
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

                        <el-button icon="el-icon-arrow-right" @click="phone_img($event,240,'.phone_imgs0')" circle></el-button>


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
                    <div class="shop_phone_img">
                        <el-button icon="el-icon-arrow-left" @click="phone_img($event,-240,'.phone_imgs1')" circle></el-button>
                        <div class="shop_phone_ImgList">
                            <div class="phone_imgs1">
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
                        <el-button icon="el-icon-arrow-right" @click="phone_img($event,240,'.phone_imgs1')" circle></el-button>
                    </div>
                </div>
                <div class="SL_V">
                    <span>SL_V 系列</span>
                    <div class="shop_img">
                        <div class="img_bot"></div>
                    </div>
                    <div class="SLV_text" >
                        <div class="SLV_motai"></div>
                        <div class="SLV_">
                            <img src="../image/products/villa/SL-V8.png">
                            <div class="slv_box">
                                <h1>SL_V8</h1>
                                <div class="SLV_con">
                                    <p>华丽机身 流畅线条</p>
                                    <p>EXPLAIN OUR STRENGTH</p>
                                    <p>诠释我们的实例</p>
                                    <a href="javascript:;">了解更多》</a>
                                </div>
                            </div>
                        </div>
                        <div class="SLV_phone">
                            <img src="../image/products/villa/SL-V8.png">
                            <div class="slv_box" >
                                <h1>SL_V8</h1>
                                <div class="">
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
                        <div class="SLV_">
                            <img src="../image/products/glass/SL-D18.png">
                            <div class="slv_box">
                                <h1>SL_D18</h1>
                                <div class="SLV_con">
                                    <p>小巧机身 高端智能</p>
                                    <p>EXPLAIN OUR STRENGTH</p>
                                    <p>诠释我们的实例</p>
                                    <a href="javascript:;">了解更多》</a>
                                </div>
                            </div>
                        </div>

                         <div class="SLV_phone">
                            <img src="../image/products/glass/SL-D18.png">
                            <div class="slv_box" >
                                <h1>SL_D18</h1>
                                <div class="">
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
        view:1,
        width:1579
    }},
    created(){
        
    },
    mounted(){
        this.width=parseInt($('#pro_box>.shop_list>div>div').css('width').slice(0,-2))
    },
    methods:{
        slide_shop(e,i,v){
            $('.shop_nav li[class]').removeClass("active");
            e.target.className='active';
            $('.shop_small_box').animate({'left':i});
            this.view = v
            // console.log(this.view)
        },
        min_nav_L_R(i,addDel){
            let button = $('#pro_box>.shop_nav>div .el-button')
            let ul = $('#pro_box>.shop_nav ul')
            let left = parseInt(ul.css("left").slice(0,-2))
            if(addDel=='+'&&left>=0){
                ul.stop().animate({'left':'0px'})
                return
            }
            let del = (ul.children().length-1)*-363
            if(addDel=='-'&&left<=del){
                ul.stop().animate({'left':del+'px'})
                return
            }
            console.log()
            button.attr({'disabled':'true'})
            ul.stop().animate({'left':(left+i)+'px'})
            setTimeout(function(){
                button.removeAttr('disabled')
            },300)
        },
        phone_img(e,i,elem){
            let left = parseInt($(elem).css('left').slice(0,-2));
            let imgList = $(elem);
            let left_ = (imgList.children().length-1)*-240;
            if(i==-240&&left<=left_){
                imgList.stop().animate({"left":left_+'px'})
                return
            }
            if(i==240&&left>=0){
                imgList.stop().animate({"left":0+'px'})
                return
            }
            imgList.stop().animate({"left":left+i+'px'})
            
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
/*scoped*/
  p,ul,li,a{
      text-decoration:none;
      list-style:none;
      padding:0;
      margin:0;
   }
  #pro_box>.shop_nav>div .el-button,.shop_phone_img,.SLV_phone{display:none;}
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
      left:0px;
   }
  #pro_box>.shop_nav li.active{
      color:#fec836!important;
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
  #pro_box>.shop_nav li:nth-child(3){
      color:#9d9d9d;
      font-size:40px;
      float:left;
      padding: 0 84px 0 64px;
      cursor: pointer;
      position:relative;
      /* bottom: 91px; */
   }
  #pro_box>.shop_nav li:nth-child(4){
      color:#9d9d9d;
      font-size:40px;
      float:left;
      padding: 0 64px 0 64px;
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
  .shop_list .SLV_text .SLV_con a,.SLV_phone a{
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



@media (max-width:1516px){
  #pro_box>.shop_nav>div{
      width:500px;
      overflow: hidden;
      margin:0 auto;
      display:flex;
      position: relative;
    
  }
  #pro_box>.shop_nav>div>div{
      width:363px;
      overflow: hidden;
      margin:0 auto;
  }
  #pro_box>.shop_nav li::before{
      width:0;
  }
  #pro_box>.shop_nav>div .el-button{
      display:inline-block;
      margin: auto;
      background: rgba(0,0,0,.5);
      border:1px solid #fec836;
  }

  #pro_box>.shop_list>div>div{
      width:1515px;
   }
 }
@media (max-width:1415px){
  #pro_box>.shop_list>div>div{
      width:1415px;
   }
   #pro_box>.shop_list span{
      left:-30px;
   }
 }
@media (max-width:1315px){
  #pro_box>.shop_list>div>div{
      width:1315px;
   }
 }
@media (max-width:1288px){
  #pro_box>.shop_list>div>div{
      width:1288px;
   }
  .shop_list .SL_K .shop_img{
      justify-content: start !important;
      margin:0 auto !important;
      padding-top:200px;
      width:700px !important;
      overflow:hidden;
  }
  .shop_list .SL_K .shop_img>div{
      padding:0 20px
  }
 }
@media (max-width:1156px){
   #pro_box>.shop_list>div>div{
      width:1156px;
   }
   #pro_box>.shop_list .SL_A  .shop_img>div{
       width:300px
   }
  
 }
  
@media (max-width:1024px){
  #pro_box>.shop_list>div>div{
      width:1024px;
   }
  .slv_box{
      left:-10px;
  }
 }

@media (max-width:414px){
 #pro_box>.shop_list{
     height:736px;
  }
 #pro_box>.shop_nav>div{
     width:414px;
   }
 #pro_box>.shop_list>div>div{
     width:414px;
  }
 #pro_box>.shop_nav>div>div{
     padding:0 84px 0 30px
  }
 #pro_box>.shop_nav>div>div li{
     padding:0 100px 0 40px;
  }
 #pro_box>.shop_nav>div>div li:nth-child(2){
     padding:0 80px 0 60px;
  }
 .shop_list span::before,.shop_list span::after{
     width:0 !important;
  }
 #pro_box>.shop_list span{
     left:0px;
     top:10px;
  }
 
 #pro_box>.shop_list .shop_img{
      margin-top:60px;
  }
.SL_A .shop_img,.SL_K .shop_img,.shop_text,.SLV_{
    display:none !important;
 }
.shop_phone_img{
    display:block;
    width:320px;
    height:600px;
    margin:10px auto 0;
    overflow:hidden;
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    position:relative;

 }
.shop_phone_img .el-button{
    position:relative;

    top:50%;
    margin-top:-20px;
 }
.shop_phone_img img,.SLV_phone>img{
    width:120px;
    height:500px;
    margin:20px 58px 0;
 }
.shop_phone_ImgList{
     position:relative;
     width:240px;
     overflow: hidden;
 }
.shop_phone_ImgList>div{
     /*设置left*/
     display:flex;
     position:relative;
 }
.slv_box{
      left:0px;
 }
.shop_phone_ImgList p{
     margin-left:0 !important;
 }
.SLV_phone{
    display:block;
    margin-top: 20px !important;
    height:580px;
    justify-content: center
 }
.slv_box{
 background:rgba(0,0,0,0)!important;
 z-index:2;
 }
.SLV_phone .slv_box>div{
 margin-top:150px;
 font-size:30px;
 background:rgba(0,0,0,.4)
 }





}
   
</style>





