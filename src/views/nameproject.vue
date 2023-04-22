<template >
    <div>
        <h1 class="mt30">Название проекта</h1>
        <div class="container">
            <template v-for="(mock, id) in mockCard" >
                <Card :cardRoute="mock.route" :cardImg="mock.img" :cardTitle="mock.title" />
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
                    title: 'Стадия проекта',
                    img: 'stady',
                    route : '/stateproject'
                },
                {
                    title: 'Договор',
                    img: 'docbig',
                    route : '/stateproject'
                },
                {
                    title: 'График работ',
                    img: 'pules',
                    route : '/stateproject'
                },
                {
                    title: 'Документы для передачи СКЗМК',
                    img: 'gallere',
                    route : '/stateproject'
                },
            ]
        }
    }
}
</script>
<style scoped>
    .container{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>