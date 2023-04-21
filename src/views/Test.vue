<template>
  <div>  
    <button @click="isModal = true">open</button>
    <swipe-modal
      v-model="isModal"
      contents-height="50vh"
      border-top-radius="16px"
    >
      <p>contents</p>
    </swipe-modal>
    <UiCard />
    <template v-for="i in 100">
        <StageCard cardTitle="Жопа" cardTime="14 неделя" cardStatus="Выполнено" cardDates="с 14 по 28 марта " />
    </template>
  </div>
</template>
<script setup>
import { ref } from "vue";
import swipeModal from '@takuma-ru/vue-swipe-modal'
import UiCard from "../components/ui-kit/UiCard.vue";
import StageCard from "../components/StageCard.vue";
const isModal = ref(false)
</script>
