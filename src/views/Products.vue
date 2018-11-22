<template>
    <div id="pro_box">
        <div class="shop_nav">
            <table></table>
            <p> &nbsp;</p>
            <div class="shop_nav_ul">
                <el-button icon="el-icon-arrow-left" @click="min_nav_L_R(363,'+')" circle></el-button>
                <div>
                    <ul>
                        <li @click="slide_shop($event,'全自动系列')" class="active">全自动系列</li>
                        <li @click="slide_shop($event,'半自动系列')">半自动系列</li>
                        <li @click="slide_shop($event,'高档别墅系列')">高档别墅系列</li>
                        <li @click="slide_shop($event,'玻璃门系列')">玻璃门系列</li>
                    </ul>
                </div>
                <el-button icon="el-icon-arrow-right" @click="min_nav_L_R(-363,'-')" circle ></el-button>
            </div>
        </div>
        <div id="shopList_box">
            <div class="shopList">
                <pro-auto></pro-auto>
                <pro-half></pro-half>
                <pro-gla></pro-gla>
                <pro-vil></pro-vil>
            </div>
        </div>





        
        <pro-automatic v-if="this.view == 1"></pro-automatic>
        <pro-halfAutomatic v-if="this.view == 2"></pro-halfAutomatic>
        <pro-villa v-if="this.view == 3"></pro-villa>
        <pro-glass v-if="this.view == 4"></pro-glass>
    </div>
</template>

<script>
import auto from '../components/products/auto.vue'
import half from '../components/products/half.vue'
import vil from '../components/products/vil.vue'
import gla from '../components/products/gla.vue'

import automatic from '../components/products/automatic.vue'
import halfAutomatic from '../components/products/halfAutomatic.vue'
import villa from '../components/products/villa.vue'
import glass from '../components/products/glass.vue'
import $ from '../../public/js/jquery-3.2.1.js'
export default{
    data(){return {
        view:1,
        width:1579
    }},
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        slide_shop(e,val){
            $('.shop_nav li[class]').removeClass("active");
            e.target.className='active';
            let left = window.innerWidth;
            switch(val){
                case '全自动系列':
                left = 0
                this.view = 1
                $('#shopList_box').css('height','590px')
                break;
                case '半自动系列':
                left = left-20
                this.view = 2
                $('#shopList_box').css('height','590px')
                break;
                case '高档别墅系列':
                window.innerWidth>=1820?left = left*2-40:window.innerWidth<=1535?left = left*2-40:left = left*2-42
                $('#shopList_box').css('height','1130px')
                this.view = 3
                break;
                case '玻璃门系列':
                window.innerWidth>=1820?left = left*3-62:left = left*3-63
                this.view = 4
                $('#shopList_box').css({'height':'1130px'})
                
                break;
            }
            $('.shopList').animate({'left':`-${left}px`});
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
        'pro-glass':glass,
        'pro-auto':auto,
        'pro-half':half,
        'pro-vil':vil,
        'pro-gla':gla,
    }
}
</script>

<style>
.shop_nav_ul{
    padding: 20px 0 4px;
}
a{
    text-decoration:none;
}
.shop_phone_img,.SL_V>.SLV_text>.SLV_phone{
    display:none;
}
.span_after::before,.span_after::after{
    width: 80px;
    height: 4px;
    background:#fec836;
    position:absolute;
    top: 19px;
    left: -134px;
    content: '';
    z-index: 1;
}
.span_after::after{
    left:198px;
}
.shopList>div>div{
      height:590px;
      width:1920px;
      color:#fff;
      font-size:40px;
      text-align: center;
      position:relative;
      float:left;
   }
  .shopList span{
      position:relative;
      top:25px;
      display:inline-block;
      left: 50%;
      margin-left: -72.5px;
      color:#fff;
      font-size: 32px;
      text-align: center;
   }
  
  .shopList .shop_img{
     display:flex;
     justify-content: center;
     width:100%;
     margin-top:50px;
     position:relative;
   }
  .shopList img{
      transition:1s;
      cursor:pointer;
   }
  .shopList img:hover{
      transform: scale(1.1);
   }





   .SL_V .SLV_text img:hover{
      transform: scale(1.07);
      
   }
  .shopList .shop_img>div{
     width:420px;
   }
  .shopList .shop_img>div>p{
     margin-top:30px;
   }

/* @media (max-width:1415px){
  #pro_box>.shop_list>div>div{
      width:1415px;
   }
   #pro_box>.shop_list span{
      left:-30px;
   }
 } */
</style>

<style scoped>
/*scoped*/
  p,ul,li,a{
      text-decoration:none;
      list-style:none;
      padding:0;
      margin:0;
   }
  #pro_box>.shop_nav>div .el-button{display:none;}
  #pro_box>.shop_nav{
      height:600px;
      background:url(../image/products/7.png);
      position: relative;
      color:#fff;
   }
  #pro_box>.shop_nav p{
      font-size:51px;
      width:400px;
      text-align: center;
      margin:278px auto 169px;
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
  

  
  
  #shopList_box{
      height:600px;
      background:url(../image/products/9.png);
      position: relative;
      overflow: hidden;
   }
   .shopList{position: relative;}
  
  
 
  
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



@media (max-width:1820px){
  .shopList>div>div{
      width:1820px;
   }
}
@media (max-width:1720px){
  .shopList>div>div{
      width:1720px;
   }
}
@media (max-width:1620px){
  .shopList>div>div{
      width:1620px;
   }
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
 #pro_box>.shop_nav{
     background:url(../image/products/7.png) no-repeat -690px;
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
      top:0px;
      left:0;
 }
.shop_phone_ImgList p{
     margin-left:0 !important;
 }
.SLV_phone{
    display:block!important;
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


<style scoped>
 #shopList_box{
     width:100%;
 }
 #shopList_box>.shopList{
     width:400%;
     display:flex;
 }
 #shopList_box>.shopList>div{
     width:100%;
     float:left;
     
 }
</style>



