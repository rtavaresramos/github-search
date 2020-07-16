<template>
  <div class="container">
    <div class="search__container">
      <div class="form__container">
        <div class="form__content">
          <h1>Github </h1>
          <span>Search</span>
        </div>
       <div class="input__container">
        <input @keyup="getUser" type="text">
        <a href="#" class="button-search"> 
          <!-- <i class="fas fa-search"></i> -->
          Buscar
         </a>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Browser',
  data(){
    return{
      github: {
        url: 'https://api.github.com/users',
        client_id: '6dd2bb42360aaf81c4a6',
        cliente_secret: '83f8de88a233a39cf41eed1401b0c734e790f708',
        count: 7,
        sort:'created: asc'
      },
      user: [],
      repos: []
    }
  },
  methods: {
    getUser(e){
      const user = e.target.value
      const { url, client_id, client_secret, count, sort } = this.github 

      axios.get(
      `${url}/${user}?cliente_id=${client_id}&client_secret=${client_secret}`
      ).then(({data})=> console.log(data))

      
    }
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
body, * {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body a, * a {
  text-decoration: none;
  color: unset;
}

body input, * input {
  width: 600px;
  height: 100%;
  background: #FFFFFF;
  border: 2px solid #000000;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body .input__container, * .input__container {
  width: 700px;
  height: 50px;
}

body .input__container .button-search, * .input__container .button-search {
  margin-left: -10px;
  border: none;
  border-bottom: 2px solid #000;
  padding: 15px;
  color: white;
  background: #000000;
  border-radius: 0px;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100vw;
  height: 100vh;
}

.form__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.form__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 473px;
  height: 76px;
  margin: 10 auto;
}

.form__content h1 {
  font-weight: 600;
  font-size: 34px;
}

.form__content span {
  margin-left: 30px;
  font-size: 34px;
  font-style: italic;
  font-weight: 300;
}
</style>