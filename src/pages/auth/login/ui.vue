<template>
    <div class="login">

        <div class="login__container">
            <h2>Login</h2>
            <TextInput v-model="email.value.value" type="text" placeholder="Email" name="email" />
            <TextInput v-model="password.value.value" type="text" placeholder="Password" name="password" />

            <Button size="m" color="main" @click="onSubmit">Login</Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TextInput } from '@/shared/ui/input';
import { useField, useForm } from 'vee-validate';
import { Button } from '@/shared/ui/button';
import * as yup from 'yup';
const schema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});
const { handleSubmit, errors } = useForm({
    validationSchema: schema,
});
const email = useField<string>('email');
const password = useField<string>('password');
const onSubmit = handleSubmit((values) => {
    console.log('Login data:', values);
});
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;


    &__container {
        border: 1px solid rgba(94, 94, 94, 0.6);
        border-radius: var(--border-radius);
        padding: 20px 24px;
        min-width: 24%;
    }

    h2 {

        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }
}
</style>