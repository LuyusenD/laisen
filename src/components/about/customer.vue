﻿<template>
    <div class="customer_box">
        <div>
            

            <div>
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="电话">
            </div>
	    <div>
                <input type="text" placeholder="地址">
                <input type="text" placeholder="型号">
            </div>
            <textarea  cols="30" rows="10" placeholder="留言"></textarea>
            <ul>
                <li><button>发送</button></li>
                <li><button>取消</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){return{}},
    methods:{
        
    },
    mounted(){
        
    }
}
</script>

<style scoped>
  .customer_box{
      height:450px;
      background:#4a89d7;

  }
  .customer_box>div{
      width:352px;
      margin:74px auto 0;
      text-align: center;
  }
  
  .customer_box>div>div input:nth-child(2){
      border-radius: 0 0 10px 10px ;
      top:-3px;
      position: relative;
      border-top:2px solid #aaa;
  }
  .customer_box>div>div input{
      width:316px;
      height:33px;
      border:0;
      outline: 0;
      margin: 0;
      border-radius:10px 10px 0 0;
      padding-left: 20px;
  }
  .customer_box>div>.addss>input{
      border-radius:10px
  }
  .customer_box>div>.addss>input:nth-child(2){
      margin-top:6px;
      border-radius:10px
  }
  textarea{
      margin-top: 2px;
      width:312px;
      height:111px;
      border: 0;
      outline: 0;
      resize: none;
      border-radius:10px;
       padding-left: 20px;
  }
  li{
      list-style: none;
      float:right;
  }
  button{
      width:62px;
      height:34px;
      border:0;
      outline: 0;
      background:#747474;
      border-radius:10px;
      margin-right: 10px;
      cursor: pointer;
  }
  li:nth-child(1) button{
      background:#fec836;
      color:#fff;
  }
</style>
