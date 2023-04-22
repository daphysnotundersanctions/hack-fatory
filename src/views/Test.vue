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
<script >
import swipeModal from '@takuma-ru/vue-swipe-modal'
import UiCard from "../components/ui-kit/UiCard.vue";
import StageCard from "../components/StageCard.vue";
import Card from "../components/Card.vue";
export default {
  components : {
    swipeModal, UiCard, StageCard, Card
  },
  data() {
    return {
      isModal : false,
      mockCard :[
       {
        title : 'Машины и механизмы',
        img : 'robothed',
      },
      {
        title : 'Счёт фактуры принимаемых материалов',
        img : 'notes'
      },
      {
        title : 'График работ',
        img : 'grahick'
      },
      {
        title : 'Уведомление СКЗМК',
        img : 'notifications'
      },
      {
        title : 'Паспорта и сертификаты от СЗКМЗ и поставщиков',
        img : 'check',
      },
      {
        title : 'Проект производства работ',
        img : 'proekt'
      },
      {
        title : 'Проект производства работ',
        img : 'notes'
      },
      {
        title: 'Схемы для выполнения работ',
        img: 'shame'
      },
      {
        title:'Поставка материалов',
        img:'square'

      },
      {
        title:'Персонал',
        img:'people'
      },
    ]
  }
}
}

</script>