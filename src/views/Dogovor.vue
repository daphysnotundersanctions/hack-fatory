<template >
    <div>
        <h1>Договора с СКЗМК</h1>
        <div class="container">
            <template v-for="(mock, id) in mockCard">
                <Card :cardRoute="mock.route" :cardImg="mock.img" :cardTitle="mock.title" />
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
                    title: 'М4 Дон 108 км.',
                    img: 'm4',
                    route : '/m4'
                },
                {
                    title: 'М34 176 км.',
                    img: 'm4'
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