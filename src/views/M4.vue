<template >
    <div>
        <h1>М4 Дон 108 км.</h1>
        <div class="container">
            <template v-for="(mock, id) in mockCard" >
                <Card :cardImg="mock.img" :cardTitle="mock.title" />
            </template>
        </div>
        <UiCalendar />
    </div>
</template>
<script>
import Card from "../components/Card.vue";
import UiCalendar from "../components/ui-kit/UiCalendar.vue";
export default {
    components : { Card, UiCalendar },
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
    
</style>