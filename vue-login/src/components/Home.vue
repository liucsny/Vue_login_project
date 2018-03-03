<template lang="html">
  <div>
    <v-container>
      <v-layout v-if="loading" class="mb-4">
        <v-flex> 
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout v-if="!loading" class="mb-4">
        <v-carousel hide-controls>
          <v-carousel-item v-for="(item,i) in meetups" :src="item.src" :key="i" @click.native="onLoadMeetup(item.id)" style="cursor:pointer"></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large to="/meetups" color="info">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large to="/meetup/new">Organize Meetups</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed:{
    meetups(){
      return this.$store.getters.loadedMeetups;
    },
    loading(){
      return this.$store.getters.loading;
    }
  },
  methods: {
    onLoadMeetup(id){
      // console.log(12);
      this.$router.push("/meetup/" + id)
    }
  },
}
</script>

<style lang="css" scoped>
</style>
