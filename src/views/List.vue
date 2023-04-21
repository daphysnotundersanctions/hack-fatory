<template>
    <div class="list">
        <template v-for="(mock,id) in mockPeople">
                {{ mock.name }}
                {{ mock.email }}
                {{ mock.price }}
                {{ mock.icon }}
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            mockPeople : [
                {
                    name : 'Вася',
                    icon : "",
                    email : 'vasya@mail.ru',
                    price : "20 000 000 $",                      
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>