<template >
    <div>
        <h1>График работ</h1>
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
                    title: 'Машины и механизмы',
                    img: 'robothed',
                },
                {
                    title: 'Поставка материалов',
                    img: 'square'

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