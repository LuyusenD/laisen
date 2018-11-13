<template>
    <div id="About_box">
        <div class="bann">
            <img src="../image/about/bananer.png">
            <div class="nav" @click="navtoggle($event)">
                <li>公司简介<i></i></li>
                <li>人力资源<i></i></li>
                <li>联系我们<i></i></li>
                <li>客户留言<i></i></li>
            </div>
        </div>
        <div id="import">
            <div class="import_list" style="left:-0px">
                <div>
                    <pro-company></pro-company>
                </div>
                <div>
                    <pro-resource></pro-resource>
                </div>
                <div>
                    <pro-contact></pro-contact>
                </div>
                <div>
                    <pro-customer></pro-customer>
                </div>
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
    data(){return{}},
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
                if(e.target.innerText=='公司简介'){
                    bann.animate({'left':'0px'})
                    $('#import').css('height','auto')
                }else if(e.target.innerText=='人力资源'){
                    bann.animate({'left':'-1582px'})
                    $('#import').css('height','880px')
                }else if(e.target.innerText=='联系我们'){
                    bann.animate({'left':'-3164px'})
                    $('#import').css('height','830px')
                }else if(e.target.innerText=='客户留言'){
                    bann.animate({'left':'-4746px'})
                }
            }
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
.bann>div{
    display: flex;
    justify-content: center;
    font-size: 26px;
 }
.bann>div>li.active{
    background:#fec836;
    color:#fff;
 }
.bann>div>li{
    width:300px;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position:relative;
 }
.bann>div>li>i{
    width:35px;
    height:35px;
    background:#fec836;
    transform: rotate(45deg);
    position: absolute;
    bottom: -18px;
    display:none;
}
#import{
    width:100%;
    overflow:hidden;
}
#import .import_list{
    width:6328px;
    position:relative;
    
}
#import .import_list>div{
    width:1582px;
    float:left;
}

</style>
