<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm2 mt-2 mb-2>
        <h1 class="headline">Creat A New Meetup</h1>
      </v-flex>
    </v-layout>
    <v-form class="" action="index.html" method="post" @submit.prevent="onCreateMeetup">
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
          <v-text-field v-model="title" color="indigo" name="title" id="title" label="Title" required></v-text-field>
          <v-text-field v-model="location" color="indigo" name="location" id="location" label="Location" required></v-text-field>
          <v-text-field v-model="src" color="indigo" name="ImageURL" id="ImageURL" label="ImageURL" required></v-text-field>
          <v-text-field v-model="description" color="indigo" name="description" id="description" label="Description" required multi-line></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
          <h4>Choose A Date</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md12 lg4 offset-sm2>
           <v-date-picker color="indigo" v-model="meetupDate" reactive></v-date-picker>
         </v-flex>
         <v-flex md12 lg4 align-center>
           <v-time-picker color="indigo" v-model="meetupTime"></v-time-picker>
         </v-flex>
      </v-layout>
      <v-layout row mt-2>
        <v-flex xs12 sm8 offset-sm2 align-center>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-2" @click="clearForm" flat>clear</v-btn>
            <v-btn color="indigo" :disabled="!formIsValid" :dark="formIsValid" type="submit">create meetup</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      title: "",
      location: "",
      description: "",
      src: "",
      publishDate: "",
      meetupDate: "",
      meetupTime: new Date(),
      id: Math.random()*100,
    }
  },
  computed: {
    formIsValid(){
      return this.title !== ""&&this.location !== ""&&this.description !== ""&&this.meetupDate !== ""&&this.src !== ""&&this.meetupTime !== null;
    },
    submitableDateTime(){
      let date = new Date(this.meetupDate);
      date.setHours(this.meetupTime.getHours());
      date.setMinutes(this.meetupTime.getMinutes());
      console.log(date);
      return date;
    }
  },
  methods: {
    clearForm: function(){
      this.title = "";
      this.location = "";
      this.description = "";
      this.publishDate = "";
      this.meetupDate = "";
      this.src = "";
      this.meetupTime = null;
    },
    onCreateMeetup: function(){
      const meetupData = {
        id: this.id,
        title: this.title,
        location: this.location,
        description: this.description,
        src: this.src,
        publishDate: new Date(),
        meetupDate: this.meetupDate,
      }

      // console.log(meetupData);
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
