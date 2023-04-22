<template >
    <div>
        <h1>Счет фактура</h1>
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
                    title: 'Таблица редактируемая',
                    img: 'schet',
                },
                {
                    title: 'Архив',
                    img: 'zip'
                },
            ]
        }
    }
}
</script>
<style scoped>
    
</style>