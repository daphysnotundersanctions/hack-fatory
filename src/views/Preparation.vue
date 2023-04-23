<template>
  <div>
    <h1>
      Подготовка <br />
      к выполнению
    </h1>
    <div class="container">
      <template v-for="(mock, id) in mockCard">
        <Card
          :cardRoute="mock.route"
          :cardImg="mock.img"
          :cardTitle="mock.title"
        />
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
          title: "Договора с СКЗМК",
          img: "DocDoc",
          route: "/dogovor",
        },
        {
          title: "График работы",
          img: "grahick",
          route: "/dogovor",
        },
        {
          title: "Уведомления заказчику",
          img: "notifications",
          route: "/dogovor",
        },
        {
          title: "ТЗ на производство",
          img: "assignment",
          route: "/dogovor",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
