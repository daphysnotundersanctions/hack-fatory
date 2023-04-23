<template>
  <div>
    <h1 class="mt30">М4 Дон 148-212 км</h1>
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
          title: "Стадия проекта",
          img: "stage",
          route: "/stateproject",
        },
        {
          title: "Договор",
          img: "dogovor",
          route: "/docs",
        },
        {
          title: "График работ",
          img: "graphic",
          route: "/cmp",
        },
        {
          title: "Документы для передачи СКЗМК",
          img: "docs",
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
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
