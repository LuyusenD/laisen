<template>
    <div id="Box_">
        <div id="banner">
            <div class="bann_img">
                <el-carousel indicator-position="outside" @change='bann_change()' :interval="5000" >
                    <el-carousel-item v-for="item in bannList" :key="item"><!---->
                      <img :src="item">
                    </el-carousel-item>
                </el-carousel>
                <div class="bann_text">
                    <div class="bann_Tone">
                        INTELLIGENT <br> LIFE <br> WITH YOU
                        <p>莱森智联 懂你更懂家</p>
                    </div> 
                    <div class="bann_Ttwo">
                        ARTISANAL <br> QUALITY
                        <p>专注品质</p>
                        <span>Focus on Quality</span>
                    </div> 
                    <div class="bann_Tthree">
                        SMART LOCK <br> NEW <br> TRENDS
                        <p>智能锁 新动向</p>
                    </div>
                    <div class="bann_Tfore">
                        A KEY TO <br> OPEN <br> INTELLIGNT LIFE
                        <p>锁好 家安 心更安</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <div v-for="i in gridList" :key='i'>
                <img :src="i" alt="">
            </div>
        </div>
        <div class="shop_bann">
            <table></table>
            <div class="shop_bann_item">
                <div class="shop_bann_con">
                    <span>SMART PASSWORD LOCK</span>
                </div>
                <el-carousel :interval="4000" type="card" >
                    <el-carousel-item v-for="(i,index) in shopBannList"  :key="index">
                        <img :src="i.img"  style="height:280px;"/>
                        <p>{{i.title}}</p>
                        <p>{{i.type}}</p>
                        <router-link :to="'/details/'+i.id">了解更多》</router-link> <!--@click="Model_show(i.id)"-->
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="counter">
            <span>ABOUT SALIFELINK</span>
            <div class="counter_all">
                <canvas v-for="i in canvasId" :key='i' width=320 height=400 :id="i"></canvas>
            </div>
        </div>
        <div id="Model_shop">
            <div class="Model_main">
                <el-button icon="el-icon-error" @click="Model_hide()" circle></el-button>
                {{this.shop}}
            </div>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import shop_one from '../image/index/shop_bann/SL-A6.png'
import shop_two from '../image/index/shop_bann/SL-D18yin.png'
import shop_three from '../image/index/shop_bann/SL-K12zong.png'
import banner_one from '../image/index/banner/5.png'
import banner_two from '../image/index/banner/6.png'
import banner_three from '../image/index/banner/7.png'
import banner_four from '../image/index/banner/8.png'
import grid_one from '../image/index/grid/4.png'
import grid_two from '../image/index/grid/5.png'
export default {
    data(){
      return {
          isOne:1,
          bannList:[banner_one,banner_two,banner_three,banner_four],
          canvasId:['canv1','canv2','canv3'],
          gridList:[grid_one,grid_two],
          shopBannList:[
              {id:1,img:shop_one,title:'SL-A6',type:'全自动系列'},
              {id:9,img:shop_two,title:'SL-D18',type:'玻璃锁'},
              {id:7,img:shop_three,title:'SL-K12',type:'半自动系列'}
          ],
          shop:null,
          bann_index:-1
      }
    },
    methods:{
       load(elem,val,size,text,tw=null,Tw=124,Th=145){
        var ctx = document.getElementById(elem).getContext("2d");
         ctx.beginPath();
         ctx.strokeStyle = "#aaa";
         ctx.arc(130,130,120,0,2*Math.PI);
         ctx.lineWidth = 10;
         ctx.stroke();
         var start = -90;
         var end = -90;
         var num = 0;  //描边进度条中数字值 1%
         var value = val
         if(elem!='canv1'){
             var value = 0;
             let T = setInterval(function(){
                 elem=='canv2'?value += 1234:value+=1
                 if(val<=value){
                     clearInterval(T)
                     value = val
                     Tw=tw
                 }
             },15)
         }
        let t = setInterval(function(){
         ctx.clearRect(0,0,500,400); 
         ctx.beginPath();
         ctx.strokeStyle = "rgba(0,0,0,0)";
         ctx.arc(130,130,120,0,2*Math.PI);
         ctx.lineWidth = 10;
         ctx.stroke();
         num += 1;
         if(num > 100){num=100}
         ctx.font = "32px BebasKai";
         ctx.fillStyle="#fff"
         elem=='canv2'?ctx.fillText(value+'+',Tw,Th):elem=='canv1'?ctx.fillText(value,Tw,Th):ctx.fillText(value+'%',Tw,Th);
         ctx.beginPath();
         end += 3.6;
         ctx.arc(130,130,120,start*Math.PI/180,end*Math.PI/180);
         ctx.strokeStyle = "#fec836";
         ctx.stroke();
         ctx.font = "24px 宋体"; 
         ctx.fillText(text,80,320);
            if(num == size){clearInterval(t)}
        },30);
       },
       onload(){
           this.load("canv1",'NO.1',75,"行业品质",null,90)
           this.load("canv2",100000,61,"用户选择",60,80)
           this.load("canv3",100,100,"用户好评",94,99)
       },
       Model_show(Id){
           $('#Model_shop').fadeIn()
           let list = this.shopBannList;
           for(var i=0;i<list.length;i++){
               if(list[i].id==Id){
                   this.shop = list[i]
               }
           }
           
       },
       Model_hide(){
           $('#Model_shop').fadeOut();
           this.shop=null;
       },
       bann_change(){
           var i = $('.bann_img .el-carousel__container>div').index($('div.is-active.is-animating').next())
           this.bann_index = i
       },
       bann_textC(){
           let i = this.bann_index ;
             if(i==-1){
                $('.bann_Tone').show()
                window.innerWidth<=500?
                $('.bann_Tone').animate({'top':'30px','height':'180px','font-size':'22px','left':'120px'},1500):
                $('.bann_Tone').animate({'top':'210px','height':'310px','width':'400px'},1500)
                console.log(window.innerWidth)
             }
             if(i==1){
                $('.bann_Ttwo').show()
                window.innerWidth<=500?
                $('.bann_Ttwo').animate({'top':'70px','height':'170px','width':'170px','font-size':'24px','left':'150px'},1500):
                $('.bann_Ttwo').animate({'top':'230px','height':'270px'},1500)
             }
             if(i==2){
                $('.bann_Tthree').show()
                window.innerWidth<=500?
                $('.bann_Tthree').animate({'top':'230px','height':'170px','width':'160px','font-size':'22px','left':'220px'},1500):
                $('.bann_Tthree').animate({'top':'220px','height':'270px','width':'300px'},1500)
             }
             if(i==3){
                $('.bann_Tfore').show()
                window.innerWidth<=500?
                $('.bann_Tfore').animate({'top':'100px','height':'170px','width':'180px','font-size':'22px','left':'180px'},1500):
                $('.bann_Tfore').animate({'top':'230px','height':'270px','width':'350px'},1500)
             }
       }
    },
    created(){
        
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            if(this.isOne==1){
            if($("body,html").scrollTop()>1600){
                this.onload();
                this.isOne=0
            }}
        })
        this.bann_textC()
    },
    watch:{
        bann_index(){
            $('.bann_text>div').hide()
            $('.bann_text>div').css({'height':'50px','top':'140px'})
            this.bann_textC()
        }
    }
    
}
</script>
<style>
li.is-active .el-carousel__button{
    background:#fec836 !important;
    }
.el-carousel__indicators--outside{
    position:absolute !important;
    margin-left:-76px;
    }
.shop_bann .shop_bann_item div.is-active{
    background-color:#fec836 !important;
    }
.shop_bann .shop_bann_item .el-carousel__item{
    background-color:rgba(0,0,0,0) !important;
    }
.shop_bann .el-carousel__indicators--outside button{
    width:16px;
    height:16px;
    border-radius:50%;
    background:rgba(0,0,0,0) !important;
    border: 2px solid #fff;
    }
.shop_bann .el-carousel__container button,.shop_bann .el-carousel__indicators--outside{
    display:none;
    }
.shop_bann .el-carousel__container{
    margin-left:114px;
 }
.bann_img .el-carousel__container,.bann_img .el-carousel{
    height:600px
  }
.shop_bann_item .el-carousel__container{
    height:460px;
  }
.shop_bann_item .el-carousel__item{
    width:270px;
    height:430px;
}
@media (max-width:860px){
 .shop_bann .el-carousel__container{
    margin-left:50px;
  }
 } 
@media (max-width:414px){
 .bann_img .el-carousel__container,.bann_img .el-carousel{
    height:450px;
  }
  .shop_bann_item .el-carousel__item{
    width:200px;
    border-radius:10px;
  }
  .shop_bann .el-carousel__container{
    margin-left:00px;
  }
}

</style>

<style scoped>

a{text-decoration:none;}
li{float:left;list-style:none}
p,ul,li{
    margin:0;padding:0
 }


/*走马灯*/
.bann_img{
    position: relative;
}
.el-carousel__indicators{
    position:absolute;
    margin-left:-38px;
 }
#banner,.shop_bann,.counter,.counter_all{
    width:100%;
    height:600px;
 }
.grid{
    display:flex;
    flex-wrap:wrap;
 }
.grid img{
    transition:1s;
 }
.grid>div{
    width: 50%;
    height:400px;
    overflow:hidden;
    cursor: pointer;
 } 
.grid img:hover{
    transform:scale(1.2)
 }
.counter{
    background:url(../image/index/beijin.png)
 }
.counter_all{
    background:rgba(0,0,0,.7)
 }
.counter{
    position:relative;
    text-align:center;
 }
.counter span{
    position:absolute;
    font-size:30px;
    font-weight:500;
    color:#fff;
    padding: 65px 0 49px 0;
    width:280px;
    margin-left:-140px;
    font-family:'AkzidenzGroteskBQ';
 }
.counter span::before{
  z-index: 1;
  position: absolute;
  display:block;
  bottom: 0;
  left: 50%;
  margin-left:-50px;
  width:100px;
  height:4px;
  background:#fec836;
  content:'';
  transition:.5s;
 }
.counter .counter_all>canvas{
    margin:195px 104px 0;
 }
.shop_bann{
    background:url(../image/index/beiji.png);
    display:flex;
    justify-content:center;
 }
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.shop_bann .shop_bann_item{
        position: relative;
        text-align: center;
        color:#000;
        width:1000px;
    }
.shop_bann .shop_bann_item img{
    margin-top:20px;
 }
.shop_bann .shop_bann_item p{
    padding-top:10px;
 }
.shop_bann .shop_bann_item a{
    color:#fff;
    border:2px solid #fff;
    display:block;
    margin:16px auto 0;
    width:110px;
    height:32px;
    padding: 3px 6px 0px 12px;
    box-sizing:border-box;
 }
.shop_bann .shop_bann_con{
    height:159px;
    display:flex;
    align-items:center;
    flex-flow:column wrap;
    font-size:22px;
    color:#fff;
    position:relative;
    top:46px;
 }
.shop_bann .shop_bann_con span{
    position:relative;
 }
.shop_bann .shop_bann_con span::before,.shop_bann .shop_bann_con span::after,.shop_bann .shop_bann_con li::before{
    z-index: 1;
    position: absolute;
    display:block;
    top:45%;
    left: -112px;
    width:50px;
    height:6px;
    background:#fec836;
    content:'';
    transition:.5s;
 }
.shop_bann .shop_bann_con span::after{
    left:325px;
 }
.shop_bann .shop_bann_con li::before{
    top:4px;
    left:50%;
    margin-left:-3px;
    width:6px;
    height:50px;
 }
.shop_bann .shop_bann_con li.active{
    background:rgba(0,0,0,0);
    border:2px solid #fff;
 }
.shop_bann .shop_bann_con li{
    width:16px;
    height:16px;
    background:#fff;
    margin:100px 19px 50px;
    cursor: pointer;
    border-radius:50%;
 }
#Model_shop{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:rgba(0,0,0,.7);
    z-index:999;
    display:none;
 }
#Model_shop .Model_main{
    width:60%;
    height:70%;
    background:#fff;
    left:50%;
    top:50%;
    position: absolute;    
    margin:-20% 0 0 -30%;
    border-radius:16px;
 }
#Model_shop .Model_main .el-button{
    float:right;
}

@media (min-width:1920px){
 #banner>.bann_img img{
      width:100%;
      height:100%;
  }
 }
@media (max-width:1766px){
  .grid>div>img{
    margin-left:-65px;
  } 
  #banner>.bann_img img{
      margin-left:-60px
  }
 }
@media (max-width:1550px){
  .grid>div>img{
    margin-left:-80px;
  } 
  #banner>.bann_img img{
      margin-left:-150px
  }
 }
@media (max-width:1290px){
  .grid>div>img{
    margin-left:-160px;
  } 
  #banner>.bann_img img{
      margin-left:-310px
  }
 }
@media (max-width:1156px){
  .grid>div>img{
    margin-left:-190px;
  } 
  #banner>.bann_img img{
      margin-left:-350px
  }
 }
@media (max-width:1024px){
  .grid>div>img{
    margin-left:-240px;
  } 
  #banner>.bann_img img{
      margin-left:-420px
  }
 #canv2,#canv3{
     display:none;
 }
 
 }
@media (max-width:860px){
  .grid>div>img{
    margin-left:-280px;
  } 
  #banner>.bann_img img{
      margin-left:-50%;
      width:200%;
      height:100%;
  }
 #canv2,#canv3{
     display:none;
 }
 }
@media (max-width:414px){
  .counter{
    display:none;
   }
  .shop_bann .shop_bann_con span:after,.shop_bann .shop_bann_con span:before,.shop_bann .shop_bann_con li::before{
      display:none !important;
   }
  #banner{
      height:450px;
   }
 .grid>div>img{
    height:100%;
    width:100%;
    margin-left:0;
    transition:1s;
  } 
.grid>div{
    width: 100%;
    height:200px;
    overflow:hidden;
    cursor: pointer;
 } 
.shop_bann,.shop_bann .shop_bann_item{
    height:565px ;
 }
.shop_bann .shop_bann_con li{
    display:none;
 }
.shop_bann .shop_bann_con{
    height:50px;
    margin-top:30px;
 }

.shop_bann .shop_bann_con span{
    top:-50px

 }



.shop_bann .shop_bann_item p{
    padding-top:10px;
 }
.shop_bann .shop_bann_item a{
    color:#fff;
    border:2px solid #fff;
    display:block;
    margin:16px auto 0;
    width:110px;
    height:32px;
    padding: 3px 6px 0px 12px;
    box-sizing:border-box;
 }

#Model_shop{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:rgba(0,0,0,.7);
    z-index:999;
    display:none;
 }
#Model_shop .Model_main{
    width:60%;
    height:70%;
    background:#fff;
    left:50%;
    top:50%;
    position: absolute;    
    margin:-70% 0 0 -30%;
    border-radius:16px;
 }
#Model_shop .Model_main .el-button{
    float:right;
 }

.bann_text{
    position: absolute;
    top:0;
    left:5%;
    width:0%;
    height:90%;
    z-index: 2;
}


 }
</style>

<style scoped>
/*bann Text style*/
.bann_text{
    position: absolute;
    top:0;
    left:5%;
    width:90%;
    height:90%;
    z-index: 2;
}

.bann_text>div{
    font-size:40px;
    color:#fff;
    position: absolute;
    top:140px;
    left:55%;
    height:50px;
    overflow: hidden;
    display:none;
    width:230px;
}
.bann_text>div.bann_Tone>p{
    margin-top:60px;
}
.bann_text>div.bann_Ttwo>p{
    margin-top:40px;
    margin-bottom:-8px;
}
.bann_text>div.bann_Tthree{
    color:#000;
    margin-left:-30px;
}
.bann_text>div.bann_Tthree>p{
    margin-top:40px;
}
.bann_text>div.bann_Tfore{
    color:#000;
}
.bann_text>div.bann_Tfore>p{
    margin-top:40px;
}
.bann_text>div span{
   font-size:19px
}
</style>
