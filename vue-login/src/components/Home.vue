<template lang="html">
  <div>
    <v-container fluid>
      <v-layout class="mb-4">
        <v-carousel hide-controls>
          <v-carousel-item v-for="(item,i) in meetups" :src="item.src" :key="i"></v-carousel-item>
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
  data(){
    return {
      meetups:[
        { src:"https://youimg1.c-ctrip.com/target/fd/tg/g1/M01/26/B8/CghzflUeq1eAK3QXAASvzqpLIQg748.jpg", id:"a", title:"" },
        { src:"https://upload.wikimedia.org/wikipedia/commons/8/87/Fudan-building3.jpg", id:"a", title:"" },
        { src:"http://pic.guojj.com/weixin_news_img/2017-12-11/5a2de4a76104b2192.jpg", id:"a", title:"" },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
