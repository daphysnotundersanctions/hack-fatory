<template>
    <div class="card">
        <img src="../assets/icons/doc.svg" alt="">
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
</template>
<script>
export default {
    props: ['cardTitle', 'cardTime', 'cardDates', 'cardStatus']
}
</script>
<style>
.card {
    display: flex;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 8px;
    max-width: 348px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
}

.card__block {
    display: flex;
    gap: 4px;
    flex-direction: column;
}
.card__row {
    display: flex;
    gap: 13px;
}
p {
    font-size: 13px;
}
</style>