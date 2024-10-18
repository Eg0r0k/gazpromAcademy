<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__left">
                asd
            </div>
            <div class="footer__right">
                asd
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {

    &__left {
        min-width: 68%;
        background-color: red;
    }

    &__right {

        width: 68%;
        background-color: blue;
    }

    &__content {
        display: flex;
        flex-direction: row;
        max-width: 1240px;
        margin: 0 auto;
        min-height: 540px;
        background-color: #CDECFF;
        border-radius: 20px;

    }

}
</style>