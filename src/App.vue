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
</style>
