<template>
  <div class="repo-list__container">
    <div class="repo-list" v-for="repo in repo" :key="repo.id">
          <h2>{{repo.name}}</h2>
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
    'repo'
  ],
  name: 'Repos',

}
</script>
<style scoped>
h2{
  text-align: left;
  font-weight: 300;
}

p{
  margin: 20px;
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
}
</style>
