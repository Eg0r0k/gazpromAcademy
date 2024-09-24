<template>
    <div class="input-group">
        <input :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput" class="input"
            :class="{ 'input--error': errorMessage }" />
        <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
       
    </div>
</template>
<script lang="ts" setup>

import { useField } from 'vee-validate';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();

const { errorMessage } = useField(props.name);
const onInput = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
        emit('update:modelValue', event.target.value);
    }
};
</script>


<style lang="scss" scoped>
.input-group {
    margin-bottom: 15px;
}

.input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &--error {
        border-color: var(--error-color);
    }
}

.error-message {
    color: var(--error-color);
    font-size: 12px;
    margin-top: 5px;
}
</style>