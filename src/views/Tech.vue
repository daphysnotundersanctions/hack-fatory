<template >
    <div>
        <h1>ТЗ на производство</h1>
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
                    title: 'ТЗ от заказчика',
                    img: 'docTZ',
                },
                {
                    title: 'Сертификаты, чертежи от производства',
                    img: 'certificate'

                },
                {
                    title: 'Персонал',
                    img: 'people'
                },
            ]
        }
    }
}
</script>
<style>
    


</style>