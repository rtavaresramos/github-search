<template>
    <div class="profile__container">
      
     <div class="profile-info__container" v-if="user.length != 0">
       <div class="profile-info__container--details">
         <img id="img-profile" :src="user.avatar_url" alt="">
         <h2>{{user.name}}</h2>
         <p>{{user.login}}</p>
       </div>

       <div class="profile-info__container--icon-group">
         <div class="icon-item">
           <img src="../assets/company.png" alt="">
           <p>{{user.company}}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/location.png" alt="">
           <p>{{user.location}}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/star.png" alt="">
           <p>{{  }}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/repository.png" alt="">
           <p>{{user.public_repos}}</p>
         </div>
         <div class="icon-item">
           <img src="../assets/followers.png" alt="">
           <p>{{user.followers}}</p>
         </div>
       </div>
       </div> 


  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'Profile',
  props: ['user', 'github'],
  data(){
    return {
      repos: [],
      allStars: []
    }
  },
  mounted(){
    const { url, client_id, client_secret, count, sort } = this.github 

      for(var i = 0; i < (this.user.public_repos/30); i++ ){
      // axios.get(
      // `${url}/${this.user.login}/repos?cliente_id=${client_id}&client_secret=${client_secret}?page=${i}`
      // ).then(({data})=>{this.repos.push(data)
      // console.log(this.repos)
      // // this.repos.map(repo=> console.log(repo.id))
      //   })

      console.log(i)
        }

  },
  methods:{

  }

}
</script>


<style scoped>

h2{
  font-weight: 300;
}

p{
  color:#757575;

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