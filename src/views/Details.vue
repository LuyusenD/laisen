<template>
    <div id="Details_box">
        <div class="nav">
            全自动SL-A6 <div></div> <span>概述/详情</span>
        </div>
        <div class="content">
            <div class="C_one">
                <div>
                    <img :src="cAs.lImg_01">
                </div>
                <div>
                    <ul>
                        <li><el-button icon="el-icon-arrow-left" circle></el-button></li>
                        <li class="active"><img :src="cAs.mImg_01"></li>
                        <li><img :src="cAs.mImg_02"></li>
                        <li><img :src="cAs.mImg_03"></li>
                        <li><el-button icon="el-icon-arrow-right" circle></el-button></li>
                    </ul>
                </div>
            </div>
            <div class="C_two">
               <p>{{cAs.title}}</p>
               <div>
                   <span>产品配色</span>
                   <a href="javascript:;"><i></i> {{cAs.color}}</a>
               </div>
               <span>购买可致电：0755-2107-8049</span>
            </div>

        </div>
        <div class="shop_img">
            <!-- 介绍 -->
            <div>
                <span>{{cAs.type}}</span>
                <div class="transDown"></div>
            </div>
            <div>
                <img :src="cAs.xImg_01">     
            </div>
            <div>
                <img :src="cAs.xImg_02">     
            </div>
            <div>
                <img :src="cAs.xImg_03">  
            </div>
            <div>
                <img :src="cAs.xImg_04">      
            </div>
            <div class="cAs">
                <p>产品参数</p>

                <table>
                    <tr>
                        <td>密码键盘</td>
                        <td>13位密码键盘</td>
                        <td>指纹头</td>
                        <td>半导体指纹头</td>
                    </tr>
                    <tr>
                        <td>开门方式</td>
                        <td>指纹、密码、钥匙、门卡、APP</td>
                        <td>指纹头算法</td>
                        <td>高清算法</td>
                    </tr>
                    <tr>
                        <td>开门记录数</td>
                        <td>500条开门记录数</td>
                        <td>误识率</td>
                        <td>≤0.0001%</td>
                    </tr>
                    <tr>
                        <td>颜色</td>
                        <td>经典黑</td>
                        <td>拒识率</td>
                        <td>≤0.01%</td>
                    </tr>
                    <tr>
                        <td>尺寸</td>
                        <td>395*755*95</td>
                        <td>识别速度</td>
                        <td>≤0.1秒</td>
                    </tr>
                    <tr>
                        <td>外观材料</td>
                        <td>锌合金</td>
                        <td>用户数</td>
                        <td>505组指纹</td>
                    </tr>
                    <tr>
                        <td>应急电源</td>
                        <td>USB接口</td>
                        <td>密码</td>
                        <td>24位虚位密码</td>
                    </tr>
                    <tr>
                        <td>锁舌</td>
                        <td>不锈钢实心</td>
                        <td>清晰度</td>
                        <td>500dpi</td>
                    </tr>
                    <tr>
                        <td>应急开启</td>
                        <td>叶片式蛇形空转钥匙</td>
                        <td>工作温度</td>
                        <td>-25℃-55℃</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
import Vuex from '@/Vuex.js'

export default {
    data(){return{
        cAs:{}
    }},
    created(){
        let id = this.$route.query.id ;
        const _this = this ;
        Vuex.state.details.map((obj)=>{
            if(obj.id==id){
                _this.cAs = obj
            }
        })
        if(_this.cAs.id==undefined)alert('details 页面 404 ')
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
  .content .C_one li.active{
      border:2px solid #fec836;
   }
  .content .C_one li{
      margin: 0 3px;
      border:2px solid #b2b2b2;
      box-sizing: border-box;
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
      width:970px;
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
   table{
       width:970px;
       height:720px;
       text-align:start;
       box-sizing: border-box;
       font-size:24px;
   }
   table td{
       border:1px solid #a9a9a9;
       padding-left:30px;
   }
   table tr{
       background:#d4d4d4;
       
   }
   table tr:nth-child(2n){
       background:#ffffff;
   }

</style>
