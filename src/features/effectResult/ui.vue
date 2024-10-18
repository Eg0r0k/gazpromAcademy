<template>
    <div class="effectResult">
        <Carousel>
            <Slide v-for="(slide, index) in imgs" :key="index">
                <div class="carousel__item" :style="{ backgroundImage: `url(${slide})` }">
                    <p class="carousel__text">Смотрим на большие данные, так мы улучшаем курсы, чтобы вы достигли своей
                        цели - сменили
                        профессию или должность </p>
                    <h2 class="carousel__title">Эффективное <br>
                        обучение и результат</h2>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css';
import Png1 from '/img/slideV1.png'
import Png2 from '/img/slideV2.png'
import Png3 from '/img/slideV3.png'
import Png4 from '/img/slideV4.png'

const imgs = ref([Png1, Png2, Png3, Png4])
</script>

<style scoped lang="scss">
.effectResult {
    margin-bottom: 150px;
}

@media screen and (max-width:1110px) {
    .carousel__text {
        display: none;
    }

    .carousel__title {
        font-size: 32px !important;
    }

    .carousel__item {
        min-height: 382px !important;
    }
}

.carousel__item {
    position: relative;
    min-height: 718px;
    width: 100%;
    background-color: var(--main-color);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel__slide {
    padding: 10px;
}

.carousel__pagination-item {
    width: 10px;
}

.carousel__text {
    position: absolute;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 167%;
    color: #fff;
    max-width: 470px;
    text-align: start;
    left: 40px;
    top: 200px;
}

.carousel__title {
    position: absolute;
    bottom: 80px;
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 70px;
    line-height: 110%;
    text-align: center;
    color: #f5f5f7;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
