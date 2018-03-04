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
          <v-btn rasied color="indigo" @click="onPickFile" dark>Choose a image</v-btn>
          <div>
            <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
          </div>
          <img width="300px" :src="src" mt-6 mb-2></img>          
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
      image: null,
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
        title: this.title,
        location: this.location,
        description: this.description,
        image: this.image,
        publishDate: new Date(),
        meetupDate: this.meetupDate,
      }

      // console.log(meetupData);
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
    onPickFile(){
      this.$refs.fileInput.click();
    },
    onFilePicked(event){
      const files = event.target.files;
      let fileName = files[0].name;
      if(fileName.lastIndexOf('.')<=0){
        return alert("Invalid file.")
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load",()=>{
        this.src = fileReader.result       
      })
      fileReader.readAsDataURL(files[0]);
      this.image = files[0]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
