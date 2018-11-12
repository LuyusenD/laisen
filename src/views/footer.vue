<template>
    <div id="footer">
        <div class="footer_one">
          <div>
            <img src="../image/footer/dalogo.png" >
            <img src="../image/footer/erweima.png" >
            <span class="text_A">森莱智联</span>
          </div>
          <div>
            <span class="text_B">森莱智联</span>
            <div>
              <img src="../image/footer/dianhua.png" >
              <div class="footer_one_phone">
                <p>服务热线</p>
                <p>0755-2107-8049</p>
              </div>
            </div>
            <p>森莱智联公司地址：广东深圳市龙华新区观澜大道57-1号</p>
          </div>
        </div>
        <div class="footer_two">
          <div class="footer___">
            <h5><a href="#">产品中心</a></h5>
            <ul>
              <li><a href="#">全自动系列</a></li>
              <li><a href="#">半自动系列</a></li>
              <li><a href="#">豪华别墅系列</a></li>
              <li><a href="#">玻璃锁系列</a></li>
            </ul>
          </div>
          <div>
            <h5><a href="#">经销商专区</a></h5>
            <ul>
              <li><a href="#">招商加盟</a></li>
            </ul>
          </div>
          <div>
            <h5><a href="#">服务支持</a></h5>
            <ul>
              <li><a href="#">售后咨询</a></li>
            </ul>
          </div>
          <div>
            <h5><a href="#">走进森莱</a></h5>
            <ul>
              <li><a href="#">人力资源</a></li>
              <li><a href="#">公司简介</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h5><a href="#">新闻中心</a></h5>
          </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
ul,li,div,a,p{
  padding:0;margin:0
 }
a{
  color:#000;
  text-decoration:none;
 }
li{list-style: none;}
#footer{
  height:614px;
  width:100%;
  background:url(../image/footer/bg.png);
  position:relative;
  display:flex;
 }
#footer>.footer_one>div:nth-child(1){
  align-items:center;
  font-size:32px;
  margin-right:56px;
  font-weight:600;
 }
#footer>.footer_one>div>img:nth-child(2){
  margin:26px 0 17px 0;
 }
#footer>.footer_one{
  padding:150px 0 0 185px;
  display:flex;
  width:850px;
  font-weight:600;
  color:#3e3e3e;
 }
#footer>.footer_one>div{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  font-size:21px;
  }
#footer>.footer_one>div>div{
  display:flex;
  font-weight:500;
  margin-bottom:92px;
  margin-top:50px;
 }
#footer>.footer_one .footer_one_phone{
  margin:3px 0 0 23px;
 }
#footer>.footer_one .footer_one_phone p:nth-child(1){
  font-size:18px;
  margin-bottom:10px;
  color:#000;
  font-weight:600
 }
#footer .footer_two{
  padding:200px 0 0 38px;
  display:flex;
  justify-content:space-around;
  width:960px;
 }
#footer .footer_two a{
  color:#3e3e3e;
  font-weight:600;
  font-family:'FZHTK'
 }
#footer .footer_two li{
  margin-top:22px;
 }
#footer .text_B{
  display:none
 }
#footer .footer_two li>a{
  color:#727272;
  
 }
@media (max-width:1550px){
  #footer>.footer_one{
  padding:150px 0 0 60px;
 }
 }
@media (max-width:1264px){
  #footer>.footer_one>div:nth-child(2) img{
    width:60px;
    height:60px;
  }
  #footer>.footer_one>div{
    font-size:18px;
  }
  #footer>.footer_one>div:nth-child(1){
    margin-right:30px;
  }
 }
@media (max-width:1156px){
  #footer>.footer_one>div:nth-child(2) img{
    width:60px;
    height:60px;
  }
  #footer>.footer_one>div{
    font-size:18px;
  }
  #footer>.footer_one>div:nth-child(1){
    margin-right:20px;
  }
  #footer>.footer_one{
  padding:150px 0 0 30px;
 }
 }
@media (max-width:1024px){
  #footer>.footer_one>div:nth-child(2) img{
    width:60px;
    height:60px;
  }
  #footer>.footer_one>div{
    font-size:16px;
  }
  #footer>.footer_one>div:nth-child(1){
    margin-right:10px;
  }
 #footer{
   flex-direction:column-reverse;
   height:500px
 }

 #footer .footer_two{
   padding: 0px 0 0 0;
   width:100%;
   margin-top:20px;
 }
 #footer>.footer_one{
   padding: 20px 0 0 0;
   margin:0 auto;
   width:100%;
   justify-content:space-around;
 }
 #footer .text_B{
   display:block;
   font-size:32px;
 }
 #footer .text_A{
   display:none;
 }
  #footer>.footer_one>div>div{
    margin: 32px 0 32px ;
  }
  
 }

@media (max-width:414px){
 #footer{
  height:940px;
  width:100%;
  background:url(../image/footer/bg.png);
  position:relative;
  display:flex;
  text-align:center;

 }
 .footer_two{
     flex-wrap: wrap;
     text-align:center;
     justify-content: start !important;
 } 
 .footer_two>div{
     width:33.33%;
     margin-bottom: 20px;
 }
 #footer>.footer_one{
     flex-wrap:wrap;
  }
 #footer>.footer_one>div>div{
  margin:30px auto;
  }
  .text_B{
    margin:0 auto;
  }
}

</style>
