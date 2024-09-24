<template>
    <div class="era">
        <div class="era__content">
            <p class="era__sub">Газпром.Академия</p>
            <h3 class="era__title">Новое поколение <br> цифровых технологий</h3>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.era {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 718px;
    width: 100%;
    background-image: url('/img/bgEra.png');
    border-radius: 30px;
    background-position: center;
    margin-bottom: 110px;
    &__title {
        font-weight: 600;
        font-size: 70px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-align: center;
        color: #f5f5f7
    }

    &__sub {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.01em;
        text-align: center;
        color: #fff;
    }
}
</style>