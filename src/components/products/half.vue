<template>
    <div class="SL_K">
        <span class="span_after">SL_K 系列</span>
        <div class="shop_img">
            <div>
                <a href="/details/4"><img src="../../image/products/half_automatic/SL-K10.png"></a>
                <p>SL-K10</p>
            </div>
            <div>
                <a href="/details/5"><img src="../../image/products/half_automatic/SL-K10-1.png"></a>
                
                <p>SL-K10-1</p>
            </div>
            <div>
                <a href="/details/6"><img src="../../image/products/half_automatic/SL-K11.png"></a>
                <p>SL-K11</p>
            </div>
            <div>
                <a href="/details/7"><img src="../../image/products/half_automatic/SL-K12.png"></a>
                <p>SL-K12</p>
            </div>
        </div>
        <div class="shop_phone_img">
            <el-button icon="el-icon-arrow-left" @click="phone_img($event,-240,'.phone_imgs1')" circle></el-button>
            <div class="shop_phone_ImgList">
                <div class="phone_imgs1">
                    <div>
                        <a href="/details/4"><img src="../../image/products/half_automatic/SL-K10.png"></a>
                        <p>SL-K10</p>
                    </div>
                    <div>
                        <a href="/details/5"><img src="../../image/products/half_automatic/SL-K10-1.png"></a>
                        
                        <p>SL-K10-1</p>
                    </div>
                    <div>
                        <a href="/details/6"><img src="../../image/products/half_automatic/SL-K11.png"></a>
                        <p>SL-K11</p>
                    </div>
                    <div>
                        <a href="/details/7"><img src="../../image/products/half_automatic/SL-K12.png"></a>
                        <p>SL-K12</p>
                    </div>
                </div>
            </div>
            <el-button icon="el-icon-arrow-right" @click="phone_img($event,240,'.phone_imgs1')" circle></el-button>
        </div>
    </div>
</template>

<style scoped>
    .SL_K>.shop_img>div{
        width:380px;
    }
    @media (max-width:1488px){
        .SL_K>.shop_img>div{
            width:345px;
        }
    }
    @media (max-width:1388px){
        .SL_K>.shop_img>div{
            width:315px;
        }
    }
    @media (max-width:1300px){
        .SL_K .shop_img{
            justify-content: start !important;
            margin:0 auto 0 -350px!important;
            padding-top:200px;
            width:700px !important;
            overflow:hidden;
            left: 50%;
        }
        .SL_K .shop_img>div{
            padding:0 20px
        }
        .span_after{
            left: 23%;
        }
    }
</style>
