<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-2 text-center">Calendar</h1>
      <h1 class="text-2xl my-2 text-center">
        currentMonth{{ currentMonth + 1 }}
      </h1>
      <h1 class="text-2xl my-2 text-center">currentDate {{ currentDate }}</h1>
      <section class="flex justify-between">
        <h1 class="text-2xl my-2 text-center">{{ currentMonthName }}</h1>
        <h1 class="text-2xl my-2 text-center">{{ currentYear }}</h1>
      </section>

      <section class="flex">
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="day in days"
          :key="day"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex flex-wrap">
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="dates in startDay()"
          :key="dates"
        ></p>
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="dates in daysInMonth()"
          :key="dates"
          :class="highlightCurDate(dates)"
        >
          {{ dates }}
        </p>
      </section>
      <section class="flex justify-between mt-3">
        <button class="border p-2 rounded" @click="preMonth">Pre</button>
        <button class="border p-2 rounded" @click="next">Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = -1;
        this.currentYear++;
      }
      return this.currentMonth++;
    },
    preMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      return this.currentMonth--;
    },
    highlightCurDate(date) {
      const allDate = new Date(
        this.currentYear,
        this.currentMonth,
        date
      ).toDateString();
      const curDate = new Date().toDateString();
      return allDate === curDate ? "text-pink-500 border rounder" : "null";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style></style>
