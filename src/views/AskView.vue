<template>
    <div>
    <ul>
      <li v-for="askItem in askItems" v-bind:key="askItem.id">{{askItem}}</li>
    </ul>
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js';

export default {
    data() {
        return {
            askItems: []
        }
    }, 
    methods: {
        fetchData() {
            fetchAsk()
                .then(response => {
                    console.log(response.data);
                    this.askItems = response.data;
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
