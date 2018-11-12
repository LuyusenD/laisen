<template>
  <div id="app">
    <ls-header></ls-header>
    <router-view/>
    <ls-footer></ls-footer>
  </div>
</template>
<script>
  import Header from './views/header.vue'
  import Footer from './views/footer.vue'

  export default{
    data(){
      return{}
    },
    components:{
      'ls-header':Header,
      'ls-footer':Footer
    }
  }
</script>
<style>
  #app{
    width: 100% !important;
    
  }
  @media (max-width:1024px) {
    #app{
      min-width: 1024px;
    }
  }
  @media (max-width:414px) {
    #app{
      min-width: 100%;
    }
  }
</style>
