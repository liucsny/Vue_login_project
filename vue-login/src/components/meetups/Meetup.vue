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
              <div>{{meetup.location}}<span style="display:inline-block; width: 12px;"></span>{{meetup.meetupDate}}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <p>{{ meetup.description }}</p>
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
  props:["id"],
  computed:{
    meetup:function(){
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
