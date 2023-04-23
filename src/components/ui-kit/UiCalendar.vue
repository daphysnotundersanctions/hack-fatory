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
          @click="choseDate(data)"
          class="ui-calendar__block"
          style="height: 36px"
          :class="[
            data.value && !data.problem
              ? 'ui-calendar__block--blue'
              : 'ui-calendar__block',
            data.problem && data.value ? 'ui-calendar__block--prob' : '',
          ]"
        >
          <!-- {{ data.value }} -->
        </div>
      </template>
    </div>
  </div>
  <swipe-modal
    v-model="isModal"
    contents-height="55vh"
    border-top-radius="16px"
  >
    <div>
      <div class="ui-calendar__modal">
        <img
          v-if="chosenDate.img"
          width="250"
          class="ui-calendar__img"
          :src="`/img/${chosenDate.img}`"
        />
        <h1>
          {{ chosenDate.name }}
        </h1>
        <p>
          {{ chosenDate.prof }}
        </p>
        <h3 style="margin-top: 25px">{{ chosenDate.did }}</h3>
        <h2 v-if="chosenDate.problem">{{ chosenDate.problem }}</h2>
        <h1 v-if="chosenDate.noWork">{{ chosenDate.noWork }}</h1>
      </div>
    </div>
  </swipe-modal>
</template>

<script>
import swipeModal from "@takuma-ru/vue-swipe-modal";
export default {
  components: {
    swipeModal,
  },
  methods: {
    choseDate(i) {
      if (Object.keys(i).length > 0) {
        (this.chosenDate = i)((this.isModal = true));
      } else {
        alert("Сегодня никто не работал :(");
      }
    },
  },
  data() {
    return {
      datesRow: [12, 13, 14, 15, 16, 17, 18],
      chosenDate: {},
      isModal: false,
      dataSet: [
        {},
        {
          value: "2",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          did: "Работал с 12:00 до 15:00",
          img: "pic2.jpg",
        },
        {
          value: "3",
          name: "Василий Васев",
          did: "Работал с 12:00 до 15:00",
          img: "pic1.jpeg",
          prof: "Укладчик кирпичей / Строитель",
        },
        {},
        {},
        {},
        {},
        {
          value: "1",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          did: "Работал с 12:00 до 15:00",
          problem: "Шёл дождь",
          img: "",
        },
        {
          value: "2",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          problem: "Шёл дождь",
          did: "Работал с 12:00 до 15:00",
          img: "",
        },
        {},
        {
          value: "4",
          name: "Василий Васев",
          did: "Работал с 12:00 до 15:00",
          prof: "Укладчик кирпичей / Строитель",
          img: "",
        },
        {},
        {
          value: "6",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          did: "Работал с 12:00 до 15:00",
          problem: "Шёл дождь",
          img: "pic2.jpg",
        },
        {
          value: "7",
          name: "Василий Васев",
          did: "Работал с 12:00 до 15:00",
          prof: "Укладчик кирпичей / Строитель",
          problem: "Шёл дождь",
          img: "",
        },
        {},
        {
          value: "2",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          problem: "Шёл дождь",
          did: "Работал с 12:00 до 15:00",
          img: "",
        },
        {
          value: "3",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          problem: "Шёл дождь",
          did: "Работал с 12:00 до 15:00",
          img: "",
        },
        {},
        {},
        {
          value: "6",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          img: "",
          did: "Работал с 12:00 до 15:00",
        },
        {},
        {},
        {
          value: "2",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          did: "Работал с 12:00 до 15:00",
          img: "",
        },
        {
          value: "3",
          name: "Василий Васев",
          prof: "Укладчик кирпичей / Строитель",
          did: "Работал с 12:00 до 15:00",
          img: "",
        },
        {
          value: "4",
          name: "Василий Васев",
          did: "Работал с 12:00 до 15:00",
          prof: "Укладчик кирпичей / Строитель",
          img: "",
        },
        {},
        {
          value: "6",
          name: "Василий Васев",
          did: "Работал с 12:00 до 15:00",
          prof: "Укладчик кирпичей / Строитель",
          img: "",
        },
        {},
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
  border-width: 0px 0.5px 0.5px 0px;
  border-style: solid;
  border-color: #cccccc;
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
.ui-calendar__block--prob {
  background-color: #ff7878;
}
.ui-calendar__modal {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.ui-calendar__modal h1 {
  margin: 0;
}
.ui-calendar__img {
  border-radius: 50%;
  margin-top: 10px;
}
</style>
