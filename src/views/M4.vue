<template >
    <div>
        <h1>М4 Дон 108 км.</h1>
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
                    title: 'Почта с СКЗМК',
                    img: 'mail',
                },
                {
                    title: 'Договор',
                    img: 'DocDoc'

                },
                {
                    title: 'ТЗ',
                    img: 'docTZ'
                },
                {
                    title: 'Акты, счета, счет фактуры',
                    img: 'certificate'
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