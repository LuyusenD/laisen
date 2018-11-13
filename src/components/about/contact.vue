<template>
    <div class="contact_box">
        <img src="../../image/about/contact/ditu.png">
        <div>
            <div>
                <img src="../../image/about/contact/youxiang.png">
                salifelink@163.com
            </div>
            <div>
                <img src="../../image/about/contact/kefu1.png">
                0755-2107-8049
            </div>
            <div>
                <img src="../../image/about/contact/dibiao.png" >
                深圳市龙华新区观澜大道57-1号
            </div>
        </div>
    </div>
</template>

<style scoped>
   .contact_box>img{
       width:100%;
   }
   .contact_box>div{
       height:350px;
       background:url(../../image/about/contact/beijing.png);
       display:flex;
       justify-content: center;
   }
   .contact_box>div>div{
       width:222px;
       display: flex;
       flex-direction: column;
       align-items:center;
       justify-content: space-around;
       font-size: 26px;
       font-weight: 600;
       text-align: center;
       margin: 0 50px;
   }
</style>
