﻿<template>
    <div class="resource">
        <div class="res_bann">
            <div>
                WIN-WIN COOPERATION
                <p class="after">员工是企业和发展的力量源泉</p>
            </div>
            <div class="content">
                <div>
                    <img src="../../image/about/resource/hezuo.png">
                </div>
                <div>
                    <p>创新 / 品质 / 诚信</p>
                    <hr>
                    <p>联系我们</p>
                    <p>公司电话: 0755-2107-8049</p>
                    <p>地址:深圳市龙华新区观澜大道57-1号</p>
                </div>
            </div>
        </div>
        <div class="res_table">
            <table>
                <tr height=70>
                    <td>职位名称</td>
                    <td>招聘人数</td>
                    <td>部门</td>
                    <td>地点</td>
                    <td>时间</td>
                </tr>
                <tr height=70>
                    <td>业务员</td>
                    <td>多名</td>
                    <td>业务部</td>
                    <td>深圳</td>
                    <td>2018-11.1</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
  .resource{
      position: relative;
  }
  .resource .res_bann>div:nth-child(1) p{
      position: relative;
      margin: 40px 0 40px 0;
  }
  .resource .res_bann>div:nth-child(1){
      height: 200px;
      font-size: 28px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
  }
  .after:after{
      content: '';
      background:#fec836;
      width: 80px;
      height:4px;
      z-index: 1;
      position: absolute;
      top: -22px;
      left: 142px;
  }
  .content{
      display:flex;
  }
  .content>div>img{
      width:100%;
      height: 100%;
  }
  .content>div{
      width:50%;
      background:#fec836;
      color:#fff3d3;
	
  }
  .content>div:nth-child(2){
      padding:50px;
      font-size: 24px;
  }
  .res_table table{
      width:100%;
      font-size: 26px;
      text-align: center;
      color:#fff;
      background:#bcbcbc;
      margin-top:30px;

  }
  .res_table table>tr:nth-child(1){
      font-size: 30px;
      background:#868686;
  }
  
@media (max-width:1550px){
  .resource{
     width: 100%;
  }
 }
@media (max-width:414px){
  .res_bann{
      width: 414px;
      
  }
  .resource>.res_bann>div:nth-child(1){
      font-size: 18px;
      height: 186px;
  }

  .after:after {
      top: -20px;
      left: 70px;
  }
  .content{
      flex-direction: column;
  }
  .content>div,.res_table>table,tr{
      width: 100%;
      font-size: 18px!important;
      margin-top:0px;
  }
  .content>div{
        box-sizing: border-box;
    }
}


</style>

