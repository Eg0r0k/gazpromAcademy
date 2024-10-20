<template>
    <h2 class="title" v-motion-fade-visible-once> Наши студенты <span>работают</span> в топовых компаниях</h2>
    <div class="grid-container">
        <div v-for="(svg, index) in svgs" :key="index" class="grid-item">
            <component :is="svg" />
        </div>
    </div>
</template>
<script setup lang="ts">
import Svg1 from '@/shared/svg/svg1.vue';
import Svg10 from '@/shared/svg/svg10.vue';
import Svg11 from '@/shared/svg/svg11.vue';

import Svg2 from '@/shared/svg/svg2.vue';
import Svg3 from '@/shared/svg/svg3.vue';
import Svg4 from '@/shared/svg/svg4.vue';
import Svg5 from '@/shared/svg/svg5.vue';
import Svg6 from '@/shared/svg/svg6.vue';
import Svg7 from '@/shared/svg/svg7.vue';
import Svg8 from '@/shared/svg/svg8.vue';
import Svg9 from '@/shared/svg/svg9.vue';

const svgs = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg6];

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