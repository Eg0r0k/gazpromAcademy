<template>

  <Header style="" />
  <div class="wrapper">
    <main>
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </main>
    <PopUp />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';
import { PopUp } from '@/features/popUp';

</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 140px;

  main {
    flex: 1;
    display: grid;
    height: 100%;
  }
}
</style>
