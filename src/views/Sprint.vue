<template >
    <div>
        <h1>Первый спринт
        <p>14 неделя проекта</p></h1>
        <div class="container">
            <template v-for="(mock, id) in mockCard">
                <Card :cardImg="mock.img" :cardTitle="mock.title" />
            </template>
        </div>
    </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
    components: { Card },
    data() {
        return {
            mockCard: [
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
        title: 'Схемы для выполнения работ',
        img: 'shame'
      },
            ]
        }
    }
}
</script>
<style scoped>
.container {
    margin-top: 30px;

}

p {
    font-weight: 500;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    padding-top: 10px;
}
</style>