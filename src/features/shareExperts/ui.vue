<template>
    <div class="becomeParthner">
        <div class="becomeParthner__content">
            <h2 class="becomeParthner__title">
                Поделитесь <br> <span class="grad">экспертизой и опытом</span>

            </h2>
            <p>Есть идея для сотрудничества? Свяжитесь с нами, и мы вместе обсудим варианты работы. Реализуйте свои
                проекты на базе Газпром.Академии для ВУЗ-ов и СПО.</p>
            <div class="becomeParthner__group">
                <Button size="m" color='main'>Предложить сотрудничество</Button>
                <Button size="m" color='main-outline'>Вузам и СПО</Button>
            </div>
        </div>
        <div>
            <img src="/img/experts.svg" alt="" height="400">
        </div>

    </div>
    <div class="becomeParthner__bottom">
        <ul class="becomeParthner__fact">
            <li class="becomeParthner__item">✦ Эксперты Академии</li>
            <li class="becomeParthner__item">✦ Найм стажёров </li>
            <li class="becomeParthner__item">✦ Олимпиады и хакатоны</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button';


</script>

<style lang="scss" scoped>
@media screen and (max-width:991px) {
    .becomeParthner {
        flex-direction: column-reverse;

        &__title {
            font-size: 40px !important;
            margin-top: 40px;
        }

        &__fact {
            flex-direction: column;
            gap: 5px !important;
            align-items: center;
        }

        &__bottom {
            margin-bottom: 60px !important;
        }

        &__group {
            flex-direction: column !important;
        }
    }
}

.grad {
    line-height: 80%;
    background: linear-gradient(142deg, #161f3e 33.5%, #0079c2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.becomeParthner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    &__group {
        margin-top: 60px;
        display: flex;
        gap: 20px;
    }

    &__bottom {
        background: #cdecff;
        border-radius: 100px;
        margin-bottom: 170px;
    }

    &__fact {
        list-style: none;
        display: flex;
        padding: 20px;
        justify-content: center;
        gap: 105px;
    }

    &__item {
        font-family: var(--font-family);

        font-size: 18px;
        line-height: 167%;
        color: #161f3e;
        font-weight: 600;
    }

    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 90px;
        line-height: 110%;
        color: #161f3e;
        margin-bottom: 40px;
    }

    &__content {
        max-width: 607px;
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        align-items: start;
    }

}
</style>