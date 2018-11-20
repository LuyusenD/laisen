<template>
    <div id="Details_box">
        <div class="nav">
            {{cAs.type}}{{cAs.title}} <div></div> <span>概述/详情</span>
        </div>
        <div class="content">
            <div class="C_one">
                <div>
                    <div class="fdj">
                        <img  :src="imgUrl">
                        <div></div>
                        <span @mousemove="imgSize($event)" @mouseover="imgSizeOver()" @mouseout="imgSizeOut()"></span>
                    </div>
                </div>
                <div>
                    <ul @mousemove="imgtoggle($event)">
                        <li><el-button icon="el-icon-arrow-left" circle></el-button></li>
                        <li class="active"><img :src="cAs.lImg_01"></li>
                        <li><img :src="cAs.lImg_02"></li>
                        <li><img :src="cAs.lImg_03"></li>
                        <li><el-button icon="el-icon-arrow-right" circle></el-button></li>
                    </ul>
                </div>
            </div>
            <div class="C_two">
               <p>{{cAs.title}}</p>
               <div>
                   <span>产品配色</span>
                   <a href="javascript:;" v-for='(i,index) in cAs.color' :key="index">
                       <i :style="i=='红古铜'?'background:#d99e8d':i=='银灰色'?'background:#a0a0a0':'background:#000'"></i> {{i}}
                   </a>
               </div>
               <span>购买可致电：0755-2107-8049</span>
            </div>

        </div>
        <div class="fdj_box">
            <div>
                <img :src="imgUrl">
            </div>
        </div>
        <div class="shop_img">
            <!-- 介绍 -->
                <img :src="cAs.xImg_01">     
           
        </div>
    </div>
</template>


<script>
import Vuex from '@/Vuex.js'

export default {
    data(){return{
        cAs:{},
        imgUrl:null
    }},
    created(){
        let id = this.$route.params.id
        const _this = this;
        Vuex.state.details.map((obj)=>{
            if(obj.id==id){
                _this.cAs = obj
                _this.imgUrl=obj.lImg_01
            }
        })
        if(_this.cAs.id==undefined)alert('details 页面 404 ')
    },
    methods:{
        imgtoggle(e){
            if(e.target.nodeName=='IMG'){
                $('.C_one li.active').removeClass('active')
                e.target.parentElement.className='active'
                this.imgUrl=e.target.src
            }
        },
        imgSize(e){
            let elX = $('.C_one>div>div>span').css('width').slice(0,-2)-125
            let elY = $('.C_one>div>div>span').css('height').slice(0,-2)-100.7
            let left = e.offsetX-125;
            let top = e.offsetY-100.7;
            e.offsetX<125?left = 0:e.offsetX>elX?left = elX-125:''
            e.offsetY<100.7?top = 0:e.offsetY>elY?top = elY-100.7:''
            $('.fdj>div').css({'left':left,'top':top})
            
            $('.fdj_box div').css('left',-1000*(left/(elX+125)))
            $('.fdj_box div').css('top',-806*(top/(elY+100.7)))
        },
        imgSizeOver(){
            $('.fdj>div').show()
            $('.fdj_box').show()
        },
        imgSizeOut(){
            $('.fdj>div').hide()
            $('.fdj_box').hide()
        }
    }
}
</script>


<style scoped>
  
  li{
      list-style:none;
      float:left;
   }
  a{
       text-decoration: none;
       color:#000;
   }
  #Details_box .nav{
      height:100px;
      background:#a9a9a9;
      display:flex;
      justify-content: center; 
      position:relative;
      color:#fff;
      font-size:22px;
      align-items:center;
   }
  #Details_box .nav>div{
      height:100px;
      background:#a9a9a9;
      width:785px;
   }
  #Details_box .nav>span{
      font-size: 16px;
      color:#000;
   }
  .content{
      position:relative;
      display:flex;
      border-bottom: 1px solid #b9b9b9;
   }
  .content>div{
      width:50%;
      height:792px;
    }
  .content .C_one{
      text-align:center;
      padding-top:52px;
   }
  .content .C_one ul{
      height:100px;
      margin:20px auto 0;
      width:650px;
   }
   .C_one>div>div>img{
       /*max*/
       width:500px;
       height:403px;
   }
  .content .C_one li.active{
      border:2px solid #fec836;
   }
  .content .C_one li{
      margin: 0 3px;
      border:2px solid #b2b2b2;
      box-sizing: border-box;
    }
  .content .C_one>div:nth-child(2) img{
       width:150px;
       height:100px;

   }
  .content .C_one li:first-child,.content .C_one li:last-child{
      border:0;
      margin-top:30px;
   }
  .content .C_two{
      position:relative;
      font-size: 36px;
      padding-top:26px;
   }
  .content .C_two div{
      display:flex;
      flex-direction:column;
      justify-content: space-around;
      height:300px;
      font-size: 26px;
      border-top:1px solid #b9b9b9;
      border-bottom:1px solid #b9b9b9;
      margin-bottom: 43px;
   }
  .content .C_two div>a{
      display:block;
      width:408px;
      padding:13px 0;
      border:1px solid #a9a9a9;
      text-align: center;
      position:relative;
   }
  .content .C_two div>a i{
      display:block;
      width:30px;
      height:30px;
      background:#000;
      border-radius: 50%;
      position:absolute;
      top:18px;
      left:20%;
      box-shadow:2px 2px 10px #b9b9b9;
   }
  .content .C_two>span{
      font-size: 20px;
      color:#5f5f5f;
   }
  .shop_img{
      width:1200px;
      margin:0 auto;
   }
  .shop_img>div{
      text-align:center;
   }
  .shop_img>div:nth-child(1){
      height:370px;
      position:relative;
    }
  .shop_img>div:nth-child(1) span{
      display:block;
      width:296px;
      height:96px;
      border:2px solid #fec836;
      margin:-48px auto 0;
      padding-top: 10px;
      top:50%;
      position:relative;
      color:#fec836;
      font-size: 23px;
   }
  .transDown{
      width:44px;
      height:44px;
      border-left:4px solid #fec836;
      border-bottom:4px solid #fec836;
      transform: rotate(-45deg);
      position:relative;
      margin:200px auto 0;
   }
  .shop_img .cAs{
      margin-top:30px;
   }
  .shop_img .cAs p{
      font-size:36px;
   }
  
  

@media (max-width:1310px){
   .content .C_one>div:nth-child(1) img{
       width: 80%;
   }
   .content .C_one>div:nth-child(2) img{
       width: 120px;
       height: 80px
   }
   .C_one>div>div{
       width:95%!important;
    }
    .C_one>div>div>span,.C_one>div>div>div{
        /*放大镜隐藏*/
        display:none;
    }
   .content .C_one>div:nth-child(2) ul{
       width:510px;
       padding:0 0 0 10px
   }
   .content .C_two div>a{
       width:350px;
   }
   .content>div{
       height:680px
   }
   .content .C_two div{
       height:270px
   }
 }
@media (max-width:1210px){
   .content .C_two div>a{
       width:300px;
       padding:10px 0;
   }
   .content>div{
       height:600px
   }
   .content .C_two div{
       height:240px
   }
 }
@media (max-width:1110px){
  .content .C_two div>a{
       width:270px;
       padding:10px 0;
       font-size:22px
   }
  .content .C_two div>a i{
       top:12px
   }
   .content>div{
       height:550px
   }
   .content .C_two div{
       height:200px
   }
 }
@media (max-width:414px){
 .nav>div{
     display:none;
 }
 .nav>span{
    margin-left:120px
 }
 .content{
    flex-direction: column;
    height:1000px;
 }
 .C_one,.C_two{
     width:100%!important;
 }

 .content .C_one>div:nth-child(1) img{
       width: 100%;
 }
 .content .C_one>div:nth-child(2) ul{
       width:100%;
       padding:0 0 0 10px;
       box-sizing: border-box;
   }
 .C_one>div:nth-child(2) ul>li:first-child,.C_one>div:nth-child(2) ul>li:last-child{
       display:none;
   }
 .C_two{
     text-align:center;
 }
 .C_two,a{
     margin:0 auto;
 }
 .C_two>span{
    position: relative;
    top: -34px;
 }
 .shop_img,.shop_img img{
     width:100% !important;
 }
 
 .cAs p{
     font-size: 26px
 }


}
</style>

<style scoped>
/*放大镜*/
.fdj>div,.fdj_box{
    display:none;
}
.C_one>div>div{
    position:relative;
    width:500px;
    margin:0 auto;
}
.C_one>div>div>div{
    position: absolute;
    width:250px;
    height:201.5px;
    background:rgba(255,200,54,.5);
    top:0;
    left:0;
}
.C_one>div>div>span{
    display:block;
    position: absolute;
    width:100%;
    height:100%;
    top:0;
}
.fdj_box{
    position: absolute;
    border:1px solid #ccc!important;
    box-shadow:3px 3px 4px #ccc;
    z-index:2;
    width:500px;
    height:403px;
    top:272px;
    left:50%;
    margin-left:-100px;
    overflow:hidden;
}
.fdj_box>div{
    width: 1000px;
    height:806px;
    top: 0;
    left:0;
    position: absolute;
}
.fdj_box>div>img{
    width: 100%;
    height:100%;
}
</style>
