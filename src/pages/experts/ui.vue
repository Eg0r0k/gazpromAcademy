<template>
    <div class="container">
        <div class="wrapper">
            <ShareExperts />
            <NewEra v-motion-pop-visible-once />
            <OneSystem />
            <ContantUs v-motion-slide-visible-bottom />
        </div>
        <DirectionsSlider />
        <div class="wrapper">

            <HelpYou />
            <StudentsWorks />
            <CorpTeach />
            <EffectResult />
            <AnswersQuestion />
        </div>
    </div>
</template>

<script setup lang="ts">
import { AnswersQuestion } from '@/features/answers';
import { ContantUs } from '@/features/contactUs';
import { CorpTeach } from '@/features/corpTeach';
import { DirectionsSlider } from '@/features/directions';
import { EffectResult } from '@/features/effectResult';
import { HelpYou } from '@/features/help';
import { NewEra } from '@/features/newEra';
import { OneSystem } from '@/features/oneSystem';
import { ShareExperts } from '@/features/shareExperts';
import { StudentsWorks } from '@/features/students';




</script>

<style scoped lang="scss">
.wrapper {
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-height: calc(100vh);
    max-width: 1272px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

}
</style>