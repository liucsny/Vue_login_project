<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="meetup.src" height="500px" >
          </v-card-media>
          <v-card-title>
            <div>
              <div class="headline">{{meetup.title}}</div>
              <div>{{meetup.date}}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo" flat>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed:{
    meetup:function(){
      return this.$store.getters.loadedMeetup(this.$route.params.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
