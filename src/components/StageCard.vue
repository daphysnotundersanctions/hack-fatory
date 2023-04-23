<template>
  <router-link
    style="text-decoration: none; color: unset"
    :to="cardRoute ? cardRoute : '/'"
  >
    <div class="card">
      <img :src="`/img/${cardIcon}.png`" alt="" />
      <div class="card__block">
        <div style="font-size: 17px">
          {{ cardTitle }}
        </div>
        <div class="card__row">
          <p>
            {{ cardTime }}
          </p>
          <p>
            {{ cardDates }}
          </p>
          <p
            :class="
              cardStatus === 'Выполнено'
                ? 'card__status--check'
                : 'card__status'
            "
          >
            {{ cardStatus }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: [
    "cardTitle",
    "cardTime",
    "cardDates",
    "cardStatus",
    "cardRoute",
    "cardIcon",
  ],
};
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
.card__status {
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
}
.card__status--check {
  color: green;
  font-weight: 400;
}
</style>
