<template>
    <h2 class="title" v-motion-fade-visible-once> Наши студенты <span>работают</span> в топовых компниях</h2>
    <div class="grid-container">

        <div v-for="n in 12" :key="n" class="grid-item" v-motion :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1 }"><svg width="309" height="84" viewBox="0 0 309 84" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M140.923 32.8392L146 29H129V52H146V48.1576H133.855V42.2873H144.235V38.448H133.855V32.8392H140.923Z"
                    fill="#21A038" />
                <path
                    d="M116.102 37.957H110.017V32.8392H119.752L125 29H105V52H115.455C121.312 52 124.694 49.3629 124.694 44.7712C124.694 40.3677 121.654 37.957 116.102 37.957ZM115.265 48.1576H110.017V41.7962H115.265C118.459 41.7962 119.941 42.8516 119.941 44.9977C119.941 47.1436 118.346 48.1576 115.265 48.1576Z"
                    fill="#21A038" />
                <path
                    d="M160.314 29H151V52H155.897V45.4855H160.352C166.288 45.4855 170 42.3255 170 37.2427C170 32.16 166.288 29 160.314 29ZM160.202 41.6463H155.862V32.8392H160.202C163.358 32.8392 165.065 34.4207 165.065 37.2427C165.065 40.0647 163.358 41.6463 160.202 41.6463Z"
                    fill="#21A038" />
                <path
                    d="M95.6803 47.6378C94.368 48.3671 92.9014 48.7497 91.3992 48.7497C86.9283 48.7497 83.699 45.4949 83.699 41.0178C83.699 36.5407 86.9283 33.2858 91.3992 33.2858C93.0139 33.2501 94.5932 33.785 95.9055 34.7414L99.4757 32.0635L99.2507 31.8334C97.1856 29.9563 94.4034 29 91.2481 29C87.8321 29 84.7122 30.1865 82.4607 32.3294C80.2059 34.5501 78.9291 37.6494 79.003 40.8654C78.9644 44.117 80.2059 47.2552 82.4607 49.5505C84.8248 51.8101 87.9802 53.0745 91.2127 52.9966C94.7797 52.9966 97.8965 51.7323 100 49.437L96.8094 47.025L95.6803 47.6378Z"
                    fill="#21A038" />
                <path
                    d="M230.806 29.0383V52H235.819V42.6045H246.495V52H251.511V29.0383H246.495V38.4719H235.819V29.0383H230.806ZM222.183 52H227.462L217.66 29.0383H212.569L202.58 52H207.632L209.645 47.377H220.283L222.183 52ZM211.165 43.5437L215.039 34.3361L218.686 43.5437H211.165ZM262.757 42.7191H265.87L273.543 51.9649H280L269.744 40.0861L278.709 29H272.975L265.528 38.8476H262.757V29H257.74V51.9649H262.757V42.7191ZM186.016 37.9816V32.8716H199.122V29.0383H181V52H191.448C197.297 52 200.681 49.3702 200.681 44.7854C200.681 40.3885 197.642 37.9816 192.093 37.9816H186.016ZM186.016 48.1666V41.8149H191.26C194.448 41.8149 195.931 42.8688 195.931 45.0114C195.931 47.1542 194.373 48.2049 191.26 48.2049H186.016V48.1666Z"
                    fill="#21A038" />
                <path
                    d="M63.6765 29C64.5902 30.1927 65.3539 31.4994 66 32.8842L48.3946 46L41 41.3076V35.6932L48.3554 40.3464L63.6765 29Z"
                    fill="#21A038" />
                <path
                    d="M33.5382 41.0158C33.5382 40.7412 33.5382 40.5096 33.5781 40.2349L29.0399 40C29.0399 40.3143 29 40.6651 29 40.9761C29 46.4461 31.2127 51.4063 34.7807 55L38 51.7571C35.2458 49.0239 33.5382 45.2349 33.5382 41.0158Z"
                    fill="url(#paint0_linear_71_10265)" />
                <path
                    d="M48.9833 25.5377C49.2575 25.5377 49.4916 25.5377 49.7658 25.5772L50 21.0394C49.6856 21.0394 49.3344 21 49.0234 21C43.5551 21 38.5953 23.2113 35 26.7799L38.2407 30C40.9765 27.2465 44.8027 25.5377 48.9833 25.5377Z"
                    fill="url(#paint1_linear_71_10265)" />
                <path
                    d="M49.0167 55.4623C48.7425 55.4623 48.5083 55.4623 48.2341 55.4228L48 59.9606C48.3143 59.9606 48.6656 60 48.9765 60C54.4447 60 59.408 57.7887 63 54.2201L59.7592 51C57.0234 53.793 53.2341 55.4623 49.0167 55.4623Z"
                    fill="url(#paint2_linear_71_10265)" />
                <path
                    d="M57.276 28L61 25.2523C57.727 22.6194 53.552 21 49 21V25.4021C52.0862 25.4403 54.9437 26.3807 57.276 28Z"
                    fill="url(#paint3_linear_71_10265)" />
                <path
                    d="M67 40.5066C67 39.3116 66.8904 38.1558 66.7056 37L62.7178 40.1213C62.7178 40.2356 62.7178 40.3923 62.7178 40.5066C62.7178 44.9405 60.8883 48.9107 58 51.6468L60.8883 55C64.6224 51.4542 67 46.2497 67 40.5066Z"
                    fill="#21A038" />
                <path
                    d="M48 55.72C43.7181 55.72 39.8824 53.8915 37.2394 51L34 53.8915C37.4625 57.6601 42.4523 60 48 60V55.72Z"
                    fill="url(#paint4_linear_71_10265)" />
                <path
                    d="M38 29.239L35.1085 26C31.3401 29.4629 29 34.4524 29 40H33.2791C33.2791 35.7549 35.1085 31.8851 38 29.239Z"
                    fill="url(#paint5_linear_71_10265)" />
                <defs>
                    <linearGradient id="paint0_linear_71_10265" x1="34.2967" y1="54.4444" x2="29.6688" y2="40.953"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.1444" stop-color="#F2E913" />
                        <stop offset="0.3037" stop-color="#E7E518" />
                        <stop offset="0.5823" stop-color="#CADB26" />
                        <stop offset="0.891" stop-color="#A3CD39" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_71_10265" x1="36.3031" y1="26.2676" x2="48.1041" y2="21.6694"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.0592" stop-color="#0FA8E0" />
                        <stop offset="0.5385" stop-color="#0099F9" />
                        <stop offset="0.9234" stop-color="#0291EB" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_71_10265" x1="47.733" y1="56.1405" x2="61.8345" y2="52.882"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.1226" stop-color="#A3CD39" />
                        <stop offset="0.2846" stop-color="#86C339" />
                        <stop offset="0.8693" stop-color="#21A038" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_71_10265" x1="48.0958" y1="23.805" x2="59.3905" y2="27.3429"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.0566" stop-color="#0291EB" />
                        <stop offset="0.79" stop-color="#0C8ACB" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_71_10265" x1="35.1074" y1="54.5686" x2="47.0535" y2="59.1815"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.1324" stop-color="#F2E913" />
                        <stop offset="0.2977" stop-color="#EBE716" />
                        <stop offset="0.5306" stop-color="#D9E01F" />
                        <stop offset="0.8023" stop-color="#BBD62D" />
                        <stop offset="0.9829" stop-color="#A3CD39" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_71_10265" x1="32.2799" y1="40.5263" x2="37.0868" y2="28.0497"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.0698" stop-color="#A3CD39" />
                        <stop offset="0.2599" stop-color="#81C55F" />
                        <stop offset="0.9216" stop-color="#0FA8E0" />
                    </linearGradient>
                </defs>
            </svg></div>
    </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.title {
    font-weight: 600;
    font-size: 40px;
    line-height: 140%;
    color: #161f3e;
    margin-bottom: 40px;

    span {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 40px;
        line-height: 140%;
        background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;
    column-gap: 1px;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    margin-bottom: 110px;
}

.grid-item {

    border-radius: 8px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-sizing: border-box;
    padding: 16px;
    text-align: center;
    min-width: 309px;
}


@media (max-width: 1240px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-item {
        min-width: 100%;
    }
}
</style>