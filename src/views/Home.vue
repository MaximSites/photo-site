<template>
    <!--<div class="w-screen h-screen overflow-hidden">
        <div class="w-full flex flex-row">
            <div class="w-3/10 flex overflow-hidden flex justify-center">
                <div class="overflow-hidden w-full" style="height: 800px">
                <img class="" style="max-width: none" src="@/assets/nature-main.jpg" alt="">
            </div>
                </div>
            <div class="w-3/10 flex overflow-hidden flex justify-center">
                <div class="overflow-hidden w-full" style="height: 800px">
                <img class="" style="max-width: 300%; transform: translateX(-20%)" src="@/assets/animals-main.jpg" alt="">
            </div>
                </div>
            <div class="w-3/10 flex overflow-hidden flex justify-center">
                <div class="overflow-hidden w-full" style="height: 800px">
                <img class="" style="max-width: none" src="@/assets/portrait-main.jpg" alt="">
            </div>
                </div>
            <div class="w-3/10 flex overflow-hidden flex justify-center">
                <div class="overflow-hidden w-full" style="height: 800px">
                <img class="" style="max-width: 250%; transform: translateX(-30%)" src="@/assets/travel-main.jpg" alt="">
            </div>
                </div>
        </div>
    </div>!-->
    <!--<div class="flex overflow-x-auto overflow-y-hidden" style="height: 80vh">
        <div class="flex overflow-hidden flex justify-center">
            <div class="overflow-hidden">
                <img class="" style="max-width: none" src="@/assets/nature-main.jpg" alt="">
            </div>
        </div>
        <div class="flex overflow-hidden flex justify-center ">
            <div class="overflow-hidden">
                <img class="overflow-hidden" style="max-width: 300%; transform: translateX(-20%)" src="@/assets/animals-main.jpg" alt="">
            </div>
        </div>
        <div class="flex overflow-hidden flex justify-center ">
            <div class="overflow-hidden">
                <img class="" style="max-width: none" src="@/assets/portrait-main.jpg" alt="">
            </div>
        </div>
        <div class="flex overflow-hidden flex justify-center ">
            <div class="overflow-hidden">
                <img class="" style="max-width: 250%; transform: translateX(-30%)" src="@/assets/travel-main.jpg" alt="">
            </div>
        </div>
    </div>!-->
    <div class="w-screen h-screen overflow-hidden">
        <div class="flex justify-center items-center" style="height: 10vh; width: 100vw">
            <p class="mx-10 cursor-pointer nav-element">HOME</p>
            <p class="mx-10 cursor-pointer nav-element">GALLERY</p>
            <p class="mx-10 cursor-pointer nav-element">ABOUT ME =)</p>
            <p class="mx-10 cursor-pointer nav-element">CONTACT</p>
        </div>
        <div class="relative">
            <carousel style="height: 60vh; width: 100vw" :items="3.4" :nav="false">
                <template slot="prev"><span class="prev absolute pin-l pin-t z-20 h-less-full justify-center"
                                            style="margin-top: 17%">
                    <font-awesome-icon class="text-white" style="transform: rotate(180deg); height: 13vw;width: 13vw"
                                       :icon="['fal', 'caret-right']"></font-awesome-icon>
                </span></template>
                <div class="m-4 relative">

                    <div class="flex justify-center items-center text-center relative image">
                        <div class="absolute z-20">
                            <p class="on-image-text-big">Nature</p>
                            <p class="on-image-text-little cursor-pointer">MORE PHOTOS</p>
                        </div>
                        <img class="" src="@/assets/nature-main.jpg" alt="">
                    </div>
                </div>
                <div class="m-4 relative">
                    <div class="image">
                        <img class="" src="@/assets/animals-main.jpg" alt="">
                    </div>
                </div>
                <div class="m-4 relative">
                    <div class="image">
                        <img class="" style="" src="@/assets/portrait-main.jpg" alt="">
                    </div>
                </div>
                <div class="m-4 relative">
                    <div class="image">
                        <img class="" style="" src="@/assets/travel-main.jpg" alt="">
                    </div>
                </div>
                <template slot="next"><span class="next absolute pin-r pin-t z-20 h-less-full justify-center"
                                            style="margin-top: 17%">
                    <font-awesome-icon class="text-white" style="height: 13vw;width: 13vw"
                                       :icon="['fal', 'caret-right']"></font-awesome-icon>
                </span></template>
            </carousel>

        </div>
    </div>
</template>

<script>
  import carousel from 'vue-owl-carousel';

  export default {
    components: {carousel},

    data() {
      return {
        natureHover: false,
        portraitHover: false,
        animalHover: false,
        travelHover: false,
      };
    },
  };
</script>

<style lang="less">

    .nav-element {
        font-weight: 550;
        font-family: "Montserrat-Regular";
        color: black;
        transition: all 0.3s;
        &:hover {
            color: #20c997;
        }
    }

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
