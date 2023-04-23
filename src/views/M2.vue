<template>
  <div>
    <h1>Прил. №2 к контракту Ведомость объемов и стоимости работ</h1>
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
      link: "https://docs.google.com/spreadsheets/d/1T1-GNcORm8UZZxdrMg-OxQvnNR1xmOLr/edit#gid=1609556208",
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
