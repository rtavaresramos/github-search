<template>
  <div id="app">
    <Browser />
  </div>
</template>

<script>
import Browser from './components/Browser.vue'

export default {
  name: 'App',
  components:{
    Browser
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
