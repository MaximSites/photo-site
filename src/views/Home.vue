<template>
    <div class="w-screen h-screen-ninety overflow-hidden">
        <div class="relative">
            <carousel style="height: 60vh; width: 100vw" :items="items" :nav="false">
                <template slot="prev"><span class="prev absolute pin-l pin-t z-20 h-less-full justify-center"
                                            style="margin-top: 17%">
                    <font-awesome-icon class="text-white lg:hidden" style="transform: rotate(180deg); height: 5vw;width: 5vw"
                                       :icon="['fal', 'caret-right']"></font-awesome-icon>
                </span></template>
                <div class="mx-4 relative">

                    <div class="flex justify-center items-center text-center relative image">
                        <div class="absolute z-20">
                            <p class="on-image-text-big">Nature</p>
                                <router-link class="no-underline select-none" to="/nature-gallery">
                                    <p class="on-image-text-little cursor-pointer">MORE PHOTOS</p>
                                </router-link>
                        </div>
                        <img class="" src="@/assets/nature-main.jpg" alt="">
                    </div>
                </div>
                <div class="mx-4 relative">
                    <div class="flex justify-center items-center text-center relative image">
                        <div class="absolute z-20">
                            <p class="on-image-text-big">Animals</p>
                            <router-link class="no-underline select-none" to="/animals-gallery">
                                <p class="on-image-text-little cursor-pointer">MORE PHOTOS</p>
                            </router-link>
                        </div>
                        <img class="" src="@/assets/animals-main.jpg" alt="">
                    </div>
                </div>
                <div class="mx-4 relative">
                    <div class="flex justify-center items-center text-center relative image">
                        <div class="absolute z-20">
                            <p class="on-image-text-big">Portrait</p>
                            <p class="on-image-text-little cursor-pointer">MORE PHOTOS</p>
                        </div>
                        <img class="" style="" src="@/assets/portrait-main.jpg" alt="">
                    </div>
                </div>
                <div class="mx-4 relative">
                    <div class="flex justify-center items-center text-center relative image">
                        <div class="absolute z-20">
                            <p class="on-image-text-big">Travel</p>
                            <p class="on-image-text-little cursor-pointer">MORE PHOTOS</p>
                        </div>
                        <img class="" style="" src="@/assets/travel-main.jpg" alt="">
                    </div>
                </div>
                <template slot="next"><span class="next absolute pin-r pin-t z-20 h-less-full justify-center"
                                            style="margin-top: 17%">
                    <font-awesome-icon class="text-white lg:hidden" style="height: 5vw;width: 5vw"
                                       :icon="['fal', 'caret-right']"></font-awesome-icon>
                </span></template>
            </carousel>

        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import SiteHead from './site-head.vue';

export default {
  components: { SiteHead, carousel },

  data() {
    return {
      items: 3,
    };
  },
  created() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      this.items = 1;
    }
  },
};
</script>

<style lang="less">

    .on-image-text-big {
        font-family: "Montserrat-Regular";
        color: white;
        font-size: 1.7rem;
        font-weight: 600;
    }

    .on-image-text-little {
        font-family: "Montserrat-Regular";
        color: white;
        font-size: 0.8rem;
        font-weight: 600;

        border: white 1px;
        border-style: solid;
        padding: 8px;

        margin: 20px;
        transition: all 0.5s;
        &:hover {
            background: white;
            color: black;
        }
    }

    .image {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .image img {
        width: 100%;
        vertical-align: top;
    }

    .image:after {
        content: '\A';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }

    .image:hover:after {
        opacity: 1;
    }

</style>
