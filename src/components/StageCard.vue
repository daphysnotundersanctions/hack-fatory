<template>
    <router-link style="text-decoration: none;" :to="cardRoute ? cardRoute : '/'">
        <div class="card">
            <img src="../../public/icons/doc.svg" alt="">
        <div class="card__block">
            <div>
                {{ cardTitle }}

            </div>
            <div class="card__row">
                <p>
                    {{ cardTime }}
                </p>
                <p>

                    {{ cardDates }}
                </p>
                <p>
                    {{ cardStatus }}
                </p>
            </div>
        </div>
    </div>
</router-link>
</template>
<script>
export default {
    props: ['cardTitle', 'cardTime', 'cardDates', 'cardStatus', 'cardRoute']
}
</script>
<style scoped>
.card {
    display: flex;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 21px;
    max-width: 384px;
    margin: auto;
    margin-bottom: 8px;
    width: 100%;
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
}

.card__block {
    display: flex;
    gap: 6px;
    flex-direction: column;
}
.card__row {
    display: flex;
    gap: 8px;
    font-size: 13px;
}
</style>