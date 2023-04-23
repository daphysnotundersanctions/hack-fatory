<template>
  <div>
    <h1>Прил. №4 к контракту График финансирования</h1>
    <a href="link" style="text-decoration: unset; color: black">
      <Card :cardImg="title" :cardTitle="'ГК №3-20-ОБ'" />
    </a>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      title: "m4",
      link: "https://docs.google.com/spreadsheets/d/12gndvshFqA_7D1hi-K2t3YrVPaC9s0TD/edit#gid=598538726",
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Код, который будет запущен только после
      // переотрисовки всех представлений
      window.open(this.link);
    });
  },
  components: { Card },
};
</script>
<style lang=""></style>
