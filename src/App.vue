<template>
  <div>
    <header>
      <router-link to="/news">News</router-link>|
      <router-link to="/ask">Ask</router-link>|
      <router-link to="/jobs">Jobs</router-link>
    </header>
    <!-- 컴포넌트가 뿌려지는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  margin: 0;
}
a {
  color: #fff;
  text-decoration: none;
   margin: 0 5px;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
  font-weight: bold
}
/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
li{list-style: none; font-size: 12px; padding:5px 0}
header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}

</style>