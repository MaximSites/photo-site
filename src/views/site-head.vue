<template>
    <div class="flex justify-center items-center w-full border-b">
        <router-link class="no-underline select-none" to="/">
            <p class="mx-2 md:mx-10 lg:mx-10 cursor-pointer nav-element">HOME</p>
        </router-link>
        <router-link class="no-underline select-none" to="/about">
            <p class="mx-2 md:mx-10 lg:mx-10 cursor-pointer nav-element">ABOUT ME =)</p>
        </router-link>
        <router-link class="no-underline select-none" to="/contact">
            <p class="mx-2 md:mx-10 lg:mx-10 cursor-pointer nav-element">CONTACT</p>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SiteHead',
};
</script>

<style scoped lang="less">
    .nav-element {
        font-weight: 550;
        font-family: "Montserrat-Regular";
        color: black;
        transition: all 0.3s;
        font-size: 0.9rem;
    &:hover {
         color: #20c997;
     }
    }
</style>
