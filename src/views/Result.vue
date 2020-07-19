<template>
<div>
    <Browser :row="row" :col="col" v-on:update="()=>{
        getUser()
    }"/>
    <div class="profile__place">
    <Profile :user="user" :github="github" />
    
    </div>
</div>
</template>

<script>
import Profile from '../components/Profile.vue'
import Browser from '../components/Browser.vue'

import axios from 'axios'

export default {
  name: 'Result',

  components:{
    Profile,
    Browser
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
      userLogin: localStorage.getItem('username'),
      userStorage:'',
      repos: [],
      userInput: '',
      userInputValidator: '',
      col: false,
      row: true,
      loaded: true

    }
  },
  mounted(){
      this.getUser()

  },
  methods: {

    getUser(){
      const { url, client_id, client_secret, count, sort } = this.github 

      axios.get(
      `${url}/${localStorage.getItem('username')}?cliente_id=${client_id}&client_secret=${client_secret}`
      ).then(({data})=> {
        this.user = data
        localStorage.setItem('reposAmount', data.public_repos)
        })
        .catch(e => {
        this.userInputValidator = "Nenhum usuário foi encontrado!"

        this.loaded = false
        localStorage.clear
        })
      },
    }
  }
</script>

