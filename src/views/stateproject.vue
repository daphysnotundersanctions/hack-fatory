<template>
    <div>  
        <h1>Стадия проекта</h1>
      <template v-for="i in cards">
          <StageCard :cardTitle="i.title" :cardTime="i.time" :cardStatus="i.status" :cardDates="i.dates" />
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
        
        cards :[
          {
            title : 'Подписание договора',
            time : '14 неделя',
            status : 'Выполнено',
            dates : 'с 3 по 8 апреля'
          },
          {
            title : 'Подготовка к выполнению работ',
            time : '15 неделя',
            status : 'В процессе',
            dates : 'с 14 по 28 марта'
          },
          {
            title : 'Первый спринт',
            time : '16 неделя',
            status : 'Запланировано',
            dates : 'с 14 по 28 марта'
          },
          {
            title : 'Второй спринт',
            time : '18 неделя',
            status : 'Запланировано',
            dates : 'с 14 по 28 марта'
          },
          {
            title : 'Сдача выполненных СМР',
            time : '14 неделя',
            status : 'Запланировано',
            dates : 'с 3 по 8 апреля'
          },
          
        
      ]
    }
  }
  }
  
  </script>