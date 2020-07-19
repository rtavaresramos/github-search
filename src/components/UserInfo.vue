<template>


  <div class="profile-info__container" v-if="user.length != 0">
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
           <p>{{ star }}</p>
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

</template>

<script>
export default {
  props:[
    'user',
    'star'
  ],
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
.profile__container{

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