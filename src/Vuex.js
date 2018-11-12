import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//--商品页---------------------------------------------------------------
import SL_A6 from '@/image/products/automatic/SL-A6.png'
import SL_A7 from '@/image/products/automatic/SL-A7.png'
import SL_A8 from '@/image/products/automatic/SL-A8.png'

import SL_K10 from '@/image/products/half_automatic/SL-K10.png'
import SL_K10_1 from '@/image/products/half_automatic/SL-K10-1.png'
import SL_K11 from '@/image/products/half_automatic/SL-K11.png'
import SL_K12 from '@/image/products/half_automatic/SL-K12.png'

import SL_V18 from '@/image/products/villa/SL-V8.png'

import SL_D18 from '@/image/products/glass/SL-D18.png'


//--商品详情--------------------------------------------------------------
//SL-A6 商品
import SL_A6_1 from '@/image/products/shop/SL-A6/SL-A6xiangqing.png'
import SL_A6_2 from '@/image/products/shop/SL-A6/SL-A6xiangqingx.png'
import SL_A6_3 from '@/image/products/shop/SL-A6/SL-A6xq2x.png'
import SL_A6_4 from '@/image/products/shop/SL-A6/SL-A6xq1x.png'
import SL_A6_5 from '@/image/products/shop/SL-A6/1.png'
import SL_A6_6 from '@/image/products/shop/SL-A6/2.png'
import SL_A6_7 from '@/image/products/shop/SL-A6/3.png'
import SL_A6_8 from '@/image/products/shop/SL-A6/4.png'
//SL-A7 商品
import SL_A7_1 from '@/image/products/shop/SL-A7/a.png'
import SL_A7_2 from '@/image/products/shop/SL-A7/b.png'
import SL_A7_3 from '@/image/products/shop/SL-A7/d.png'
import SL_A7_4 from '@/image/products/shop/SL-A7/e.png'
import SL_A7_5 from '@/image/products/shop/SL-A7/g.png'
import SL_A7_6 from '@/image/products/shop/SL-A7/h.png'
import SL_A7_7 from '@/image/products/shop/SL-A7/i.png'
import SL_A7_8 from '@/image/products/shop/SL-A7/j.png'

export default new Vuex.Store({
    state: {
        details:[
          {'id':1,
          'title':'SL_A6',
          'color':'经典黑',
          'type':'全自动智能',
          'lImg_01':SL_A6_1,
          'mImg_01':SL_A6_2,
          'mImg_02':SL_A6_3,
          'mImg_03':SL_A6_4,
          'xImg_01':SL_A6_5,
          'xImg_02':SL_A6_6,
          'xImg_03':SL_A6_7,
          'xImg_04':SL_A6_8
          },
          {'id':2,
          'title':'SL_A7',
          'color':'纳米色',
          'type':'全自动智能',
          'lImg_01':SL_A7_1,
          'mImg_01':SL_A7_2,
          'mImg_02':SL_A7_3,
          'mImg_03':SL_A7_4,
          'xImg_01':SL_A7_5,
          'xImg_02':SL_A7_6,
          'xImg_03':SL_A7_7,
          'xImg_04':SL_A7_8
          },
        ]
    },
    mutations: {
  
    },
    actions: {
      
    }
  })
  