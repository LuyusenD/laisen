<template>
    <div class="SL_A" style="overflow:hidden">
        <span class="span_after">SL_A 系列</span>
        <div class="shop_img">
            <div>
                <a href="/details/1"><img src="../../image/products/automatic/SL-A6.png"></a>
                <p>SL-A6</p>
            </div>
            <div>
                <a href="/details/3">
                <img src="../../image/products/automatic/SL-A8.png"></a>
                <p>SL-A8</p>
            </div>
            <div>
                <a href="/details/2">
                <img src="../../image/products/automatic/SL-A7.png"></a>
                <p>SL-A7</p>
            </div>
        </div>
        <div class="shop_phone_img">
            <el-button icon="el-icon-arrow-left" @click="phone_img($event,-240,'.phone_imgs0')" circle></el-button>

            <div class="shop_phone_ImgList">
                <div class="phone_imgs0">
                    <div>
                        <a href="/details/1"><img src="../../image/products/automatic/SL-A6.png"></a>
                        <p>SL-A6</p>
                    </div>
                    <div>
                        <a href="/details/3">
                        <img src="../../image/products/automatic/SL-A8.png"></a>
                        <p>SL-A8</p>
                    </div>
                    <div>
                        <a href="/details/2">
                        <img src="../../image/products/automatic/SL-A7.png"></a>
                        <p>SL-A7</p>
                    </div>
                </div>
                
            </div>

            <el-button icon="el-icon-arrow-right" @click="phone_img($event,240,'.phone_imgs0')" circle></el-button>


        </div>
    </div>
</template>

<style scoped>
.shop_img{
     display:flex;
     justify-content: center;
     width:100%;
     margin-top:200px;
     position:relative;
 }
 @media (max-width: 1439px) {
    .SLV_text{width: 1439px}
}
@media (max-width: 1366px) {
    .shopList .shop_img>div{width: 370px;}
}
@media (max-width: 1150px) {
    .shopList .shop_img>div{width: 300px;}
}
@media (max-width: 1289px) {
    .SLV_text{width: 1289px}
}
@media (max-width: 1239px) {
    .SLV_text{width: 1239px}
}
@media (max-width: 1189px) {
    .SLV_text{width: 1189px}
}
@media (max-width: 1139px) {
    .SLV_text{width: 1139px}
}
@media (max-width: 1089px) {
    .SLV_text{width: 1039px}
}
@media (max-width: 1039px) {
    .SLV_text{width: 1039px}
}

</style>
