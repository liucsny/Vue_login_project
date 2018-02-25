import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    Meetups: [
      {
        src:"https://youimg1.c-ctrip.com/target/fd/tg/g1/M01/26/B8/CghzflUeq1eAK3QXAASvzqpLIQg748.jpg",
        id:"1",
        title:"Tongji University",
        meetupDate:"2017-01-23",
        location:"Shanghai",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/8/87/Fudan-building3.jpg",
        id:"2",
        title:"Fudan University",
        meetupDate:"2017-04-13",
        location:"Shanghai",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        src:"http://pic.guojj.com/weixin_news_img/2017-12-11/5a2de4a76104b2192.jpg",
        id:"3",
        title:"Shen Zhen",
        meetupDate:"2017-07-31",
        location:"Shenzhen",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ],
    user: null,
  },
  mutations: {
    createMeetup(state, payload){
      state.Meetups.push(payload);
    },
    setUser(state, payload){
      state.user = payload;
    }
  },
  actions: {
    createMeetup({commit}, payload){
      const meetup = {
        src: payload.src,
        title: payload.title,
        location: payload.location,
        description: payload.description,
        meetupDate: payload.meetupDate,
        id: payload.id
      }
      //Reach Firebase
      commit("createMeetup", meetup)
    },
    signUserUp({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then(function(user){
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser)
      }).catch(function(error){
        console.log(error);
      })
    },
    signUserIn({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
      .then(function(user){
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser)
      }).catch(function(error){
        console.log(error);
      })
    }
  },
  getters: {
    featuredMeetups: function(state, getters){
      return getters.loadedMeetups.slice(0,5);
    },
    loadedMeetups: function(state){
      return state.Meetups.sort((meetupA,meetupB)=>{
        return meetupA.date > meetupB.date;
      })
    },
    loadedMeetup: function(state){
      return (meetupId)=>{
        return state.Meetups.find((meetup)=>{
          return meetup.id == meetupId;
        })
      }
    },
    getUser(state){
      return state.user
    }
  },
})
