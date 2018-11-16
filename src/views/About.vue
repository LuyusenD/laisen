<template>
    <div id="About_box">
        <div class="bann">
            <img src="../image/about/bananer.png">
            <div class="btn_nav_box">
                <el-button icon="el-icon-arrow-left" @click="btn_navtoggle('-')" circle></el-button>
                <div class="nav_box">
                    <div class="nav" @click="navtoggle($event)">
                        <li class="active">公司简介<i></i></li>
                        <li>人力资源<i></i></li>
                        <li>联系我们<i></i></li>
                        <li>客户留言<i></i></li>
                    </div>
                </div>
                <el-button icon="el-icon-arrow-right"  @click="btn_navtoggle('+')" circle></el-button>
            </div>
        </div>
        <div id="import">
            <div class="import_list" style="left:-0px">
                    <pro-company></pro-company>
                    <pro-resource></pro-resource>
                    <pro-contact></pro-contact>
                    <pro-customer></pro-customer>
            </div>
        </div>
    </div>
</template>

<script>
import company from '../components/about/company.vue'
import resource from '../components/about/resource.vue'
import contact from '../components/about/contact.vue'
import customer from '../components/about/customer.vue'
export default{
    data(){return{
        navcount:0
    }},
    components:{
        'pro-company':company,
        'pro-resource':resource,
        'pro-contact':contact,
        'pro-customer':customer
    },
    methods:{
        navtoggle(e){
            if(e.target.nodeName=='LI'){
                $('.nav .active>i').hide()
                $('.nav .active').removeClass('active')
                e.target.className='active'
                e.target.children[0].style.display='block'
                let bann = $('.import_list') 
                let goLeft = window.innerWidth;
                goLeft<=414?goLeft=414:goLeft<=1024?goLeft=1024:''
                switch(e.target.innerText){
                    case '公司简介':
                        bann.animate({'left':`0px`})
                        $('#import').css('height','auto')
                        break;
                    case '人力资源':
                        goLeft<=1024?goLeft=goLeft+18:''
                        
                        bann.animate({'left':`-${goLeft-17}px`})
                        $('#import').css('height','880px')
                        break;
                    case '联系我们':
                        goLeft<=1024?goLeft=goLeft+17:''
                        bann.animate({'left':`-${2*goLeft-34}px`})
                        $('#import').css('height','830px')
                        break;
                    case '客户留言':
                        goLeft<=1024?goLeft=goLeft+17:''
                        bann.animate({'left':`-${3*goLeft-51}px`})
                        $('#import').css('height','700px')
                        break;
                }
            }
        },
        btn_navtoggle(i){
            i=='+'?this.navcount++:this.navcount--
            this.navcount<0?this.navcount=0:this.navcount>$('.nav>li').length-1?this.navcount=$('.nav>li').length-1:''
            $('.nav').animate({'left':`-${this.navcount*200}px`})
        }
    },
    mounted(){
        
    }
}
</script>





<style scoped>
.bann{
    position: relative;
    z-index:1
 }
.bann img{
    width:100%;
 }
 .btn_nav_box>.el-button{
     display: none;
 }
.bann>div{
    display: flex;
    justify-content: center;
    font-size: 26px;
 }
.bann>div div>li.active{
    background:#fec836;
    color:#fff;
 }
.bann>div div>li{
    width:300px;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position:relative;
 }
.bann>div div>li>i{
    width:35px;
    height:35px;
    background:#fec836;/**/
    transform: rotate(45deg);
    position: absolute;
    bottom: -18px;
    display:none;
    /* margin-left: 35px; */
}
.bann>div div>li:nth-child(1) i{
    display:block;
    /* margin-left: 35px; */
}
#import{
    width:100%;
    overflow:hidden;
}
#import .import_list{
    width:400%;
    position:relative;
    display: flex;
}
#import .import_list>div{
    width:100%;
    float:left;
}
.nav li{
    float:left;
}
@media (max-width:1240px){
   #About_box .nav>li{
       width: 200px;
       height:80px;
   }
 }
@media (max-width:414px){
  .btn_nav_box{
      align-items: center
  }
  .nav_box{
    overflow: hidden;
    width: 200px;
    margin: 0 20px;
    border-radius:10px;
    display: block!important;
  }
  .nav{
    flex-wrap: nowrap;
    width: 800px;
    position: relative;
    height: 80px;
  }
  .btn_nav_box>.el-button{
     display: block;
 }
  .nav>li{
      float: left;
  }
}


</style>
