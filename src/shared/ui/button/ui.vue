<template>
    <button :class="classes" role="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type ButtonSize = 's' | 'm' | 'l';
type ButtonColor = 'main' | 'main-outline';

interface Props {
    size: ButtonSize;
    color: ButtonColor;

}
const props = withDefaults(defineProps<Props>(), {
    color: 'main',
    size: 'm'
})
const classes = computed(() => ({
    button: true,
    [`button--size-${props.size}`]: true,
    [`button--color-${props.color}`]: true,
}));
</script>

<style lang="scss" scoped>
.button {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    border-radius: 56px;
    padding: 13px 35px;
    border: 1px solid transparent;

    &--color {
        &-main {
            background-color: var(--main-color);
            color: var(--bg-color)
        }

        &-main-outline {
            border: 1px solid rgba(22, 31, 62, 0.2);

            color: var(--second-color);
        }
    }
}
</style>