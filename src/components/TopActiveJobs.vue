<template>
    <div
    class="card flex flex-col overflow-hidden shadow rounded-lg border-purple-800 border-solid px-5 py-4 pb-6"
  >
    <div class="mb-10 flex flex-row justify-between">
      <h2 class="text-white font-semibold mb-6">Top Active Jobs</h2>
      <span class="text-sm text-blue-400">Last 30 days</span>
    </div>
    <div class="">
      <CommitChart  />
    </div>
    </div>
</template>

<script>
import CommitChart from './CommitChart'

export default {
  name: "TopActiveJobs",
  components: {
    CommitChart
  },
}
</script>

<style>

</style>