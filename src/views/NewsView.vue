<template>
  <div>
    <ul>
      <li v-for="newsItem in newsItems" v-bind:key="newsItem.id">{{newsItem.title}}</li>
    </ul>
  </div>
</template>

<script>
// 6. index에서 설정한 데이터값을 import
import { fetchNews } from '../api/index.js';

export default {
    data() {
        return {
            newsItems: []
        }
    }, 
    methods: {
        fetchData() {
            fetchNews()
                .then(response => {
                    console.log(response.data);
                    this.newsItems = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created(){
        this.fetchData()
    }

    
}
</script>

<style>

</style>
