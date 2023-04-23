<template>
  <div>
    <h1>Техническое задание</h1>
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
          title: "Прил. №1 к контракту Техническое задание",
          img: "docTZ",
          route: "/doc",
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
