<template>
    <div id="app">
        <component :is="layout">
            <router-view></router-view>
        </component>
    </div>
</template>

<script>
export default {
  computed: {
    layout() {
      const availableLayouts = ['auth', 'default', 'homepage'];
      const layout = availableLayouts.indexOf(this.$route.meta.layout) !== -1 ? this.$route.meta.layout : 'default';

      return () => import(/* webpackChunkName: "layouts" */ `@/layouts/${layout}-layout.vue`);
    },
  },
};
</script>

<style lang="less">
    @import "./style/app";
</style>
