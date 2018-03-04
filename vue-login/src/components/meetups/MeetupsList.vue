<template lang="html">
  <v-container>
    <v-layout v-if="loading" row wrap class="mb-3">
      <v-flex class="text-xs-center">
        <v-progress-circular indeterminate color="indigo"></v-progress-circular>
      </v-flex>
    </v-layout>
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
                  <div class="headline">{{ item.title }}</div>
                  <div class="mt-3">
                    <p>{{ item.description }}</p>
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
    loading(){
      return this.$store.getters.loading;
    },
    meetupsList:function(){
      return this.$store.getters.loadedMeetups
    }
  },
}
</script>

<style lang="css" scoped>
</style>
