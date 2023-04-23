<template>
  <div>
    <h1>Договора с СКЗМК</h1>
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
          title: "М4 Дон 108 км.",
          img: "m4",
          route: "/m4",
        },
        {
          title: "ГК №3-20-ОБ",
          img: "m4",
          route: "/m1",
        },
        {
          title: "Прил. №2 к контракту Ведомость объемов и стоимости работ",
          img: "m4",
          route: "/m2",
        },
        {
          title: "Прил. №3 к контракту График пр.р.",
          img: "m4",
          route: "/m3",
        },
        {
          title: "Прил. №4 к контракту График финансирования",
          img: "m4",
          route: "/m5",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  margin-top: 30px;
}
</style>
