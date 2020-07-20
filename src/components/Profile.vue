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
      // user: 'user',
      repos: [],
      allStars: [],
      sumStars: 0
    }
  },
  watch: {
    user(){
      this.getRepos()
    }
  },

    methods: {
      getRepos(){
        
    const { url, client_id, client_secret, count, sort } = this.github 

      axios.get(
      `${url}/${this.user.login}/repos?per_page=${this.user.public_repos}`
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
  flex-wrap: nowrap;
  width: 100vw;
  justify-content: flex-start;
  padding: 0 20px;
}

@media screen and (max-width: 680px){
  .profile__container{
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  padding: 0 20px;
}
}
</style>