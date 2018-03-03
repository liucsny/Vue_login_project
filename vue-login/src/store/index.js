import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    Meetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state, payload){
      state.Meetups = payload;
    },
    createMeetup(state, payload){
      state.Meetups.push(payload);
    },
    setUser(state, payload){
      state.user = payload;
    },
    setLoading(state, payload){
      state.loading = payload;
    },
    setError(state, payload){
      state.error = payload;
    },
    clearError(state){
      state.error = null;
    }
  },
  actions: {
    loadMeetups({commit}){
      commit("setLoading",true);

      firebase.database().ref("meetupNames").once("value")
        .then(function(data){
          const meetups = [];
          console.log(data);
          const obj = data.val();
          console.log(obj);
          for(let index in obj){
            meetups.push({
              id: index,
              title: obj[index].title,
              description: obj[index].description,
              location: obj[index].location,
              meetupDate: obj[index].meetupDate,
              src: obj[index].src,
            })
          }
          commit("setLoading",false);
          commit("setLoadedMeetups",meetups);
        })
        .catch(function(error){
          console.log(error);
          commit("setLoading",true);          
        })
    },
    createMeetup({commit}, payload){
      const meetup = {
        src: payload.src,
        title: payload.title,
        location: payload.location,
        description: payload.description,
        meetupDate: payload.meetupDate
      }
      // console.log("created! ",meetup)
      firebase.database().ref("meetupNames").push(meetup)
        .then(function(data){
          console.log(data)
          const key = data.key
          commit("createMeetup", meetup)
        })
        .catch(function(error){
          console.log(error)
        })
      //Reach Firebase
    },
    signUserUp({commit},payload){
      commit("clearError");
      commit("setLoading",true)
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then(function(user){
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser)
        commit("setLoading",false);

      }).catch(function(error){
        console.log(error);
        commit("setError",error);
        commit("setLoading",false);
      })
    },
    signUserIn({commit},payload){
      commit("clearError");
      commit("setLoading",true)
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
      .then(function(user){
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        };
        commit("setUser", newUser)
        commit("setLoading",false);
      }).catch(function(error){
        commit("setError",error);
        commit("setLoading",false);
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
    },
    error(state){
      return state.error
    },
    loading(state){
      return state.loading
    }
  },
})
