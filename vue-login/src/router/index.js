import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import createMeetup from '@/components/meetups/createMeetup'
import Meetups from '@/components/meetups/Meetups'
import Profile from '@/components/users/Profile'
import SignIn from '@/components/users/SignIn'
import SignUp from '@/components/users/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'createMeetup',
      component: createMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
