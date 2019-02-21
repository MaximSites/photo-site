<template>
    <div>
        <div class="flex justify-center pt-16 pb-6">
            <div class="flex flex-col items-center">
                <h1 class="gallery-top-text">Nature Gallery</h1>
                <div class="border-b border-black w-32 h-1"></div>
            </div>
           </div>
        <div class="w-full h-full">
            <img class="w-full md:w-1/3 lg:w-1/8 p-4" v-for="(item,index) in images" :key="index" :src="item.url" @click="imageView(index)">
        </div>
    </div>
</template>

<script>
import imageViewer from 'vue-image-viewer';
import image from '@/assets/nature-main.jpg';
import Vue from 'vue';

Vue.use(imageViewer);

export default {
  name: 'NatureGallery',

  data() {
    return {
      page: 3,
      images: [
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
        {
          url: image,
        },
      ],
    };
  },
  created() {
    this.$imageViewer.images(this.images);
  },
  methods: {
    imageView(index) {
      this.$imageViewer.index(index);
      this.$imageViewer.show();
    },
  },
};
</script>

<style scoped lang="less">

    .gallery-top-text{
        font-family: "Montserrat-Regular";
        font-weight: 650;
        font-size: 3.5rem;
    }

</style>
