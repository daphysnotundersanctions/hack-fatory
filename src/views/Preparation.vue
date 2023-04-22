<template >
    <div>
        <h1>Подготовка к выполнению</h1>
        <div class="container">
            <template v-for="(mock, id) in mockCard" >
                <Card :cardImg="mock.img" :cardTitle="mock.title" />
            </template>
        </div>
    </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
    components : {Card},
    data() {
        return {
            mockCard: [
                {
                    title: 'Договора с СКЗМК',
                    img: 'DocDoc',
                },
                {
                    title: 'График работы',
                    img: 'grahick'

                },
                {
                    title: 'Уведомления заказчику',
                    img: 'notifications'
                },
                {
                    title: 'ТЗ на производство',
                    img: 'assignment'
                },
            ]
        }
    }
}
</script>
<style scoped>
    .container{
        margin-top: 30px;

    }
</style>