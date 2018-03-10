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
    },
    updateMeetup(state,payload){
      const meetup = state.Meetups.find(meetup=>{
        return meetup.id ===  payload.id;
      })

      if(payload.title){
        meetup.title = payload.title
      }
      if(payload.description){
        meetup.description = payload.description
      }      
      if(payload.date){
        meetup.date = payload.date
      }
    }
  },
  actions: {
    updateMeetupData({commit},payload){
      commit("setLoading",true);
      const updateObj = {

      };
      firebase.database().ref("meetupNames").child(payload.id).update(updateObj)
        .then(()=>{
          commit("updateMeetup",payload)
          commit("setLoading",false);
        })
        .catch(error=>{
          commit("setLoading",false);
          console.log(error)
        })
    },
    loadMeetups({commit}){
      commit("setLoading",true);
      firebase.database().ref("meetupNames").once("value")
        .then(function(data){
          const meetups = [];
          const obj = data.val();
          for(let index in obj){
            meetups.push({
              id: index,
              title: obj[index].title,
              description: obj[index].description,
              location: obj[index].location,
              meetupDate: obj[index].meetupDate,
              src: obj[index].src,
              creatorId: obj[index].creatorId,
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
    createMeetup({commit, getters}, payload){
      const meetup = {
        // src: payload.src,
        title: payload.title,
        location: payload.location,
        description: payload.description,
        meetupDate: payload.meetupDate,
        creatorId: getters.getUser.id,
      }
      // console.log("created! ",meetup)
      let id;
      firebase.database().ref("meetupNames").push(meetup)
        .then(function(data){
          id = data.key;
          return data.key;
        })
        .then(function(id) {
          const filename = payload.image.name;
          const extention = filename.slice(filename.lastIndexOf("."));
          
          return firebase.storage().ref("meetupNames/" + id + "." + extention).put(payload.image)
        })
        .then(function(fileData){
          const imgURL = fileData.metadata.downloadURLs[0];
          meetup.src = imgURL;          
          return firebase.database().ref("meetupNames").child(id).update({ src: imgURL })
        })
        .then(function(){
          meetup.id = id;
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
    },
    autoSignIn({commit}, payload){
      commit("setUser",{
        id: payload.uid,
        registeredMeetups:[],
      })
    },
    logout({commit}){
      firebase.auth().signOut();
      commit("setUser",null);
    },
  },
})
