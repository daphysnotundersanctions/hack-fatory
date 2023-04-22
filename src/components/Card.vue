<template>
    <router-link style="text-decoration: none;" :to="cardRoute ? cardRoute : '/'">
        <div class="machine">
            <img :src="`../public/icons/${cardImg}.svg`" alt="">
            <p>
                {{cardTitle}}
            </p>
            <img src="../../public/icons/chevron_right.svg" alt="">
        </div>
    </router-link>
</template>


<script>
export default {
    name: 'Card',
    props : ['cardImg', 'cardTitle', 'cardRoute', 'padding'],
}
</script>



<style scoped>
.machine {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    height: 56px;
    max-width: 384px;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
}

.machine p {
    margin-left: 16px;
    margin-right: 16px;
    width: 272px;
    font-weight: 500;
    font-size: 17px;
}
</style>