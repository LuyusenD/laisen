import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//--商品页---------------------------------------------------------------
// import SL_A6 from '@/image/products/automatic/SL-A6.png'
// import SL_A7 from '@/image/products/automatic/SL-A7.png'
// import SL_A8 from '@/image/products/automatic/SL-A8.png'

// import SL_K10 from '@/image/products/half_automatic/SL-K10.png'
// import SL_K10_1 from '@/image/products/half_automatic/SL-K10-1.png'
// import SL_K11 from '@/image/products/half_automatic/SL-K11.png'
// import SL_K12 from '@/image/products/half_automatic/SL-K12.png'

// import SL_V18 from '@/image/products/villa/SL-V8.png'

// import SL_D18 from '@/image/products/glass/SL-D18.png'


//--商品详情--------------------------------------------------------------
//SL-A6 商品
import SL_A6_1 from '@/image/products/shop/SL-A6/SL-A6xiangqing.png'
import SL_A6_2 from '@/image/products/shop/SL-A6/SL-A6xq2.png'
import SL_A6_3 from '@/image/products/shop/SL-A6/SL-A6xq1.png'
import SL_A6_4 from '@/image/products/shop/SL-A6/xq.png'
//SL-A7 商品
import SL_A7_1 from '@/image/products/shop/SL-A7/a.png'
import SL_A7_2 from '@/image/products/shop/SL-A7/c.png'
import SL_A7_3 from '@/image/products/shop/SL-A7/f.png'
import SL_A7_4 from '@/image/products/shop/SL-A7/xq.png'
//SL-A8 商品
import SL_A8_1 from '@/image/products/shop/SL-A8/1.png'
import SL_A8_2 from '@/image/products/shop/SL-A8/3.png'
import SL_A8_3 from '@/image/products/shop/SL-A8/5.png'
import SL_A8_4 from '@/image/products/shop/SL-A8/xq.png'
//SL-K10 商品
import SL_K10_1d from '@/image/products/shop/SL-K10/A.png'
import SL_K10_2 from '@/image/products/shop/SL-K10/C.png'
import SL_K10_3 from '@/image/products/shop/SL-K10/F.png'
import SL_K10_4 from '@/image/products/shop/SL-K10/xq.png'
//SL-K10-1 商品
import SL_K10_1_1 from '@/image/products/shop/SL-K10-1/1.png'
import SL_K10_1_2 from '@/image/products/shop/SL-K10-1/3.png'
import SL_K10_1_3 from '@/image/products/shop/SL-K10-1/6.png'
import SL_K10_1_4 from '@/image/products/shop/SL-K10-1/xq.png'
//SL-K11 商品
import SL_K11_1 from '@/image/products/shop/SL-K11/1.png'
import SL_K11_2 from '@/image/products/shop/SL-K11/3.png'
import SL_K11_3 from '@/image/products/shop/SL-K11/5.png'
import SL_K11_4 from '@/image/products/shop/SL-K11/xq.png'
//SL-K12 商品
import SL_K12_1 from '@/image/products/shop/SL-K12/1.png'
import SL_K12_2 from '@/image/products/shop/SL-K12/3.png'
import SL_K12_3 from '@/image/products/shop/SL-K12/5.png'
import SL_K12_4 from '@/image/products/shop/SL-K12/xq.png'
//SL-V8 商品
import SL_V8_1 from '@/image/products/shop/SL-V8/A.png'
import SL_V8_4 from '@/image/products/shop/SL-V8/xq.png'
//SL-D18 商品
import SL_D18_1 from '@/image/products/shop/SL-D18/1.png'
import SL_D18_2 from '@/image/products/shop/SL-D18/4.png'
import SL_D18_3 from '@/image/products/shop/SL-D18/6.png'
import SL_D18_4 from '@/image/products/shop/SL-D18/xq.png'
export default new Vuex.Store({
    state: {
        details:[
          {'id':1,
          'title':'SL-A6',
          'color':['经典黑'],
          'type':'全自动智能',
          'lImg_01':SL_A6_1,
          'lImg_02':SL_A6_2,
          'lImg_03':SL_A6_3,
          'xImg_01':SL_A6_4,
          },
          {'id':2,
          'title':'SL-A7',
          'color':['纳米色'],
          'type':'全自动智能',
          'lImg_01':SL_A7_1,
          'lImg_02':SL_A7_2,
          'lImg_03':SL_A7_3,
          'xImg_01':SL_A7_4,
          },
          {'id':3,
          'title':'SL-A8',
          'color':['红古铜','银灰色','经典黑'],
          'type':'全自动智能',
          'typedown':'流程质感看得见',
          'lImg_01':SL_A8_1,
          'lImg_02':SL_A8_2,
          'lImg_03':SL_A8_3,
          'xImg_01':SL_A8_4,
          },
          {'id':4,
          'title':'SL-A8',
          'color':['经典黑'],
          'type':'半自动智能',
          'typedown':'流程质感看得见',
          'lImg_01':SL_K10_1d,
          'lImg_02':SL_K10_2,
          'lImg_03':SL_K10_3,
          'xImg_01':SL_K10_4,
          },
          {'id':5,
          'title':'SL-K10-1',
          'color':['经典黑'],
          'type':'半自动智能',
          'typedown':'流程质感看得见',
          'lImg_01':SL_K10_1_1,
          'lImg_02':SL_K10_1_2,
          'lImg_03':SL_K10_1_3,
          'xImg_01':SL_K10_1_4,
          },
          {'id':6,
          'title':'SL-K11',
          'color':['红古铜','银灰色','经典黑'],
          'type':'半自动智能',
          'typedown':'流程质感看得见',
          'lImg_01':SL_K11_1,
          'lImg_02':SL_K11_2,
          'lImg_03':SL_K11_3,
          'xImg_01':SL_K11_4,
          },
          {'id':7,
          'title':'SL-K12',
          'color':['红古铜','银灰色','经典黑'],
          'type':'半自动智能',
          'typedown':'流程质感看得见',
          'lImg_01':SL_K12_1,
          'lImg_02':SL_K12_2,
          'lImg_03':SL_K12_3,
          'xImg_01':SL_K12_4,
          },
          {'id':8,
          'title':'SL-V8',
          'color':['红古铜'],
          'type':'豪华别墅',
          'lImg_01':SL_V8_1,
          'lImg_02':SL_V8_1,
          'lImg_03':SL_V8_1,
          'xImg_01':SL_V8_4,
          },
          {'id':9,
          'title':'SL-D18',
          'color':['银灰色'],
          'type':'玻璃锁',
          'typedown':'流程质感看得见',
          'lImg_01':SL_D18_1,
          'lImg_02':SL_D18_2,
          'lImg_03':SL_D18_3,
          'xImg_01':SL_D18_4,
          },
        ],
      title:'/'
    },
    mutations: {
  
    },
    actions: {
      
    }
  })
  