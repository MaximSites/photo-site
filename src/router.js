import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NatureGallery from './views/pages/nature-gallery.vue';
import AnimalsGallery from './views/pages/animals-gallery.vue';
import About from './views/pages/about.vue';
import Contact from './views/pages/contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'homepage' },
    },
    {
      path: '/nature-gallery',
      name: 'nature-gallery',
      component: NatureGallery,
      meta: { layout: 'homepage' },
    },
    {
      path: '/animals-gallery',
      name: 'animals-gallery',
      component: AnimalsGallery,
      meta: { layout: 'homepage' },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { layout: 'homepage' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { layout: 'homepage' },
    },
  ],
});
