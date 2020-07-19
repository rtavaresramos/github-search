<template>
  <div class="container">
    <Browser :row="row" :col="col" :inputLabel="placeholder"/>
    <h3>{{ userFound }}</h3>
  </div>
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
      placeholder: '',
      userFound: localStorage.getItem('userFound')
    }
  },
  mounted(){
    if(this.userFound != ''){
    localStorage.setItem('userFound', '')
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
    .container{
      max-width: 700px;
      margin: 0 auto;
    }

    body,html,*{
      animation: fadeIn 1s;
      transition: ease;
    }
    h3{
      font-size: 24px;
      font-weight: 400;
      margin-top: 30px;
    }
</style>
