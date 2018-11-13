<template>
    <div>
        <div class="company">
            <div class="text" style="height:283px">
                <p class="text_p">SALIFELINK</p>
                <p>高端指纹典范</p>
            </div>
            <div class="img">
                <img src="../../image/about/company/xiaotu.png">
                <div>

                </div>
            </div>
        </div>
        <div class="body_flex">
            <div>
                <p class="after">
                    锁具行业的历史最早可追溯到1547年，锁具行业协会建立后，发布了一系列的<br>
                    规范条例，之后锁具行业开始进入蓬勃发展阶段伴随精工制造的理念及工业化<br>
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

<style scoped>
.company{
    height:800px;
    background:url(../../image/about/company/bj.png)
 }
.company .text{
    font-size:36px;
    color:#fff;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
.text p{position:relative;margin: 40px 0}
.text .text_p::before{
    content: '';
    z-index: 1;
    width:80px;
    height:4px;
    position:absolute;
    background:#fff;
    top:80px;
    left: 50px;
    
 }
.company .img{
    position:relative;
 }
.company .img img{
    width:620px;
    margin:20px 0 0 150px;
    z-index: 1;
    position:relative;
 }
.company .img div{
    width:722px;
    height:361px;
    background: #fff;
    position: absolute;
    top:0;
    left:44%;
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
    margin:50px 0 10px 20px;
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
</style>
