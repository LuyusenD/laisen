<template>
    <div>
        <div class="company">
            <div class="text" style="height:200px">
                <table></table>
                <p class="text_p">SALIFELINK</p>
                <p>高端指纹典范</p>
            </div>
            <div class="img">
                <img src="../../image/about/company/xiaotu.png">
                <div class="count">
                    <canvas v-for="i in canvasId" :key='i' width=180 height=240 :id="i"></canvas>
                </div>
            </div>
        </div>
        <div class="body_flex">
            <div>
                <p class="after">
                    锁具行业的历史最早可追溯到1547年，锁具行业协会建立后，发布了一系列的
                    规范条例，之后锁具行业开始进入蓬勃发展阶段伴随精工制造的理念及工业化
                    高速进程，目前我们跟上时代步伐，进入智能锁时代。
                </p>
            </div>
            <div>
                <p class="after">
                    愿景<br>
                    以诚信为基础，品质为先锋，技术为后盾，致力于打造中国智能家居系统第一品牌。
                </p>
                <p class="after">
                    使命<br>
                    在品质保障、产品服务、技术创新等方面不遗余力，持续进步，追求卓越。
                </p>
                <p class="after">
                    价值观<br>
                    创新、品质、诚信
                </p>
            </div>
        </div>
        <div class="body_list">
            
            <div><div>与众多品牌签署 <br> 相关战略协议</div></div>
            <div><div>每年平均以100%的<br>速度发展</div></div>
            <div><div>最受天猫、京东消费者欢迎的<br>十大智能锁品牌</div></div>
            <div><div>100多家知名房企智<br>能锁供应商</div></div>
        </div>
    </div>
</template>

<script>
    
export default{
    data(){return{
        canvasId:['canv1','canv2','canv3'],
        isOne:1
    }},
    methods:{
        load(elem,val,size,text,tw=null,Tw=104,Th=100){
        var ctx = document.getElementById(elem).getContext("2d");
         ctx.beginPath();
         ctx.arc(90,90,80,0,2*Math.PI);
         ctx.lineWidth = 8;
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
         ctx.arc(90,90,80,0,2*Math.PI);
         ctx.lineWidth = 8;
         ctx.stroke();
         num += 1;
         if(num > 100){num=100}
         ctx.font = "32px BebasKai";
         ctx.fillStyle="#000"
         elem=='canv2'?ctx.fillText(value+'+',Tw,Th):elem=='canv1'?ctx.fillText(value,Tw,Th):ctx.fillText(value+'%',Tw,Th);
         ctx.beginPath();
         end += 3.6;
         ctx.arc(90,90,80,start*Math.PI/180,end*Math.PI/180);
         ctx.strokeStyle = "#fec836";
         ctx.stroke();
         ctx.font = "24px 宋体"; 
         ctx.fillText(text,50,220);
            if(num == size){clearInterval(t)}
        },30);
       },
       onload(){
           this.load("canv1",'NO.1',75,"行业品质",null,50)
           this.load("canv2",100000,61,"用户选择",26,50)
           this.load("canv3",100,100,"用户好评",52,50)
       },
    },
    mounted(){
         window.addEventListener('scroll',()=>{
            if(this.isOne==1){
            let top = 500;
            window.innerWidth<600?top=500:''

            if($("body,html").scrollTop()>top){
                this.onload();
                this.isOne=0
            }}
        })
    }
    
}
</script>



<style scoped>
.company{
    height:600px;
    background:url(../../image/about/company/bj.png)
 }
.company .text{
    font-size:26px;
    color:#fff;
    width: 250px;
    text-align: center;
    margin: 0 auto;
 }
.text p{position:relative;margin: 40px 0}
.text .text_p::before{
    content: '';
    z-index: 1;
    width:80px;
    height:4px;
    position:absolute;
    background:#fff;
    top: 56px;
    left: 84px;
    
 }
.company .img{
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
 }
.company .img img{
    width:620px;
    margin: 30px 0 0 -610px;
    z-index: 1;
    position:relative;
 }
.company .img div{
    width:722px;
    height:361px;
    margin-left:270px;
    background: #fff;
    position: absolute;
    top:0;
    z-index: 0;
 }
.body_flex{
    display:flex;
 }
.body_flex>div{
    width:50%;
    height:400px;
 }
.body_flex>div{
    background:#c5c5c5;
    font-size: 18px;
    font-weight: 600;
 }
.body_flex>div p{
    margin:100px auto 0;
    width:620px;
    position: relative;
 }
.after::after{
    content: '';
    z-index: 1;
    width:80px;
    height:4px;
    position:absolute;
    background:#fec836;
    top:-30px;
    left: 0;
 }
.body_flex>div:nth-child(2){
    background:#e7e7e7;
  }
.body_flex>div:nth-child(2)>p{
    margin:42px 0 10px 20px;
 }
.body_flex>div:nth-child(2)>p.after::after{
    top:-10px;
 }
.body_list{
    display:flex;
 }
.body_list>div:nth-child(2n){
    background:#6d6d6d;
 }
.body_list>div>div{
    width:100%;
    height: 100%;
    transition:.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
 }
.body_list>div>div:hover{
    transform: scale(1.3)
 }
.body_list>div{
    width:25%;
    height:240px;
    background:#404040;
    color:#fff;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
 }
.count{
    display:flex;
    justify-content: space-around;
    align-items: center;
}

@media (max-width:1300px){
  .company{
      height: 1033px;
      width:100%;
   }
  .company .img{
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
   }
  .company .img img{
      width:620px;
      margin: -50px  auto 0;
      z-index: 1;
      position:relative;
      width:722px;
    }
  .company .img div{
      background: #fff;
      position: relative;
      margin: 0 auto;
      
   }
  .body_flex>div p{
    margin:100px auto 0;
    width:550px;
    position: relative;
  }
 }
@media (max-width:1200px){
    .body_flex>div p{
      margin:100px auto 0;
      width:500px;
      position: relative;
    }
 }

@media (max-width:1140px){
    .body_list>div{
       width:50%;
       margin-top:3px
    }
    .body_list{
        flex-wrap:wrap;
    }
 }
@media (max-width:1073px){
    .body_flex>div p{
      margin:100px auto 0;
      width:460px;
      position: relative;
    }
 }

@media (max-width:414px){
    .company .text{
        margin: 0 0 0 90px;
        font-size: 26px;
    }
    .text .text_p::before {
        top: 59px;
    }
    .company{
        height:1084px;
    }
    .company>.img{
        display: block;
    }
    .company>.img img{
        width:414px;
    }
    .company>.img .count{
	top:-4px;
        width:414px;
        margin-left: 0;
        height:auto;
        display:flex;
        flex-direction: column;
    }
    .body_flex{
        flex-direction: column;
    }
    .body_flex>div{
       width:100%;
       height:380px;
    }
    .body_flex>div:nth-child(1){
        height: 300px;
    }
    .body_flex>div p{
      margin:100px auto 0;
      width:338px;
      position: relative;
    }
    .body_list>div{
      width: 100%;
    }
}
</style>
