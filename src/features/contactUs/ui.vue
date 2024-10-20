<template>
    <div class="contact-form">
        <h2>Связаться с нами</h2>
        <form @submit.prevent="submitForm">
            <div class="head">
                <div class="form-group">
                    <label for="surname">Фамилия <span class="required">*</span></label>
                    <input placeholder="Иванов" type="text" id="surname" v-model="form.surname" required />
                </div>

                <div class="form-group">
                    <label for="name">Имя <span class="required">*</span></label>
                    <input placeholder="Иван" type="text" id="name" v-model="form.name" required />
                </div>

                <div class="form-group">
                    <label for="email">Почта <span class="required">*</span></label>
                    <input placeholder="ivanov.aa@mail.ru" type="email" id="email" v-model="form.email" required />
                </div>

                <div class="form-group">
                    <label for="organization">Организация <span class="required">*</span></label>
                    <input placeholder="ООО 'Организация'" type="text" id="organization" v-model="form.organization"
                        required />
                </div>
            </div>

            <div class="form-group">
                <label for="message">Текст сообщения <span class="required">*</span></label>
                <textarea id="message" v-model="form.message" required
                    placeholder="Напишите свои вопросы, отзывы или предложения"></textarea>
            </div>

            <Button type="submit" class="submit-btn" color="main" size="m">Отправить сообщение</Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui/button';
import { reactive } from 'vue';

const form = reactive({
    surname: '',
    name: '',
    email: '',
    organization: '',
    message: '',
});

const submitForm = () => {
    console.log('Form submitted:', form);
};
</script>

<style lang="scss" scoped>
.head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    margin-bottom: 24px;
}

.required {
    color: #eb3333;
}

.contact-form {
    max-width: 922px;
    width: 100%;
    padding: 48px;
    margin: auto;
    border-radius: 12px;
    box-shadow: 40px 40px 60px 0 rgba(227, 244, 255, 0.8), -40px -40px 60px 0 rgba(255, 255, 255, 0.8);

    background: linear-gradient(108deg, #f0f9ff 0%, #fff 100%);
    margin-bottom: 110px;

    h2 {

        margin-bottom: 32px;
        font-weight: 700;
        font-size: 40px;
        line-height: 90%;
        color: var(--second-color);
    }

    .form-group {
        margin-bottom: 15px;

        label {
            display: block;
            margin-bottom: 8px;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: var(--second-color);
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(0, 66, 105, 0.28);

            border-radius: 4px;
            font-size: 18px;
            color: #002d5c;

            &:focus {
                border-color: #4c9aff;
                outline: none;
            }
        }

        textarea {
            height: 146px;
            margin-bottom: 32px;
            resize: none;
        }
    }

    .submit-btn {
        display: block;
        margin-left: auto;

        &:hover {
            background-color: #005bb5;
        }
    }
}

@media (max-width: 768px) {
    .contact-form {
        padding: 15px;

        h2 {
            font-size: 20px;
        }

        .form-group label {
            font-size: 14px;
        }

        input,
        textarea {
            font-size: 14px;
        }

        .submit-btn {
            font-size: 14px;
        }
    }
}

@media (max-width: 480px) {
    .contact-form {
        padding: 10px;

        h2 {
            font-size: 18px;
        }

        .submit-btn {
            font-size: 12px;
        }
    }
}
</style>