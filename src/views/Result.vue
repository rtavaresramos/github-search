<template>
<div class="container">
    <Browser :row="row" :col="col" :inputLabel="placeholder" v-on:update="()=>{
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
import router from '../router'

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
      placeholder: localStorage.getItem('username'),
      col: false,
      row: true,
    }
  },
  mounted(){
      this.getUser()

  },
  watch: {
    placeholder(){
      this.getUser()
    }
  },
  methods: {

    getUser(){
      this.placeholder = localStorage.getItem('username')
      const { url, client_id, client_secret, count, sort } = this.github 
        if(localStorage.getItem('username') != undefined){

      axios.get(
      `${url}/${localStorage.getItem('username')}?cliente_id=${client_id}&client_secret=${client_secret}`
      ).then(({data})=> {
        this.user = data
        localStorage.setItem('reposAmount', data.public_repos)
        localStorage.setItem('userFound', '')
        })
        .catch(e => {
        localStorage.setItem('userFound', 'Este usuário não foi encontrado!')
        router.push('/')
        })
        }
      },

    }
  }
</script>

