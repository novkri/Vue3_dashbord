<template>
      <div
    class="bg-secondMain flex flex-col overflow-hidden shadow rounded-lg border-solid px-5 py-4 pb-6"
  >
    <div class="mb-6 flex flex-row justify-between">
      <h2 class="text-white font-semibold">Acquisitions</h2>
      <span class="text-sm text-blue-400">This month</span>
    </div>
    
    <div class="h-2 max-w-xl mb-9">
       <span v-for="item in acquisitions" :key="item.index"  class="h-full inline-block" :class="'color-' + item.name" :style="{ width: item.percentage + '%'}"></span>
    </div>
    
      <ul class="flex flex-col">
        <li class="text-white" v-for="item in acquisitions" :key="item.index">
          <div class="pl-1 mt-3 flex justify-between">
            <div class="flex items-center">
              <span class="rounded-full w-3 h-3 bg-blue-500 inline-flex" :class="'color-' + item.name"></span>
              <span class="pl-3 text-sm font-light capitalize">{{ item.name }}</span>
            </div>
            <span class="text-sm font-light">{{ item.percentage }}%</span>
          </div>
        </li>


        <!-- <li class="text-white">
          <div class="pl-1 mt-3 flex justify-between">
            <div class="flex items-center">
              <span class="rounded-full w-3 h-3 bg-green-500 inline-flex"></span>
              <span class="pl-3 text-sm font-light">Shortlisted</span>
            </div>
            <span class="text-sm font-light">20%</span>
          </div>
        </li>
        <li class="text-white">
          <div class="pl-1 mt-3 flex justify-between">
            <div class="flex items-center">
              <span class="rounded-full w-3 h-3 bg-pink-400 inline-flex"></span>
              <span class="pl-3 text-sm font-light">On-hold</span>
            </div>
            <span class="text-sm font-light">50%</span>
          </div>
        </li>
        <li class="text-white">
          <div class="pl-1 mt-3 flex justify-between">
            <div class="flex items-center">
              <span class="rounded-full w-3 h-3 bg-yellow-400 inline-flex"></span>
              <span class="pl-3 text-sm font-light">Rejected</span>
            </div>
            <span class="text-sm font-light">10%</span>
          </div>
        </li> -->
      </ul>

    </div>
</template>

<script>
export default {
  name: "Acquisitions",
  props: {
    acquisitions: Array
  }
}
</script>

<style scoped>
.color-applications {
  background-color: #60A5FA;
}
.color-shortlisted {
  background-color: #10B981;
}
.color-on-hold {
  background-color: #F472B6;
}
.color-rejected {
  background-color: #FBBF24;
}
</style>