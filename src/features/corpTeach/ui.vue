<template>
    <div class="CorpTeaching">

        <div class="CorpTeaching__content">

            <h2>
                Корпоративное
                <span class="CorpTeaching__grad">
                    обучение
                </span>
            </h2>

            <p>
                Помогаем компаниям и их сотрудникам повысить экспертность в цифровой среде через общие и
                индивидуальные
                прогграммы. Оставьте заявку и мы обсудим варианты сотрудничества.
            </p>
            <Button color="main" size="m">Оставить заявку</Button>

        </div>
        <div>
            <img src="/img/corp.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button';


</script>

<style scoped lang="scss">
@media screen and (max-width:1111px) {
    .CorpTeaching {
        display: none !important;
    }
}

.CorpTeaching {
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;

    &__grad {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 70px;
        line-height: 140%;
        background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__content {
        margin-right: 70px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 40px;
        max-width: 49%;

        & h2 {
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 70px;
            line-height: 140%;
            color: var(--second-color);
        }

        & p {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: #161f3e;
        }

    }
}
</style>