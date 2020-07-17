<template>
  <div class="container">
    <div class="search__container">
      <div class="form__container column-direction">
        <div class="form__content">
          <h1>Github </h1>
          <span>Search</span>
        </div>
       <div class="input__container">
        <input @keyup="getUser" type="text">
        <a href="#" class="button-search"> 

          <img src="../assets/search.png"  alt="">

         </a>
       </div>
      </div>
    </div>
  <div class="profile__place" >
    <Profile :user="user" />
  </div>
  </div>
</template>

<script>
import Profile from './Profile.vue'

import axios from 'axios'

export default {
  name: 'Browser',
  components:{
    Profile
  },
  data(){
    return{
      github: {
        url: 'https://api.github.com/users',
        client_id: '6dd2bb42360aaf81c4a6',
        cliente_secret: '0ea7c88eb9dc409f0ec90e9a96e55bd11eafc4e1',
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
      ).then(({data})=> this.user = data)

      
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
  display: flex;
  width: 700px;
  height: 50px;

}

body .input__container .button-search, * .input__container .button-search {

  border: none;
  border-bottom: 2px solid #000;
  color: white;
  background: #000000;
  border-radius: 0px;
}

.input__container input{
  background: #FFFFFF;
  border: 2px solid #000000;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;  
  -webkit-appearance: none;
  appearance: none;
  height: 100%;
  font-size: 24px;

}

.button-search{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px
}

.container {
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
  width: 100vw;
  height: 100vh;
}

.form__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.row-direction{
      -ms-flex-direction: row;
          flex-direction: row;
}
.column-direction{
-webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
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