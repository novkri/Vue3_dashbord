<template>
<div class="container card overflow-hidden flex flex-col shadow rounded-lg px-5 py-4 pb-6 mx-auto w-full">
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
                    <div class="text-left font-normal text-white overflow-ellipsis w-10/12">
                        {{ person.name }}
                    </div>
                    <div class="text-left text-gray-400 text-sm overflow-ellipsis w-10/12">
                        Applied for <span class="font-bold">{{ person.application }}</span> 
                    </div>
                </div>
            </div>
        </li>
        <!-- <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        Designer
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Charlie Moi
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/3.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        CEO
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Marine Jeanne
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        CTO
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Boby PArk
                    </div>
                </div>
            </div>
        </li> -->
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