<template>
  <dl class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
    <div
      class="flex card overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
      v-for="card in dummyData" :key="card.index"
    >
      <div class="px-4 py-5 sm:p-6 text-center w-3/5">
        <div class="chart-info-wrapper mt-5">
          <h2 class="text-sm font-medium text-gray-400 font-bold">{{ card.name }}</h2>
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
            <text x="18" y="20.35" class="percentage">30%</text>
          </svg>
        </div>

      </div>
    </div>

    <!-- <div
      class="flex card overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
    >
      <div class="px-4 py-5 sm:p-6 text-center w-3/5">
        <div class="chart-info-wrapper mt-5">
          <h2 class="text-sm font-medium text-gray-400 font-bold">SHORTLISTED</h2>
          <span class="mt-1 text-3xl font-semibold text-white">5.5 K</span>
        </div>
      </div>

      <div class="text-center w-2/5 flex justify-center items-center chart-container">
        <div class="chart-svg">
          <svg viewBox="0 0 36 36" class="circular-chart blue">
            <path class="circle-bg" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            <path class="circle" :stroke-dasharray="`${progress2}, 100`" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            <text x="18" y="20.35" class="percentage">90%</text>
          </svg>
        </div>

      </div>
    </div>

    <div
      class="flex card overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
    >
      <div class="px-4 py-5 sm:p-6 text-center w-3/5">
        <div class="chart-info-wrapper mt-5">
          <h2 class="text-sm font-medium text-gray-400 font-bold">ON-HOLD</h2>
          <span class="mt-1 text-3xl font-semibold text-white">10.5 K</span>
        </div>
      </div>

      <div class="text-center w-2/5 flex justify-center items-center chart-container">
        <div class="chart-svg">
          <svg viewBox="0 0 36 36" class="circular-chart pink">
            <path class="circle-bg" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            <path class="circle" :stroke-dasharray="`${progress3}, 100`" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            <text x="18" y="20.35" class="percentage">60%</text>
          </svg>
        </div>

      </div>
    </div> -->

  </dl>
</template>


<script>

export default {
  name: "Home",
  components: {
  },
  data: () => {
    return {
      progress1: 40,
      progress2: 60,
      progress3: 10,
      dummyData: [
        {
          index: 0,
          name: "applications",
          amount: "20.5 K",
          progress: "30"
        },
        {
          index: 1,
          name: "SHORTLISTED",
          amount: "5.5 K",
          progress: "50"
        },
        {
          index: 2,
          name: "on-hold",
          amount: "10.5 K",
          progress: "76"
        }
    ]
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.card {
  background-color: #01081f;
}


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
