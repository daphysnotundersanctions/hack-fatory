<template>
  <div>
    <h1>ГК №3-20-ОБ</h1>
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
      link: "https://docs.google.com/document/d/1TwR6Q7HbbPmlVuEIpgyM4TQyStMuqAPa/edit",
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
