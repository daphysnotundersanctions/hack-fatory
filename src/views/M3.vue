<template>
  <div>
    <h1>Прил. №3 к контракту График пр.р.</h1>
    <a href="link" style="text-decoration: unset; color: black">
      <Card :cardImg="title" :cardTitle="'Прил. №3 к контракту График пр.р.'" />
    </a>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      title: "m4",
      link: "https://docs.google.com/spreadsheets/d/1LlCq4n245B2oKpHOir4Ovr75uVzHeERL/edit#gid=684698915",
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
