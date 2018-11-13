<template>
    <div class="customer_box">
         <div>
             <div class="title">
                 <p>COUSTOMER MESSAGE</p>
                 <p>客户留言</p>
             </div>
             <div>
                 姓名: <input type="text">
             </div>
             <div>
                 联系电话: <input type="text">
             </div>
             <div>
                 住址: <input type="text">
             </div>
             <div>
                 留言: <textarea id="" cols="30" rows="10" ></textarea>
             </div>
         </div>
    </div>
</template>

<style scoped>
   .customer_box{
       position: relative;
   }
   .customer_box>div{
       width:960px;
       height: 800px;
       background:red;
       margin: 0 auto;
       text-align: center;
       display:flex;
       flex-direction: column;
       align-items: center;
   }
   .customer_box>div>div.title{
       height: 150px;
       width:auto;
       font-size: 26px;
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       background:initial
   }
   .customer_box>div>div input{/*textarea*/
       border:0;
       background:rgba(0,0,0,0);
       outline: 0;
       margin-left:20px;
       width:400px;
   }
   .customer_box>div>div{
       height: 60px;
       width:600px;
       font-size: 26px;
       margin-top:10px;
       background:#747474;/*#fec836*/
       border-radius: 6px;
       display: flex;
       padding:10px;
       color:#fff;
   }
   .customer_box>div>div:nth-child(5),textarea{
       height:200px;
   }
</style>
