<template>
    <div>
        <div class="flex justify-center pt-16 pb-6">
            <div class="flex flex-col items-center">
                <h1 class="gallery-top-text">Contact</h1>
                <div class="border-b border-black w-32 h-1"></div>
            </div>
        </div>
        <div class="w-1/2 mx-auto pt-16">
            <div class="flex flex-row pl-3">
                <font-awesome-icon class="text-grey-dark" style="transform: scale(1.7)"
                                   :icon="['fal', 'at']"></font-awesome-icon>
                <p class="pl-3 text">My E-mail: mgaliev10@gmail.com</p>
            </div>
            <div class="flex flex-col pt-10">
                <p class="pl-3 text">You can write me in Telegram or Whatsapp</p>
                <div class="flex flex-row pt-2 pl-3">
                    <font-awesome-icon class="text-grey-dark" style="transform: scale(1.7)"
                                       :icon="['fal', 'mobile']"></font-awesome-icon>
                    <p class="pl-3 text">My phone number: +7 (992) 008-95-03</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style scoped>
    .gallery-top-text{
        font-family: "Montserrat-Regular";
        font-weight: 650;
        font-size: 3.5rem;
    }
    .text{
        font-family: "Montserrat-Regular";
        font-size: 1.3rem;
    }
</style>
