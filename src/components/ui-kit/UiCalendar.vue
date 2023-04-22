<template>
  <div class="ui-calendar">
    <div class="ui-calendar__header">
      <img
        style="transform: rotate(180deg)"
        src="/icons/chevron_right.svg"
        alt=""
      />
      <p>18 неделя, апрель</p>
      <img src="/icons/chevron_right.svg" alt="" />
    </div>
    <div class="ui-calendar__dates">
      <template v-for="date in datesRow">
        <div class="ui-calendar__block">
          {{ date }}
        </div>
      </template>
    </div>
    <div class="ui-calendar__body">
      <template v-for="data in dataSet">
        <div
          @click="isModal = true"
          class="ui-calendar__block"
          style="height: 36px"
          :class="
            data.value ? 'ui-calendar__block--blue' : 'ui-calendar__block'
          "
        >
          <!-- {{ data.value }} -->
        </div>
      </template>
    </div>
  </div>
  <swipe-modal
    v-model="isModal"
    contents-height="50vh"
    border-top-radius="16px"
  >
    <p>contents</p>
  </swipe-modal>
</template>

<script>
import swipeModal from "@takuma-ru/vue-swipe-modal";
export default {
  components: {
    swipeModal,
  },
  data() {
    return {
      datesRow: [12, 13, 14, 15, 16, 17, 18],
      isModal: false,
      dataSet: [
        {},
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        {},
        { value: "7" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "" },
      ],
    };
  },
};
</script>
<style scoped>
.ui-calendar {
}
.ui-calendar__header {
  background: #ffffff;
  border-bottom: 0.5px solid #cccccc;
  display: flex;
  justify-content: center;
  gap: 75px;
  padding: 12px 16px;
  align-items: center;
}
.ui-calendar__dates {
  display: flex;
}
.ui-calendar__block {
  text-align: center;
  max-width: 55px;
  width: 100%;
  background: #ffffff;
  padding: 6px 0;
  font-size: 15px;
  border-right: 0.5px solid #cccccc;
}
.ui-calendar__body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.ui-calendar__block--blue {
  background-color: #d3eaff;
}
</style>
