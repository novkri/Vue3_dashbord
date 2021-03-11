<template>
<div class="container bg-secondMain overflow-hidden flex flex-col shadow rounded-lg px-5 py-4 pb-6 mx-auto w-full">
  <div class="mb-6 flex flex-row justify-between">
    <h2 class="text-white font-semibold">New Applications</h2>
    <span class="text-sm text-blue-400">Today</span>
  </div>

  <ul class="flex flex-col items-start">
    <li class="flex flex-row w-full" v-for="person in applicants" :key="person.index">
      <div class="select-none cursor-pointer flex flex-1 items-center p-4 w-full">
        <div class="flex flex-shrink-0 flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" class="block relative">
            <img alt="profil" :src="person.photo" class="mx-auto object-cover rounded-full h-10 w-10 "/>
          </a>
        </div>
        
        <div class="pl-1 flex flex-col justify-start items-start w-full">
          <div class="text-left font-normal text-white overflow-ellipsis w-11/12 capitalize">
            {{ person.firstName }} {{ person.lastName}}
          </div>
          <div class="text-left text-gray-400 text-sm overflow-ellipsis w-11/12 capitalize">
            Applied for <span class="font-bold">{{ person.application }}</span> 
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>


</template>

<script>
export default {
  name: "NewApplicants",
  props: {
    applicants: Array
  }
}
</script>

<style>

</style>