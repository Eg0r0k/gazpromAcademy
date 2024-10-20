<template>
    <div class="bg" v-if="showModal">
        <div class="content">

            <div class="content__header" v-if="step > 0 && step < 4">
                <h2>Опрос: <span>персонализация</span> курса</h2>
                <button class="close-btn" @click="closeModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.3536 13.0607L12 12.7071L11.6465 13.0607L4.22183 20.4853L3.51473 19.7782L10.9393 12.3536L11.2929 12L10.9393 11.6465L3.51472 4.22183L4.22183 3.51472L11.6465 10.9393L12 11.2929L12.3536 10.9393L19.7782 3.51472L20.4853 4.22183L13.0607 11.6465L12.7071 12L13.0607 12.3536L20.4853 19.7782L19.7782 20.4853L12.3536 13.0607Z"
                            stroke="#0079C2" stroke-opacity="0.28" />
                    </svg>
                </button>
            </div>

            <div class="content__body">

                <div v-if="step === 0" class="welcome">

                    <h2>Привет! Чтобы обучение было <span> максимально эффективным</span>, необходимо ответить на пару
                        вопросов</h2>
                    <button class="close-btn" @click="closeModal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.3536 13.0607L12 12.7071L11.6465 13.0607L4.22183 20.4853L3.51473 19.7782L10.9393 12.3536L11.2929 12L10.9393 11.6465L3.51472 4.22183L4.22183 3.51472L11.6465 10.9393L12 11.2929L12.3536 10.9393L19.7782 3.51472L20.4853 4.22183L13.0607 11.6465L12.7071 12L13.0607 12.3536L20.4853 19.7782L19.7782 20.4853L12.3536 13.0607Z"
                                stroke="#0079C2" stroke-opacity="0.28" />
                        </svg>
                    </button>
                    <img src="/img/wel.png" alt="info" />

                    <button @click="nextStep" class="btn start">Начать опрос <svg width="13" height="17"
                            viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.3123 6.54545C7.79109 4.79917 8.54861 1.63636 9.43046 0C6.78491 0.818182 5.0212 4.09091 5.0212 6.54545C5.0212 9 5.94145 9.5683 5.0212 9.44596C4.51279 9.37837 3.2575 9 3.25749 6.54545C-1.25005 12 0.999945 16.5 6.99994 16.5C14.0745 16.5 14.5 9.44596 10.3123 6.54545Z"
                                fill="white" />
                        </svg></button>
                </div>


                <form v-else-if="step === 1">
                    <p>Какие основные цели у тебя на текущий период?</p>
                    <div class="checkbox-group">
                        <label><input type="checkbox" v-model="formData.goals" value="Получить базовые знания"> Получить
                            базовые знания</label>
                        <label><input type="checkbox" v-model="formData.goals" value="Получить продвинутые знания">
                            Получить продвинутые знания</label>
                        <label><input type="checkbox" v-model="formData.goals" value="Выйти на стажировку"> Выйти на
                            стажировку</label>
                        <label><input type="checkbox" v-model="formData.goals" value="Получить сертификат"> Получить
                            сертификат</label>
                    </div>
                </form>

                <!-- Step 2: Course Type -->
                <form v-else-if="step === 2">
                    <p>Какой бы курс ты хотел(а) пройти?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="course" v-model="formData.course" value="Ускоренный">
                            Ускоренный</label>
                        <label><input type="radio" name="course" v-model="formData.course" value="Углубленный">
                            Углубленный</label>
                    </div>
                </form>

                <!-- Step 3: Background -->
                <form v-else-if="step === 3">
                    <p>Есть ли у тебя бэкграунд по выбранной теме?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="background" v-model="formData.background"
                                value="Да, есть небольшие знания"> Да, есть небольшие знания</label>
                        <label><input type="radio" name="background" v-model="formData.background"
                                value="Я эксперт в выбранной отрасли"> Я эксперт в выбранной отрасли</label>
                        <label><input type="radio" name="background" v-model="formData.background" value="Я новичок"> Я
                            новичок</label>
                        <label><input type="radio" name="background" v-model="formData.background"
                                value="Ничего не знаю, у меня лапки"> Ничего не знаю, у меня лапки</label>
                    </div>
                </form>


                <div v-else-if="step === 4" class="end">
                    <button class="close-btn" @click="closeModal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.3536 13.0607L12 12.7071L11.6465 13.0607L4.22183 20.4853L3.51473 19.7782L10.9393 12.3536L11.2929 12L10.9393 11.6465L3.51472 4.22183L4.22183 3.51472L11.6465 10.9393L12 11.2929L12.3536 10.9393L19.7782 3.51472L20.4853 4.22183L13.0607 11.6465L12.7071 12L13.0607 12.3536L20.4853 19.7782L19.7782 20.4853L12.3536 13.0607Z"
                                stroke="#0079C2" stroke-opacity="0.28" />
                        </svg>
                    </button>
                    <h2>Ответы отправлены! Совсем скоро ты получишь <span>доступ к курсу мечты</span> </h2>
                    <img src="/img/cat.png" alt="Котик" class="cat" />
                    <div class="cat__controls">
                        <button @click="closeModal" class="btn on-main">На главную →</button>
                    </div>
                </div>
            </div>

            <div class="progress-bar" v-if="step > 0 && step < 4">
                <div class="progress" :style="{ width: (step / 3 * 100) + '%' }"></div>
            </div>

            <div class="content__footer" v-if="step > 0 && step < 4">
                {{ step }} из 3
                <div class="controls">
                    <button v-if="step > 1" @click="prevStep" class="btn-outline">← Назад</button>
                    <button v-if="step < 3" :disabled="!canProceed" @click="nextStep" class="btn">Далее →</button>
                    <button v-else @click="submitForm" class="btn" :disabled="!canProceed">Готово</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const step = ref(0);
const showModal = ref(true);

const formData = ref({
    goals: [] as string[],
    course: '',
    background: ''
});

const canProceed = computed(() => {
    if (step.value === 1) return formData.value.goals.length > 0;
    if (step.value === 2) return !!formData.value.course;
    if (step.value === 3) return !!formData.value.background;
    return false;
});

const nextStep = () => {
    if (step.value < 4 && (step.value === 0 || canProceed.value)) step.value++;
};

const prevStep = () => {
    if (step.value > 0) step.value--;
};

const closeModal = () => {
    showModal.value = false;
    enableScroll();
};

const submitForm = () => {
    if (canProceed.value) {

        nextStep();
    }
};

const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
    document.body.style.overflow = '';
};

onMounted(() => {
    disableScroll();
});

onUnmounted(() => {
    enableScroll();
});
</script>


<style lang="scss" scoped>
.bg {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.start {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
}

.end {
    position: relative;

    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
    }
}

.cat {
    margin: 20px auto 20px auto;
    border-radius: 24px;

    &__controls {
        display: flex;
        justify-content: end;

    }
}

.welcome {
    position: relative;

    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
    }
}

.content {
    padding: 48px;
    width: 100%;
    border-radius: 32px;
    max-width: 800px;
    box-shadow: 0 12px 28px rgba(0, 32, 51, 0.12), 0 8px 8px rgba(0, 32, 51, 0.04);
    background: linear-gradient(108deg, #f0f9ff 0%, #fff 100%);
    display: flex;
    flex-direction: column;

    height: 634px;
}

h2 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 112%;
    color: #161f3e;
}

.content__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 72px;
}

.close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

@media screen and (max-width:600px) {
    .controls {
        flex-direction: column;
    }

    .content__header {
        margin-bottom: 20px !important;
    }
}

.controls {
    display: flex;
    gap: 20px;
}

.highlight {
    color: #ff3366;
}

span {
    background: linear-gradient(303deg, #ff2a80 33.5%, #ff41f2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content__body {
    margin-bottom: 24px;

    p {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        line-height: 120%;
        color: #161f3e;
        margin-bottom: 24px;
    }
}

.checkbox-group,
.radio-group {
    display: flex;
    flex-direction: column;
    gap: 20px;

    label {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 122%;
        color: #161f3e;

    }

    input {
        margin-right: 16px;
    }
}

.content__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.progress-bar {
    margin-top: auto;
    height: 6px;
    background: #e0e0e0;
    border-radius: 10px;
    margin-right: 16px;
    overflow: hidden;

}

.progress {
    height: 100%;
    background: #0079c2;

    transition: width 0.3s ease;
}

.btn {
    padding: 13px 35px;
    background: #0079c2;
    border-radius: 56px !important;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.btn-outline {
    border: 1px solid rgba(22, 31, 62, 0.2);
    border-radius: 56px;
    padding: 13px 35px;
}

.btn:hover {
    background: #2563eb;
}
</style>