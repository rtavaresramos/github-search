<template>
  <div class="repo-list__container">
    <div class="repo-list" v-for="repo in repo" :key="repo.id">
          <a :href="`https://github.com/${user.login}/${repo.name}`" target="_blank">
            <h2>{{repo.name}}</h2>
          </a>
          <p>{{repo.description}}</p>
          <div class="icon-item">
            <img src="../assets/star.png" alt="">
            <p>{{repo.stargazers_count}}</p>
          </div>
    </div> 
  </div>

</template>

<script>
export default {
  props:[
    'repo',
    'user'
  ],
  name: 'Repos',
  data(){
    return {
      repo_url: `https://github.com/${this.user.login}/${this.repo.name}`
    }
  }

}
</script>
<style scoped>
h2{
  text-align: left;
  font-weight: 300;
  margin-bottom: 10px;
}

p{
  color:#757575;
}
.repo-list__container{
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 900px;
  padding: 0 20px;
}
.repo-list{
  margin: 10px
}

.icon-item{
  display: flex;
  align-items: center;
  height: 30px;
}
.icon-item p{
   margin: 0 10px;
}
</style>
