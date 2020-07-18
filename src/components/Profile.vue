<template>
    <div class="profile__container" v-if="user.length != 0">
      
     <div class="profile-info__container" >
       <div class="profile-info__container--details">
         <img id="img-profile" :src="user.avatar_url"  alt="">
         <h2>{{user.name}}</h2>
         <p>{{user.login}}</p>
       </div>

       <div class="profile-info__container--icon-group">
         <div class="icon-item">
           <img src="../assets/company.png" alt="">
           <p>{{user.company == null ? ' - ' : user.company }}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/location.png" alt="">
           <p>{{user.location == null ? ' - ' : user.location }}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/star.png" alt="">
           <p>{{ sumStars }}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/repository.png" alt="">
           <p>{{user.public_repos == null ? ' - ' : user.public_repos }}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/followers.png" alt="">
           <p>{{user.followers == null ? ' - ' : user.followers }}</p>
         </div>
       </div>
       </div> 
  <div class="repo-list__container">
       <div class="repo-list" v-for="repo in repos" :key="repo.id">
         <h2>{{repo.name}}</h2>
         <p>{{repo.description}}</p>
        <div class="icon-item">
           <img src="../assets/star.png" alt="">
           <p>{{repo.stargazers_count}}</p>
         </div>
       </div> 
  </div>

  </div>
</template>


<script>
import axios from 'axios'

export default {

  props: ['user', 'github'],
  data(){
    return {
      repos: [],
      allStars: [],
      sumStars: 0
    }
  },
  mounted(){
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

h2{
  text-align: left;
  font-weight: 300;
}

p{
  color:#757575;

}
.repo-list__container{
  padding: 0 20px;
}
.repo-list{
  margin: 10px
}
.profile__container{
  display: flex;
  width: 100vw;
  padding: 0 20px;
}
.profile__info--container{
  display:flex;
  width: 100%;
}

.profile-info__container--details{
  margin-bottom: 20px;
}

.icon-item{
  display: flex;
  align-items: center;
  margin:10px 0;
}

.icon-item p{
  margin: 0  6px;
}
.profile-info__container--icon-group{
  display: flex;
  flex-direction: column;
  width: 100%;
}

#img-profile{
  width:300px;
  height: 300px;
}
</style>