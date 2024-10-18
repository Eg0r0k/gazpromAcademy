<template>
    <div>
        <h3 class="QA__title">Ответы на вопросы</h3>
        <div class="QA">
            <div v-for="(question, index) in questions" :key="question.id" class="QA__item">
                <button class="QA__question" @click="toggleQuestion(question.id)"
                    :class="{ active: openQuestions.includes(question.id), 'last-item': index === questions.length - 1 }">
                    {{ question.question }}
                    <div class="QA__check" :class="{ rotated: openQuestions.includes(question.id) }"></div>
                </button>

                <div v-if="openQuestions.includes(question.id)" class="QA__answer">
                    <p>{{ question.about }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const questions = ref([
    { id: 1, question: 'Как проходит обучение?', about: 'Vue is a progressive JavaScript framework.' },
    { id: 2, question: 'Почему часть обучения в «Газпром.Академия» — бесплатное?', about: 'TypeScript is a superset of JavaScript.' },
    { id: 3, question: 'Какая методология обучения IT-направлений?', about: 'SCSS is a CSS preprocessor with additional features.' },
    { id: 4, question: 'Есть ли возрастные ограничения?', about: 'SCSS is a CSS preprocessor with additional features.' },
    { id: 5, question: 'Могу ли я участвовать в продвинутом уровне, если параллельно учусь или работаю?', about: 'SCSS is a CSS preprocessor with additional features.' },
    { id: 6, question: 'Должен ли я хорошо разбирать в компьютерных технологиях, чтобы поступить в «Газпром.Академия»?', about: 'SCSS is a CSS preprocessor with additional features.' },
    { id: 7, question: 'Могут ли граждане других стран учиться?', about: 'SCSS is a CSS preprocessor with additional features.' },
    { id: 8, question: 'Какой документ получают участники по окончании «Газпром.Академия»?', about: 'SCSS is a CSS preprocessor with additional features.' },
]);

const openQuestions = ref<number[]>([]);


const toggleQuestion = (id: number) => {
    if (openQuestions.value.includes(id)) {
        openQuestions.value = openQuestions.value.filter(qId => qId !== id);
    } else {
        openQuestions.value.push(id);
    }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width:1110px) {
    .QA {
        margin-bottom: 40px !important;

        &__title {
            font-size: 42px !important;
        }


    }
}

.QA {
    margin-bottom: 150px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 100%;
    padding: 9px 16px;

    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 70px;
        line-height: 110%;
        color: var(--second-color);
        margin-bottom: 40px;
    }

    &__check {
        margin: 10px;
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        transition: transform 0.3s ease;
    }

    &__check.rotated {
        transform: rotate(225deg);

    }

    &__answer {
        padding: 20px;
    }
}

.QA__item {
    width: 100%;
    margin: 0 auto;
    max-width: 1153px;
}

.QA__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    padding: 34px 0 28px 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    line-height: 167%;
    color: #1d2633;
    border-bottom: 1px solid #ccc;
    width: 100%;
    transition: border 0.3s ease;

    &.last-item {
        border-bottom: none;

    }
}

.QA__question.active {
    color: var(--main-color);
    transition: transform 0.3s ease;

}
</style>
