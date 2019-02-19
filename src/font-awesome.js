import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

// 'free-solid',
// 'free-regular',
// 'free-brands',
// 'pro-solid',
// 'pro-regular',
// 'pro-light',


library.add(require('@fortawesome/free-solid-svg-icons/faBell').definition);

library.add(require('@fortawesome/pro-regular-svg-icons/faMapMarkerAlt').definition);
