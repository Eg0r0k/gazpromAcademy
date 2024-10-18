<template>
    <div class="container">
        <div class="wrapper">
            <section class="welcome">

                <div class="welcome__decoration-lb"></div>
                <div class="welcome__decoration-rt"></div>
                <div class="welcome__info">

                    <h2 class="welcome__title title">Цифровые </h2>
                    <h2 class="welcome__title--sub title">Технологии</h2>
                    <div class="welcome__sub">
                        <div class="welcome__card card">
                            <div class="avatar avatar-1"></div>
                            <div class="avatar avatar-2"></div>
                            <div class="avatar avatar-3"></div>
                            <div class="avatar add-avatar">
                                <span>+</span>
                            </div>
                        </div>

                        <h2 class="title-sub title">технологии</h2>
                    </div>

                    <p class="welcome__text">Получите знания об IT легко и доступно! Изучайте материалы <br>
                        в удобном формате, зарабатывайте баллы и находите лучшие знания <br>
                        на нашей платформе</p>
                    <div class="welcome__group">
                        <Button class="welcome__group-1" size="m" color="main">Начать учиться</Button>
                        <Button class="welcome__group-2" size="m" color="main-outline">Консультация</Button>

                    </div>
                </div>

                <div class="welcome__right">
                    <div class="block" v-motion-pop-visible-once>
                        <div class="block__dec-3">
                            <div class="row-1"></div>
                            <div class="row-2"></div>
                            <div class="row-3"></div>
                        </div>
                        <svg width="169" height="165" viewBox="0 0 169 165" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="block__dec-2">
                            <g filter="url(#filter0_b_2001_5)">
                                <path
                                    d="M54.7561 11.305L8.00177 65.4925C-2.15149 77.26 -1.61483 94.8391 9.23732 105.965L57.0556 154.991C64.7484 162.878 76.1506 165.904 86.7419 162.87L146.786 145.666C159.631 141.985 168.484 130.24 168.484 116.878V59.3201C168.484 47.6757 161.734 37.0871 151.177 32.172L90.0696 3.72007C77.9268 -1.93369 63.5063 1.16368 54.7561 11.305Z"
                                    fill="#99EEFF" />
                            </g>
                            <defs>
                                <filter id="filter0_b_2001_5" x="-11.7492" y="-11.5578" width="192.71" height="188.064"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.23886" />
                                    <feComposite in2="SourceAlpha" operator="in"
                                        result="effect1_backgroundBlur_2001_5" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2001_5"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <svg width="344" height="333" viewBox="0 0 344 333" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="block__dec-1">
                            <g filter="url(#filter0_b_2001_4)">
                                <path
                                    d="M119.162 12.632L11.5061 123.961C-2.267 138.204 -2.87968 160.608 10.0944 175.582L134.339 318.982C146.782 333.344 167.884 336.389 183.88 326.132L326.216 234.862C339.905 226.084 346.545 209.608 342.768 193.791L316.753 84.8395C313.895 72.8716 305.453 63.0099 294.069 58.3411L161.16 3.83447C146.68 -2.10404 130.042 1.38113 119.162 12.632Z"
                                    fill="white" fill-opacity="0.3" />
                            </g>
                            <defs>
                                <filter id="filter0_b_2001_4" x="-53.8713" y="-53.6532" width="452.314" height="440.463"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="27.3134" />
                                    <feComposite in2="SourceAlpha" operator="in"
                                        result="effect1_backgroundBlur_2001_4" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2001_4"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="welcome__bottom">

                        <svg width="348" height="183" viewBox="0 0 348 183" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="welcome__round">
                            <path
                                d="M71.2472 176.183C141.053 179.551 248.357 174.647 310.659 133.918C328.842 122.031 352.667 103.242 344.511 71.104C334.896 33.2173 291.758 17.2421 266.217 11.0306C217.882 -0.724062 138.432 -3.3395 91.4486 11.3159C70.7064 17.7859 49.9521 26.3139 31.1158 39.3308C20.5147 46.6567 -0.856117 63.7909 2.22533 84.1761C4.5242 99.3843 21.9866 112.664 31.1515 118.92C55.655 135.645 84.3232 143.873 111.005 150.525C168.421 164.838 256.441 177.623 314.44 181.196"
                                stroke="#0079C2" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <p class="title-bottom">Проведем тебя в мир IT-профессий, научим тому, что сами используем в
                            работе
                        </p>
                    </div>
                </div>
            </section>
            <AdvantagesCards />
            <HelpYou />
        </div>
        <DirectionsSlider />
        <div class="wrapper">
            <CorpTeach />
            <StudentsWorks />
            <NewEra v-motion-pop-visible-once />
            <MediaData />
            <AnswersQuestion />
            <OneSystem />
            <ContantUs v-motion-slide-visible-bottom />
            <EffectResult />
        </div>

    </div>
</template>

<script lang="ts" setup>
import { AdvantagesCards } from '@/features/advantages';
import { AnswersQuestion } from '@/features/answers';
import { ContantUs } from '@/features/contactUs';
import { CorpTeach } from '@/features/corpTeach';
import { DirectionsSlider } from '@/features/directions';
import { EffectResult } from '@/features/effectResult';
import { HelpYou } from '@/features/help';
import { MediaData } from '@/features/media';
import { NewEra } from '@/features/newEra';
import { OneSystem } from '@/features/oneSystem';
import { StudentsWorks } from '@/features/students';
import { Button } from '@/shared/ui/button';

</script>

<style lang="scss" scoped>
@media screen and (max-width:867px) {
    .title {
        font-size: 60px !important;
    }

    .welcome__sub {
        display: none !important;
    }

    .welcome__text {
        font-size: 12px !important;
    }

    .welcome__title--sub {
        display: block !important;
    }

    .welcome__decoration-rt {
        display: none;
    }
}

@media screen and (max-width:711px) {
    .title {
        font-size: 40px !important;
    }

}

@media screen and (max-width:1155px) {
    .title {}

    .welcome__group {
        margin-top: 60px !important;
    }

    .block {
        display: none
    }

    .welcome__group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }



    .welcome {
        margin-bottom: 20px !important;



        &__info {
            width: 100% !important;
            border-radius: 20px !important;

        }

        &__right {
            display: none !important;
        }



        &__bottom {
            display: none;
        }
    }
}

@keyframes move-top-bottom {
    0% {
        transform: translateY(-2%);
    }

    50% {
        transform: translateY(0%);
    }

    100% {
        transform: translateY(-2%);
    }
}

.wrapper {
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-height: calc(100vh);
    max-width: 1272px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

}

.welcome__title--sub {
    display: none;
    text-align: end;
}

.welcome__group {

    &-1,
    &-2 {
        min-width: 240px;
    }
}

.row-1,
.row-2,
.row-3 {
    background-color: #99EEFF;
    width: 38px;
    border-radius: 17px;
    z-index: 3;
}

.row-1 {
    height: 61px;
}

.row-2 {
    height: 119px;
}

.row-3 {
    height: 52px;
}

.block {
    border-radius: 49px;
    width: 100%;

    max-width: 342px;
    height: 261px;
    box-shadow: 55px 55px 82px 0 rgba(227, 244, 255, 0.8), -55px -55px 82px 0 rgba(255, 255, 255, 0.8);
    background: linear-gradient(161deg, #cdecff 33.5%, #0079c2 100%);
    margin-bottom: 40px;
    position: relative;
    overflow: visible;

    &__dec {
        &-1 {
            position: absolute;
            top: -40px;
            z-index: 0;
        }

        &-2 {
            position: absolute;

            z-index: 1;
            top: -30px;
            right: 20px;
        }

        &-3 {
            display: flex;
            flex-direction: row;
            align-items: end;
            gap: 32px;
            position: absolute;
            bottom: 50px;
            left: 32px;
        }
    }
}

.title {
    font-weight: 600;
    font-size: 90px;
    font-family: 'Raleway', sans-serif;
    line-height: 110%;
    color: #161f3e;

    &-sub {
        margin-left: 35px;
    }

    &-bottom {

        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        color: #161f3e;
        position: absolute;
        min-width: 284px;
        left: 40%;
        bottom: 50%;
        transform: translate(-35%, 50%)
    }
}

.welcome {
    width: 100%;
    height: 599px;
    display: flex;
    align-items: end;
    position: relative;
    overflow: visible;
    margin-bottom: 110px;

    &__btn {
        font-weight: 600;
        font-size: 17px;
        line-height: 150%;
        padding: 14px 15px;
        border: 1px solid rgba(22, 31, 62, 0.2);
        border-radius: 56px;
        user-select: none;
        width: 100%;
        max-width: 234px;
        transition: all 0.1s ease-in-out;

        &:active {
            transform: scale(0.9);
        }

        &-active {
            border: 1px solid transparent;
            background: #0079c2;
            color: #fff;
        }
    }

    &__group {
        margin-top: 40px;
        display: flex;
        gap: 20px;

    }

    &__text {
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #161f3e;
        margin-top: 40px;
    }

    &__decoration {


        &-lb {
            position: absolute;
            bottom: -40px;
            left: -40px;
            border-radius: 24px;
            width: 140px;
            transform: rotate(120deg);
            backdrop-filter: blur(45.68788528442383px);

            aspect-ratio: 1;
        }

        &-rt {
            position: absolute;
            top: -20px;
            left: 62.24%;
            border-radius: 24px;
            width: 140px;
            transform: rotate(10deg);
            backdrop-filter: blur(45.68788528442383px);

            aspect-ratio: 1;

        }

    }

    &__round {
        position: absolute;
        top: 35px;
        right: 35px;
    }


    &__sub {
        display: flex;
        align-items: center;

        width: 100%;
    }

    &__card {
        background-color: #FFFFFF;
        height: 63px;
        padding: 9px 16px 9px 31px;
        display: flex;
        align-items: center;
        position: relative;
        width: fit-content;
        border-radius: 56px;

        .avatar {
            background-size: cover;
            background-position: center;
            width: 48px;
            height: 48px;
            border-radius: 100%;
            stroke-width: 1.12px;
            stroke: rgba(22, 31, 62, 0.1);
            margin-left: -15px;
            position: relative;
            z-index: 1;

            &-1 {
                background-image: url('/img/Ellipse.png')
            }

            &-2 {
                background-image: url('/img/Ellipse2.png')
            }

            &-3 {
                background-image: url('/img/Ellipse3.png')
            }

            &.add-avatar {
                border: 1.12px solid rgba(22, 31, 62, 0.1);

                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 0;

                span {
                    font-size: 24px;
                    color: rgba(22, 31, 62, 0.1);
                }
            }
        }
    }

    &__info {
        background-color: var(--sub-color);
        width: 68.85%;
        height: 100%;
        border-radius: 24px 24px 0;
        padding: 90px 50px;

    }

    &__right {

        width: 31.15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
    }

    &__bottom {
        height: 242px;
        background-color: var(--sub-color);
        width: 100%;
        border-radius: 0 24px 24px 0;
        position: relative;


        &::before {
            content: "";
            position: absolute;
            width: 24px;
            height: 24px;
            top: -24px;
            background-image: radial-gradient(circle at 100% 0%, transparent 24px, var(--sub-color) 24px);
        }
    }
}
</style>
