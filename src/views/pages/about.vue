<template>
    <div>
        <div class="flex justify-center pt-16 pb-6">
            <div class="flex flex-col items-center">
                <h1 class="gallery-top-text">About Me</h1>
                <div class="border-b border-black w-32 h-1"></div>
            </div>
        </div>
        <div class="w-1/2 mx-auto flex flex-col lg:flex-row justify-between pt-16">
            <div class="w-2/5">
                <img src="@/assets/me.jpg" alt="">
            </div>
            <div class="w-1/2 flex flex-col justify-center">
                <p class="text pb-8">Hello everyone, my name is Maxim.</p>
                <p class="text pb-5">I am from Russia and work as a web developer,</p>
                <p class="text">
                    This is just a small demonstration of what I can do, in the near future
                    on this GitHub account there will be more examples of my work.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
    .gallery-top-text{
        font-family: "Montserrat-Regular";
        font-weight: 650;
        font-size: 3.5rem;
    }

    .text {
        font-weight: 550;
        font-family: "Montserrat-Regular";
        color: black;
        transition: all 0.3s;
        font-size: 1.3rem;
    }
</style>
