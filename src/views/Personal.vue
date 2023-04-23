<template>
  <div>
    <h1>Персонал</h1>
    <div class="container">
      <template v-for="(mock, id) in mockCard">
        <Card
          :cardImg="mock.img"
          :cardRoute="mock.route"
          :cardTitle="mock.title"
        />
      </template>
    </div>
    <!-- <UiCalendar /> -->
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import UiCalendar from "../components/ui-kit/UiCalendar.vue";
export default {
  components: { Card, UiCalendar },
  data() {
    return {
      mockCard: [
        {
          title: "График работ по СМР",
          img: "mail",
          route: "/cmp",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
