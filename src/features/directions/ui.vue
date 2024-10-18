<template>
    <div class="directions">
        <div class="wrapper">
            <h2 class="directions__title">Направления</h2>
            <div class="directions__group">
                <button class="directions__controls" :class="{ active: activeCategory === index }"
                    v-for="(category, index) in categories" :key="index" @click="setActiveCategory(index)">
                    {{ category.name }}
                </button>
            </div>
        </div>



        <Carousel v-motion-slide-visible-left :items-to-show="itemsToShow" ref="carouselRef">
            <Slide v-for="(slide, index) in filteredSlides" :key="index">
                <div :class="['carousel__item', 'slide-' + slide.background]">
                    <button class="carousel__btn">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.525 7.659H10.35V2.475C10.35 2.11696 10.2078 1.77358 9.95459 1.52041C9.70142 1.26723 9.35804 1.125 9 1.125C8.64196 1.125 8.29858 1.26723 8.04541 1.52041C7.79223 1.77358 7.65 2.11696 7.65 2.475V7.65H2.475C2.11696 7.65 1.77358 7.79223 1.52041 8.04541C1.26723 8.29858 1.125 8.64196 1.125 9C1.125 9.35804 1.26723 9.70142 1.52041 9.95459C1.77358 10.2078 2.11696 10.35 2.475 10.35H7.65V15.525C7.65 15.883 7.79223 16.2264 8.04541 16.4796C8.29858 16.7328 8.64196 16.875 9 16.875C9.35804 16.875 9.70142 16.7328 9.95459 16.4796C10.2078 16.2264 10.35 15.883 10.35 15.525V10.35H15.525C15.883 10.35 16.2264 10.2078 16.4796 9.95459C16.7328 9.70142 16.875 9.35804 16.875 9C16.875 8.64196 16.7328 8.29858 16.4796 8.04541C16.2264 7.79223 15.883 7.65 15.525 7.65V7.659Z"
                                fill="#D6D6D7" />
                        </svg>
                    </button>
                </div>
            </Slide>
        </Carousel>

    </div>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const activeCategory = ref(0);


const categories = ref([
    { name: 'Популярное', slides: [1, 2, 3, 4, 5, 6] },
    { name: 'IT', slides: [4, 5, 1, 3] },
    { name: 'Современные технологии', slides: [1, 4, 5, 6] },
    { name: 'Бесплатно', slides: [2, 5, 3, 4] }
]);


const slides = ref([
    { id: 1, background: 'slide1' },
    { id: 2, background: 'slide2' },
    { id: 3, background: 'slide3' },
    { id: 4, background: 'slide4' },
    { id: 5, background: 'slide5' },
    { id: 6, background: 'slide1' },
    { id: 7, background: 'slide2' },
    { id: 8, background: 'slide3' }
]);


const carouselRef = ref<any>(null);


const filteredSlides = computed(() => {
    const activeSlides = categories.value[activeCategory.value].slides;
    return slides.value.filter(slide => activeSlides.includes(slide.id));
});


const itemsToShow = computed(() => {
    const totalSlides = filteredSlides.value.length;
    return totalSlides < 4.5 ? totalSlides : 4.5;
});


const setActiveCategory = (index: number) => {
    activeCategory.value = index;

    if (carouselRef.value) {
        carouselRef.value.slideTo(0);
    }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width:1110px) {
    .directions {
        &__group {

            overflow-x: auto;


        }

    }
}


.directions__controls.active {
    background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
    color: white;
}

.wrapper {
    max-width: 1272px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.directions {
    margin-bottom: 110px;

    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 70px;
        line-height: 140%;
        color: #161f3e;
        margin-bottom: 40px;
    }

    &__group {
        display: flex;
        flex-direction: row;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    &__controls {
        transition: all 0.2s ease-in;
        font-family: var(--font-family);
        font-weight: 500;
        min-width: 152px;
        font-size: 14px;
        line-height: 143%;
        text-align: center;
        color: #030303;
        padding: 14px 30px;
        background: #f4f4f4;
        border-radius: 14px;

    }
}


.carousel {




    &__btn {
        border-radius: 18px;
        padding: 9px;
        background: #333336;
        display: flex;
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: all 0.2s ease-in-out;

        &:hover {

            opacity: 0.9;
            transform: rotate(180deg);
        }

        .active {
            background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
        }
    }

    &__item {
        background-image: url('/img/slide1.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;

        display: flex;
        aspect-ratio: 9/16;

        color: white;
        width: 100%;


    }

    .slide-slide1 {
        background-image: url('/img/slide1.png');
    }

    .slide-slide2 {
        background-image: url('/img/slide2.png');
    }

    .slide-slide3 {
        background-image: url('/img/slide3.png');
    }

    .slide-slide4 {
        background-image: url('/img/slide4.png');
    }

    .slide-slide5 {
        background-image: url('/img/slide5.png');
    }

    .carousel__slide {

        padding: 0 10px;
    }

}
</style>