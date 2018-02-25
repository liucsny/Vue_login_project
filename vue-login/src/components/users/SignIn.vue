<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <div class="headline">Sign In</div>
                    <v-text-field color="indigo" name="Email" label="E-mail" id="email" v-model="email" type="email" required></v-text-field>
                    <v-text-field color="indigo" name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                    <v-btn type="submit" color="indigo" dark>Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data(){
    return {
      email: "",
      password: "",
    }
  },
  computed:{
    user(){
      return this.$store.getters.getUser
    }
  },
  methods:{
    onSignIn(){
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      })
      // console.log(this.email,"+", this.password,"+", this.confirmPassword);
    }
  },
  watch:{
    user(value){
      if(value !== null && value !== undefined){
        this.$router.push("/")
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
