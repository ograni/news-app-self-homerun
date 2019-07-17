<template>
    <div>
    <ul>
      <li v-for="jobsItem in jobsItems" v-bind:key="jobsItem.id">{{jobsItem.title}}</li>
    </ul>
  </div>
</template>

<script>
import { fetchJobs } from '../api/index.js';

export default {
    data() {
        return {
            jobsItems: []
        }
    }, 
    methods: {
        fetchData() {
            fetchJobs()
                .then(response => {
                    console.log(response.data);
                    this.jobsItems = response.data;
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

