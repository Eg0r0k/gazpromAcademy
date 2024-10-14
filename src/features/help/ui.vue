<template>
    <div class="help">
        <div class="help__left">
            <h3>Помогаем <br> <span>раскрыть потенциал </span> <br> и готовим к успешной <br> карьере в IT!</h3>
            <p>В академии участники одновременно развивают жёсткие
                и мягкие навыки: в группах и самостоятельно выполняют проекты из практики крупных ИТ- компаний и
                проводят
                код-ревью.</p>

            <Button color="main-outline">Подробнее о трудоустройстве </Button>
        </div>
        <div class="help__right">
            <img src="/img/help.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@media screen and (max-width:925px) {
    .help {}
}

.help {
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;

    button {
        font-weight: 600;
        font-size: 17px;
        line-height: 150%;
        padding: 14px 15px;
        border: 1px solid rgba(22, 31, 62, 0.2);
        border-radius: 56px;
        user-select: none;
        width: 100%;
        max-width: 346px;
        transition: all 0.1s ease-in-out;

        &:active {
            transform: scale(0.9);
        }
    }

    &__left {
        width: 43.71%;

        h3 {
            font-family: var(--third-family);
            font-weight: 600;
            font-size: 40px;
            line-height: 140%;
            color: #161f3e;
            margin-bottom: 102px;
        }

        p {
            margin-bottom: 102px;
        }

        span {
            background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__right {
        width: 49.1%;

    }
}
</style>