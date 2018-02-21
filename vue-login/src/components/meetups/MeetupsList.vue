<template lang="html">
  <v-container>
    <v-layout row wrap v-for="(item, i) in meetupsList" :key="i" class="mb-3">
      <v-flex xs12>
        <v-card>
          <v-container fluid style="min-height: 0;" grid-list-lg>
            <v-layout row>
              <v-flex xs6 sm4>
                <v-card-media :src="item.src" height="240px" >
                </v-card-media>
              </v-flex>
              <v-flex xs6 sm8>
                <v-card-title primary-title>
                  <div class="headline">{{item.title}}</div>
                  <div class="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="indigo" :to="'meetup/' + item.id">
                    Check it now
                    <v-icon right>arrow_forward</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed:{
    meetupsList:function(){
      // console.log(this.$router);
      return this.$store.getters.loadedMeetups
    }
  },
  // created(){
  //   console.log(this.$router);
  // }
}
</script>

<style lang="css" scoped>
</style>
