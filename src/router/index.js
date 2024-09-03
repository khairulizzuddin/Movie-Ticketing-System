import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue';
import MovieSelection from '../components/MovieSelection.vue';
import SeatMap from '../components/SeatMap.vue';
import ReviewBooking from '../components/ReviewBooking.vue';
import Payment from '../components/Payment.vue';
import BookingConfirmation from '../components/BookingConfirmation.vue';

const routes = [
  { path: '/sign-up', name: 'SignUp', component: SignUp },
  { path: '/movies', name: 'MovieSelection', component: MovieSelection },
  { path: '/seat-map', name: 'SeatMap', component: SeatMap },
  { path: '/review-booking', name: 'ReviewBooking', component: ReviewBooking },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/booking-confirmation', name: 'BookingConfirmation', component: BookingConfirmation },
  { path: '/', redirect: '/sign-up' } // Redirect to sign-up if the user is not logged in
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



