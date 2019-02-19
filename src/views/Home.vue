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
    <div class="horizontal-scroll-wrapper squares">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
        <div>item 8</div>
    </div>
</template>

<script>

</script>

<style lang="scss">

    $finalHeight: 250px;
    $finalWidth: 3 * $finalHeight;
    $scrollBarHeight: 1px;

    ::-webkit-scrollbar {
        width: $scrollBarHeight;
        height: $scrollBarHeight;
    }

    ::-webkit-scrollbar-button {
        width: $scrollBarHeight;
        height: $scrollBarHeight;
    }

    body {
        background: #111;
    }

    div {
        box-sizing: border-box;
    }

    .horizontal-scroll-wrapper {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: calc(#{$finalHeight} + #{$scrollBarHeight});
        max-height: $finalWidth;
        margin: 0;
        padding-top: $scrollBarHeight;
        background: #abc;
        overflow-y: auto;
        overflow-x: hidden;
        transform: rotate(-90deg) translateY(-$finalHeight);
        transform-origin: right top;
    & > div {
          display: block;
          padding: 5px;
          background: #cab;
          transform: rotate(90deg);
          transform-origin: right top;
      }
    }

    .squares {
        padding: $finalHeight 0 0 0;
    & > div {
          width: $finalHeight;
          height: $finalHeight;
          margin: 10px 0;
      }
    }

</style>