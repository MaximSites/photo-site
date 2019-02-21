<template>
    <div class="font-sans">

        <app-header  style="height: 10vh; width: 100vw" :key="$route.path"></app-header>
        <div class="flex flex-1 h-full">

            <router-view class="page h-full" :key="$route.path"></router-view>
            <portal-target name="destination">
                <!--
                This component can be located anwhere in your App.
                The slot content of the above portal component will be rendered here.
                -->
            </portal-target>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './views/site-head.vue';

export default {

  components: {
    AppHeader,
  },
  created() {
    axios.interceptors.response.use(undefined, data => new Promise((resolve, reject) => {
      if (data.response.status === 401 && data.response.config && !data.response.config.__isRetryRequest) {
        console.log(this);
        this.$store.dispatch('logout').then(() => this.$router.push('/login'));
      }
      throw data;
    }));
  },

  computed: {
    noLayout() {
      return !!this.$route.meta.noLayout;
    },
  },
};
</script>

<style lang="less">
    @import "style/app.less";
</style>
<style scoped>

    @tailwind utilities;

    .page {
        @apply w-full;
    }

    .page-enter-active, .page-leave-active, .slide-top-enter-active, .slide-top-leave-active {
        transition: all 0.5s;
    }

    .page-enter {
        margin-left: -100%;
        width: 0px;
        overflow: hidden;
    }

    .page-leave-to {
        margin-left: 100%;
        width: 0px;
        overflow: hidden;
    }

    .slide-top-enter, .slide-top-leave-to {
        margin-top: -100%;
        margin-bottom: 100%;
        height: 0px;
        overflow: hidden;
    }
</style>
