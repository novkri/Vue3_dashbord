<template>
  <div
    class="flex bg-secondMain overflow-hidden shadow rounded-lg border-solid"
    v-for="card in cardsInfo" :key="card.index"
  >
    <div class="px-4 py-5 sm:p-6 text-center w-3/5">
      <div class="chart-info-wrapper">
        <h2 class="text-sm text-gray-400 font-bold">{{ card.name }}</h2>
        <span class="mt-1 text-3xl font-semibold text-white">{{ card.amount }}</span>
      </div>
    </div>

    <div class="text-center w-2/5 flex justify-center items-center chart-container">
      <div class="chart-svg">
        <svg viewBox="0 0 36 36" class="circular-chart" :class="'color' + card.index">
          <path class="circle-bg" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"></path>
          <path class="circle" :stroke-dasharray="`${card.progress}, 100`" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"></path>
          <text x="18" y="20.35" class="percentage">{{ card.progress }}%</text>
        </svg>
      </div>

    </div>
  </div>
</template>


<script>

export default {
  name: "Home",
  components: {
  },
  props: {
    cardsInfo: Array
  },
  data: () => {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.chart-container {
  padding: 16px;
}


  .chart-info-wrapper h2 {
    /* font-size: 12px;
    line-height: 16px; */
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  
  .chart-info-wrapper span {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }


.chart-svg {
  position: relative;
  max-width: 90px;
  min-width: 40px;
  flex: 1;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 1.2;
}

.circle {
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.circular-chart.color2 .circle { stroke: #ff9f00; }
.circular-chart.color2 .circle-bg {stroke: #776547; }

.circular-chart.color0 .circle { stroke: #00cfde; }
.circular-chart.color0 .circle-bg {stroke: #557b88; }

.circular-chart.color1 .circle { stroke: #ff7dcb; }
.circular-chart.color1 .circle-bg {stroke: #6f5684; }


.percentage {
  fill: #fff;
  font-size: 0.5em;
  text-anchor: middle;
  font-weight: 400;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
