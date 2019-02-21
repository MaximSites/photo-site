import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(require('@fortawesome/pro-light-svg-icons/faCaretRight').definition);
library.add(require('@fortawesome/pro-light-svg-icons/faAt').definition);
library.add(require('@fortawesome/pro-light-svg-icons/faMobile').definition);
