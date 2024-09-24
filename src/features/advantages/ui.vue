<template>
    <div class="stats-container">
        <div class="stat-item" v-motion-roll-visible-once-bottom>
            <div class="stat-frame">
                90%
            </div>
            <h2>Молодые специалисты</h2>
            <p>Исследуем приоритетные области для привлечения молодежи</p>
        </div>
        <div class="stat-item" v-motion-roll-visible-once-bottom>
            <div class="stat-frame gradient">
                >1.5K
            </div>
            <h2>Экспертов</h2>
            <p>Твои наставники это одни из лучших специалистов области
                с многолетним опытом и сильным бэкграундом</p>
        </div>
        <div class="stat-item" v-motion-roll-visible-once-bottom>
            <div class="stat-frame">
                100%
            </div>
            <h2>Стажировка
                в ИТ-компании</h2>
            <p>Лучшим студентам предлагаем вакансии партнеров</p>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style lang="scss" scoped>
.stats-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;

    .stat-frame {
        color: white;
        font-family: var(--font3);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 48px;
        border-radius: 20px;
        font-weight: 400;
        font-size: 60px;
        line-height: 165%;
        box-shadow: 40px 40px 60px 0 rgba(227, 244, 255, 0.8), -40px -40px 60px 0 rgba(255, 255, 255, 0.8);
        background: #0079c2;

        margin-bottom: 16px;
    }

    h2 {
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 32px;
        line-height: 112%;
        margin-bottom: 16px;
    }

    p {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
    }

    .gradient {
        background: linear-gradient(161deg, #cdecff 33.5%, #0079c2 100%) !important;
    }

    .stat-item {

        width: 30%;
        text-align: center;


    }
}
</style>
