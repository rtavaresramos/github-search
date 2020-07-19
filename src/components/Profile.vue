<template>
  <div class="profile__container">
      <UserInfo :user="user" :star="sumStars" />
      <Repos :repo="repos" />
  </div>
</template>


<script>
import UserInfo from './UserInfo.vue'
import Repos from './Repos.vue'
import axios from 'axios'

export default {

  props: [
    'user',
    'github'
    ],
    
  components:{
    Repos,
    UserInfo
  },
  data(){
    return {
      user: 'user',
      repos: [],
      allStars: [],
      sumStars: 0
    }
  },
  mounted(){
    this.getRepos()
  },

    methods: {
      getRepos(){
        
    const { url, client_id, client_secret, count, sort } = this.github 

      axios.get(
      `${url}/${localStorage.getItem('username')}/repos?per_page=${localStorage.getItem('reposAmount')}`
      ).then(({data})=> {
        this.repos = data.sort(function(a, b){
            return b.stargazers_count - a.stargazers_count
        })
        this.allStars = data.map(repo=> repo.stargazers_count).sort().reverse()
        this.sumStars = data.map(repo=> repo.stargazers_count).reduce((acumulator, item)=> {
             
             return acumulator + item
             }, 0)
      })
      }
      
    },
    computed: {
        userInfor(){
          return this.user.map(user=>({
            ...user,
            name: user.name.trim() === '' ? ' - ' : user.name,
            login:user.login.trim() === '' ? ' - ' : user.login,
            company:user.company.trim() === '' ? ' - ' : user.company,
            location:user.location.trim() === '' ? ' - ' : user.location,
            public_repos:user.public_repos.trim() === '' ? ' - ' : user.public_repos,
            followers:user.followers.trim() === '' ? ' - ' : user.followers,
          }))
        }
    }
}
</script>


<style scoped>
.profile__container{
  display: flex;
  width: 100vw;
  justify-content: start;
  padding: 0 20px;
}
</style>