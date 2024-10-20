<template>
    <div class="allSystem">
        <img src="/img/allGroup.svg" alt="Все в одной системе, создано для достижения новых высот">
        <div class="allSystem__for">
            <p class="allSystem__p">Руководителям</p>
            <p class="allSystem__p">Дизайнерам</p>
            <p class="allSystem__p">Помощникам</p>
            <p class="allSystem__p">Специалистам</p>
            <p class="allSystem__p">Студентам</p>
            <p class="allSystem__p">Менеджерам</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.allSystem {
    margin-bottom: 150px;

    &__for {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 50px;
        justify-content: center;
    }

    &__p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        line-height: 140%;
        color: var(--second-color);
    }
}
</style>