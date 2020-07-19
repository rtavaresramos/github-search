<template>
  <Browser :row="row" :col="col" />
</template>

<script>
import Browser from '../components/Browser.vue'

export default {
  name: 'App',
  components:{
    Browser
  },
  data(){
    return {
      col: true,
      row: false,
    }
  }
}
</script>
<style>

  @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; } 
    }
    @-moz-keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }


    body,html,*{
      animation: fadeIn 1s;
      transition: ease;
    }
</style>
