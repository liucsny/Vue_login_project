<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignUp">
                <v-layout row>
                  <v-flex xs12>
                    <div class="headline">Sign Up</div>
                    <v-text-field color="indigo" name="Email" label="E-mail" id="email" v-model="email" type="email" required></v-text-field>
                    <v-text-field color="indigo" name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                    <v-text-field color="indigo" name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="confirmPassword" type="password" :rules="[comparePasswords]" required></v-text-field>
                    <v-btn type="submit" color="indigo" dark>Sign Up</v-btn>
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
      confirmPassword: "",
    }
  },
  computed:{
    comparePasswords(){
      return this.password !== this.confirmPassword ? "两次输入的密码不相同" : ""
    },
    user(){
      return this.$store.getters.getUser
    }
  },
  methods:{
    onSignUp(){
      this.$store.dispatch("signUserUp", {
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
