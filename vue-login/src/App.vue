<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" temporay app>
      <v-list>
        <v-btn @click="drawer=!drawer" flat icon color="grey darken-3">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title" >
        <v-btn flat :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          <span>{{item.title}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data:function(){
    return {
      drawer:false,
      menuItems:[
        { icon: "home", title: "Home", link: "/" },
        { icon: "supervisor_accounts", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetups", link: "/meetup/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Sign Up", link: "/signup" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
      ]
    }
  },
  name: 'App'
}
</script>

<style>
</style>
