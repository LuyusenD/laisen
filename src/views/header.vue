﻿<template>
    <div id="header">
      <div>
        <img src="../image/logo.png" alt="">
      </div>
      <div>
        <ul class="nav_ul">
          <li  @mouseover="over($event)" @mouseout="out($event)" @click="actives($event)">
              <span>HOME</span>
              <span>首页</span>
              <a target="_blank" href="/"    exact></a>
          </li>
          <li @mouseover="over($event)" @mouseout="out($event)" @click="actives($event)">
              <span>PRODUCTS</span>
              <span>产品中心</span>
              <a target="_blank" href="/products"   ></a>
          </li>
          <li @mouseover="over($event)" @mouseout="out($event)" @click="actives($event)">
              <span>SERVICE</span>
              <span>服务中心</span>
              <a target="_blank" href="/Service"  ></a>
          </li>
          <li  @mouseover="over($event)" @mouseout="out($event)" @click="actives($event)">
              <span>ABOUT US</span>
              <span>关于我们</span>
              <a target="_blank" href="/About"  ></a>
          </li>
          <li  @mouseover="over($event)" @mouseout="out($event)" @click="actives($event)">
              <span>DEALER</span>
              <span>经销商</span>
              <a target="_blank" href="/Dealer" ></a>
          </li>
        </ul>
	<div class="En_Cn">
	     <a href="javascript:;">EN</a> / <a href="javascript:;">CN</a> 
	     <img src="../image/header/weixin.png" @mouseover="Imgover($event,'wx')" @mouseout="Imgout($event)"/> 
	     <img src="../image/header/QQ.png" @mouseover="Imgover($event,'qq')" @mouseout="Imgout($event)"/>
	</div>
        <div id="iphone_list">
          <el-button icon="el-icon-more-outline" @click="phone_nav()"  ></el-button>
          <ul class="iphone_nav">
            <li><a target="_blank" href="/" active-class="active" exact>HOME</a></li>
            <li><a target="_blank" href="/products" active-class="active">PRODUCTS</a></li>
            <li><a target="_blank" href="/Service" active-class="active" >SERVICE</a></li>
            <li><a target="_blank" href="/About" active-class="active">ABOUT US</a></li>
            <li><a target="_blank" href="/Dealer" active-class="active">DEALER</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import imgWX from '@/image/header/weixinc.png'
import imgQQ from '@/image/header/qqc.png'
import $ from '../../public/js/jquery-3.2.1.js'
import Vuex from '@/Vuex.js'
export default{
    data(){return{
  	pro:null,
	list:['/','/products','/Service','/About','/Dealer'],
	imgUrl:null
    }},
    created(){
        this.pro = this.$route.path;
        Vuex.state.title = this.$route.path
        console.log(Vuex.state.title)
    },
    mounted(){
        let i = this.list.indexOf(this.pro);
	$(`.nav_ul>li:nth-child(${i+1}) a`).addClass('active')
	$(`.nav_ul>li:nth-child(${i+1}) span:nth-child(1)`).css({'margin-top':'-72px'})
        
    },
    methods:{
        Imgover(e,type){
  	     this.imgUrl = e.target.src;
  	     type=='qq'?e.target.src=imgQQ:e.target.src=imgWX
        },
        Imgout(e){
            e.target.src=this.imgUrl
        },
        phone_nav(){
            $('.iphone_nav').slideToggle()
        },
        over(e){
          if(e.target.nodeName=='A'){
          let mb = e.target.parentElement.children[0]
          mb!=undefined?mb.style.marginTop = -72+'px':''
          }
        },
        out(e){
          if(e.target.nodeName=='A'&&e.target.className.indexOf('active')=='-1'){
          let mb = e.target.parentElement.children[0]
          mb!=undefined?mb.style.marginTop = 0+'px':''
          }
        },
        actives(e){
          console.log(e)
          $('.nav_ul>li>a.active').parent().children().first().animate({'margin-top':'0px'})
          e.target.parentElement.children[0].style.marginTop = -72+'px'
        }
        
    }
}
</script>

<style scoped>
.nav_ul>li{
  display: flex;
  flex-direction: column;
  height: 47px;
  overflow: hidden;
  text-align: center;
  position:relative;
}
.nav_ul>li span{
  transition:.7s
}
.nav_ul>li>a{
  display:block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.nav_ul>li>span:nth-child(2){
  margin-top: 47px;
  color:#fff;
}
ul,li,div,a,p{
  padding:0;margin:0
 }
a{
  color:#000;
  text-decoration:none;
 }
li{list-style: none;}
.nav_ul a{
  transition:1s
}
#iphone_list,#iphone_list>ul{
  display:none
 }
#header{
  width:100%;
  height:100px;
  background:#fec836;
  font-size:20px;
  position:relative;
 }
#header>div:nth-child(1)>img{
  margin-top:25px;
  margin-left:150px;
 }
#header>div:nth-child(1){
  position: absolute;
 }
#header>div:nth-child(2){
  float:right;
  margin-right:70px;
 }

#header>div>ul>li>a.active::before{
  z-index: 1;
  position: absolute;
  display:block;
  top: 40px;
  left: 0;
  width:100%;
  height:2px;
  background:#fff;
  content:'';
  transition:.5s;
 }
#header>div>ul>li>a.active{
  color:#fff;
 }
#header>div>ul>li{
  margin-top:45px; 
  margin-right:60px;
  float:left;
  font-weight: 700;
  position:relative;
 }
#header>div>ul>li:hover:before{
  width:100%;
 }
#header>div>ul>li::before{
  z-index: 1;
  position: absolute;
  display:block;
  top: 40px;
  left: 0;
  width:0px;
  height:2px;
  background:#fff;
  content:'';
  transition:.5s;
 } 
 .En_Cn{
   position:absolute;
   top:7px;
   right:130px
 }
 .En_Cn a:nth-child(2){
   color:#fff;
 }
 .En_Cn>img{
   margin-left:16px;
   cursor:pointer;
 }

 @media (max-width:1766px){
  #header>div:nth-child(1)>img{
  margin-top:36px;
  margin-left:180px;
 }
 }

@media (max-width:1660px){
  #header>div:nth-child(1)>img{
  margin-top:36px;
  margin-left:140px;
 }
 }
@media (max-width:1290px){
  #header>div:nth-child(1)>img{
  margin-top:36px;
  margin-left:140px;
 }
 }
@media (max-width:1264px){
  #header>div>ul>li{
    margin-right:40px;
  }
 }
@media (max-width:1156px){
  #header>div>ul>li{
    margin-right:30px;
  }
 }
@media (max-width:1024px){
  #header>div>ul>li{
    margin-right:20px;
  }
  #header>div:nth-child(1)>img{
  margin-top:36px;
  margin-left:80px;
 }
 #header>div:nth-child(2){
   margin-right:50px;
 }

 }
@media (max-width:860px){
 #header>div>ul>li{
    margin-right:15px;
  }
  #header>div:nth-child(1)>img{
  margin-top:36px;
  margin-left:30px;
 }
 #header>div:nth-child(2){
   margin-right:0px;
 }
 }
@media (max-width:414px){
 #header{
  height:60px;
  }
 #header>div>ul>li{
    display:none;
  }
 #header>div:nth-child(1)>img{
  margin:14px 0 0 10px;
  width:50%;
  }
 #header #iphone_list{
  display:block;
  }
 #header #iphone_list button{
  margin:10px 10px 0;
  width:40px;
  padding: 10px 10px 10px 10px;
  border:1px solid rgba(0,0,0,.1);
  background:rgba(0,0,0,0)
  }
 #header #iphone_list ul{
    position:absolute;
    top:60px;
    z-index: 3;
    width:100%;
    left:0;
    text-align:center;
    background:rgba(29, 29, 29, 0.5)
  }
 #header #iphone_list ul>li{
    padding: 10px 0;
    margin-bottom: 3px;
    border:1px solid #ddd;
    background:rgba(255,255,255,.5);
    box-sizing:border-box;
  }
}
</style>
