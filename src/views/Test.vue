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
    <template v-for="i in 2">
        <StageCard cardTitle="Жопа" cardTime="14 неделя" cardStatus="Выполнено" cardDates="с 14 по 28 марта " />
    </template>
  </div>
  <template v-for="(mock,id) in mockCard">
    <Card :cardImg="mock.img" :cardTitle="mock.title" />
  </template>
</template>
<script setup>
import { ref } from "vue";
import swipeModal from '@takuma-ru/vue-swipe-modal'
import UiCard from "../components/ui-kit/UiCard.vue";
import StageCard from "../components/StageCard.vue";
import Card from "../components/Card.vue";
const isModal = ref(false)

const mockCard = [
  {
    title : 'Машины и механизмы',
    img : 'robothed.svg',
  }
]
</script>