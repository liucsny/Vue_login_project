import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    loadedMeetups: [
      {
        src:"https://youimg1.c-ctrip.com/target/fd/tg/g1/M01/26/B8/CghzflUeq1eAK3QXAASvzqpLIQg748.jpg",
        id:"1",
        title:"Tongji University",
        date:"2017-01-23",
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/8/87/Fudan-building3.jpg",
        id:"2",
        title:"Fudan University",
        date:"2017-04-13",
      },
      {
        src:"http://pic.guojj.com/weixin_news_img/2017-12-11/5a2de4a76104b2192.jpg",
        id:"3",
        title:"Shen Zhen",
        date:"2017-07-31",
      },
    ],
    user:{
      id: "naruto",
      registeredMeetups: [ "3" ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    featuredMeetups: function(state, getters){
      return getters.loadedMeetups.slice(0,5);
    },
    loadedMeetups: function(state){
      return state.loadedMeetups.sort((meetupA,meetupB)=>{
        return meetupA.date > meetupB.date;
      })
    },
    loadedMeetup: function(state){
      return (meetupId)=>{
        return state.loadedMeetups.find((meetup)=>{
          return meetup.id == meetupId;
        })
      }
    }
  },
})
