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
             <div class="button">
                <button>取消</button>
                <button>发送</button>
             </div>
         </div>
         
    </div>
</template>

<script>
export default{
    data(){return{}},
    methods:{
        
    },
    mounted(){
        $('input').focus(function(evemt){event.target.parentElement.style.background='#fec836'})
        $('input').blur(function(evemt){event.target.parentElement.style.background='#747474'})
        $('textarea').focus(function(evemt){event.target.parentElement.style.background='#fec836'})
        $('textarea').blur(function(evemt){event.target.parentElement.style.background='#747474'})
    }
}
</script>

<style scoped>
   .customer_box{
       position: relative;
    }
   .customer_box>div{
       width:960px;
       height: 800px;
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
       background:#fff;
       color:#000;
    }
   .customer_box>div>div input,textarea{/**/
       border:0;
       background:rgba(0,0,0,0);
       outline: 0;
       margin-left:20px;
       width:400px;
       color:#fff;
       resize: none;
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
   .customer_box>div>div:nth-child(5){
       height:220px;
   }
   .active{
       background:#fec836;
   }
   .button{
       background:rgba(0,0,0,0)!important;
       display: flex;
       justify-content: flex-end;
    }
   .button>button{
       width:110px;
       height:55px;
       background:#fec836;
       color:#fff;
       border-radius: 10px;
       margin-right: 10px;
       outline: none;
   }
   .button>button:nth-child(1){
       background:#747474;
       color:#000;
   }

@media (max-width:1550px){
  .customer_box{
     width: 100%;
  }
 }

@media (max-width:414px){
    .customer_box>div{
        width:100%
    }
    .customer_box>div>div{
        width:96%;
        box-sizing: border-box;
    }
    .customer_box>div>div>input,.customer_box>div>div>textarea{
        width:200px;
        margin: 0;
    }
}
</style>
