<template >
    <div>
        <h1>18 неделя проекта М4 Дон 108 км</h1>
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
                    title: 'Журнал общих работ',
                    img: 'magazine'
                },
                {
                    title: 'Графики работ',
                    img: 'grahick'
                },
                {
                    title: 'Уведомления заказчику',
                    img: 'notifications'
                },
                {
                    title: 'Паспорта и сертификаты от поставщиков',
                    img: 'check'
                },
                {
                    title: 'Журнал входного контроля',
                    img: 'people'
                },
                {
                    title: 'АССР/АООК',
                    img: 'notes'
                },
                {
                    title: 'Фотоотчеты',
                    img: 'purple'
                },
                {
                    title: 'Запросы необходимых протоколов испытаний',
                    img: 'proekt'
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
</style>