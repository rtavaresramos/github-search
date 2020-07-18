<template>
<div>
    <Search />

    <Profile :user="user" :github="github"
    v-if="userInputValidator == '' && loaded == true"
     />

  <h2 v-else >{{userInputValidator}}</h2>

</div>
</template>

<script>
import Profile from '../components/Profile.vue'
import Search from '../components/Search.vue'

import axios from 'axios'

export default {
  name: 'Browser',
  components:{
    Profile,
    Search
  },
  data(){
    return{
      

    }
  },
  mounted(){
    this.userStorage = localStorage.getItem('username')
        this.loaded = false          
        this.getUser(this.userStorage)
        this.userInputValidator = ''
  },
  methods: {
    handleEnter(e){
      if (e.keyCode === 13) {
        this.loaded = false          
        this.getUser(this.userInput)
        this.userInputValidator = ''
      }    
    },
    getUser(userLogin){
      
      const { url, client_id, client_secret, count, sort } = this.github 
      axios.get(
      `${url}/${userLogin}?cliente_id=${client_id}&client_secret=${client_secret}`
      ).then(({data})=> {
        this.userInput = ''
        this.coll ? this.coll = false : this.coll = this.coll
        this.row ? this.row = this.row : this.row = true 
        this.loaded = true
        this.user = data
        localStorage.setItem('username', this.user.login)
        })
        .catch(e => {
        this.userInputValidator = "Nenhum usuário foi encontrado!"
        this.coll ? this.coll = this.coll : this.coll = true 
        this.row ? this.row = false : this.row = this.row
        this.loaded = false
        localStorage.clear

        })
      }
    }
  }
</script>
