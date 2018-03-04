<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs8 offset-xs2 mt-2 mb-2>
        <v-btn @click="onLogOut" block color="red darken-2" dark>Log Out</v-btn>
      </v-flex>
    </v-layout>      
  </v-container>
</template>

<script>
export default {
  methods:{
    onLogOut(){
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  }
}
</script>

<style lang="css" scoped>
</style>
