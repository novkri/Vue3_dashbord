<template>
    <div
    class="card flex flex-col overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer px-5 py-4 pb-6"
  >
    <div class="mb-10 flex flex-row justify-between">
      <h2 class="text-white font-semibold mb-6">Top Active Jobs</h2>
      <!-- <span class="mt-1 text-3xl font-semibold text-white">fghgh</span> -->
      <a href="" class="text-sm text-blue-500">Last 30 days</a>
    </div>
    <div class="">
      <CommitChart  />
    </div>
    <!-- <div class="px-4 py-5 sm:p-6 text-center w-3/5">
      <div class="chart-info-wrapper mt-5">
        <h2 class="text-sm font-medium text-gray-400 font-bold">ghgh</h2>
        <span class="mt-1 text-3xl font-semibold text-white">fghgh</span>
      </div>
    </div>

    <div class="text-center w-2/5 flex justify-center items-center chart-container">
      hfgh
      </div> -->

    </div>
</template>

<script>
import CommitChart from './CommitChart'

export default {
  name: "TopActiveJobs",
  components: {
    CommitChart
  },
  
  // data: () => {
  //   return {
  //     chartData: {
  //       labels: ['Label 1', 'Label 2'],
  //       datasets: [
  //         {
  //           label: 'Data One',
  //           backgroundColor: '#f87979',
  //           data: [56, 23]
  //         }
  //       ]
  //     },
  //   }
  // }
}
</script>

<style>

</style>