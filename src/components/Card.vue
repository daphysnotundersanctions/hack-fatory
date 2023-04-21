<template>
    <div class="machine">
        <img :src="`../public/icons/${cardImg}.svg`" alt="">
        <p>
            {{cardTitle}}
        </p>
        <img src="../../public/icons/chevron_right.svg" alt="">
    </div>
</template>


<script>
export default {
    name: 'Card',
    props : ['cardImg', 'cardTitle'],
}
</script>



<style scoped>
.machine {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    width: 100%;
    height: 56px;
    max-width: 384px;
    align-items: center;
    justify-content: center;
}

.machine p {
    margin-left: 16px;
    margin-right: 16px;
    width: 272px;
    font-weight: 500;
    font-size: 17px;
}
</style>