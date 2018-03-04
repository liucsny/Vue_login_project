import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import createMeetup from '@/components/meetups/createMeetup'
import MeetupsList from '@/components/meetups/MeetupsList'
import Profile from '@/components/users/Profile'
import SignIn from '@/components/users/SignIn'
import SignUp from '@/components/users/SignUp'
import Meetup from '@/components/meetups/Meetup'
import authGuard from "./auth-guard"

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
      name: 'MeetupsList',
      component: MeetupsList
    },
    {
      path: '/meetup/new',
      name: 'createMeetup',
      component: createMeetup,
      beforeEnter: authGuard,
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      props: true,
      component: Meetup,
      beforeEnter: authGuard,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: authGuard,      
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
