<template>
    <component :is="to ? 'router-link' : 'button'" :to="to" role="button" :disabled="isLoading || isDisabled"
        :class="classes">
        <span class="loader" v-if="isLoading" aria-hidden="true"></span>
        <p class="button__text" :class="isLoading ? 'invisible' : ''" :size="props.size" :aria-hidden="isLoading">
            <slot></slot>
        </p>
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    color?: 'main' | 'gray' | 'error' | 'main-outline' | 'error-outline' | 'warn';
    size?: 's' | 'm' | 'l';
    decoration?: 'default' | 'none';
    isDisabled?: boolean;
    buttonLabel?: string;
    isLoading?: boolean;
    to?: string | object;
}
const props = withDefaults(defineProps<Props>(), {
    color: 'main',
    size: 'm',
    isDisabled: false,
    decoration: 'default',
    buttonLabel: 'Button',
    to: "",
});
const classes = computed(() => [
    'button',
    `button--size-${props.size}`,
    `button--color-${props.color}`,
    `decoration--${props.decoration}`,
    props.isLoading ? 'loading' : ''
])

</script>

<style lang="scss" scoped>
.button {

    display: flex;
    justify-content: center;
    align-items: center;
    height: min-content;
    border: none;
    border-radius: 50px;
    -webkit-user-select: none;
    appearance: none;
    user-select: none;
    cursor: pointer;
    line-height: 1.3;
    font-family: inherit;
    transition: 0.2s ease-in;
    gap: 8px;


    &__text {
        text-align: center;
        transition: 0.2s ease-in;
        text-transform: capitalize;
    }

    &--size {
        &-s {
            padding: 4px 8px;
            gap: 4px;
        }

        &-m {
            padding: 8px 16px;
        }

        &-l {
            padding: 12px 24px;
        }
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &--color {
        &-main {
            background-color: var(--sub-color);
            color: var(--main-color);

            &.decoration--default {
                &:hover {
                    background-color: var(--second-color);

                }

                &:active {
                    background-color: var(--sub-color);
                }
            }

            &.decoration--none {

                background-color: transparent;
                color: #2196F3;
                border: 1px solid #2196F3;

                &:hover {
                    background-color: #E3F2FD;
                }

                &:active {
                    background-color: #BBDEFB;
                }
            }
        }

        &-gray {
            background-color: #9E9E9E;
            color: #FFFFFF;

            &.decoration--default {
                &:hover {
                    background-color: #757575;
                }

                &:active {
                    background-color: #616161;
                }
            }

            &.decoration--none {
                // Outline secondary
                background-color: transparent;
                color: #9E9E9E;
                border: 1px solid #9E9E9E;

                &:hover {
                    background-color: #F5F5F5;
                }

                &:active {
                    background-color: #EEEEEE;
                }
            }
        }

        &-error {
            background-color: #F44336; // Red
            color: #FFFFFF;

            &.decoration--default {
                &:hover {
                    background-color: #D32F2F;
                }

                &:active {
                    background-color: #C62828;
                }
            }

            &.decoration--none {
                // Outline danger
                background-color: transparent;
                color: #F44336;
                border: 1px solid #F44336;

                &:hover {
                    background-color: #FFEBEE;
                }

                &:active {
                    background-color: #FFCDD2;
                }
            }
        }

        &-warn {
            background-color: #FFC107;
            color: #FFFFFF;

            &.decoration--default {
                &:hover {
                    background-color: #FFA000;
                }

                &:active {
                    background-color: #FF8F00;
                }
            }

            &.decoration--none {
                // Outline warn
                background-color: transparent;
                color: #FFC107;
                border: 1px solid #FFC107;

                &:hover {
                    background-color: #FFF8E1;
                }

                &:active {
                    background-color: #FFECB3;
                }
            }
        }
    }


}

.loader {
    position: absolute;
    min-width: 20px;
    min-height: 20px;
    border: 3px solid var(--bg-color);
    border-bottom-color: var(--text-color);
    border-radius: 100%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


.loading {
    cursor: progress !important;
}

.invisible {
    visibility: hidden;
}
</style>