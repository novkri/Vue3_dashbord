<template>
  <nav class="bg-secondMain w-80 z-1000 right-0 md:w-96 h-screen md:h-auto md:block absolute overflow-auto">

      <div class="flex flex-col items-center justify-center relative">
        <header class="sticky top-0 h-60 bg-secondMain my-6 w-full shadow z-1000">
          <div class="flex justify-end pr-8">
            <button @click="$emit('openUserMenu')" type="button" class="bg-transparent inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-900 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> 
          </div>
          <div class="py-2 flex flex-col items-center justify-center">
            <button @click="openUserMenu" type="button" :class="{ outlineBtn: isUserMenuOpen }" class="userpic max-w-xs bg-gray-800 rounded-full flex items-center mb-4" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <img class="rounded-full w-28 h-28 object-cover" :src="currentUser.photo" alt="userpic">
            </button>
            <span class="text-gray-500 font-semibold text-sm pb-2">{{ currentUser.firstName }} {{ currentUser.lastName }}</span>
            <span class="text-gray-500 font-normal text-sm">{{ currentUser.position }}</span>
          </div>
        </header>

      
      <!-- заглушка сообщения -->
      <div class="container flex flex-col mx-auto w-full items-start justify-center bg-main">
        <div class="flex flex-row items-center justify-between w-full px-4 py-2">
          <span class="text-gray-600 font-bold ">Messages</span>
          <div class="relative">
            <svg class="text-gray-600 h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <!-- новые уведомления -->
            <div class="absolute bg-accent h-2 w-2 rounded-md top-0 right-0"></div>
          </div>
          
        </div>
          <ul class="flex flex-col w-full">
              <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-2 md:mr-4">
                          <a href="#" class="block relative">
                              <img alt="profil" src="../assets/messenger/msg1.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                          </a>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left font-normal text-gray-400 w-full">
                              Eric Clampton
                          </div>
                          <div class="text-left text-gray-500 text-sm truncate w-full">
                              Have you planned any deadline for this?
                          </div>
                      </div>
                  </div>
              </li>

               <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-2 md:mr-4">
                          <a href="#" class="block relative">
                              <img alt="profil" src="../assets/messenger/msg2.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                          </a>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left font-normal text-gray-400 w-full">
                              Jess Flax
                          </div>
                          <div class="text-left text-gray-600 text-sm truncate w-full">
                              Can we schedule another meeting for next thursday?
                          </div>
                      </div>
                  </div>
              </li>
               <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-2 md:mr-4">
                          <a href="#" class="block relative">
                              <img alt="profil" src="../assets/messenger/msg3.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                          </a>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left font-normal text-gray-400 w-full">
                              Pam Halpert
                          </div>
                          <div class="text-left text-gray-600 text-sm truncate w-full">
                              The candidate has been shorlisted.
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>


      <!-- заглушка активность -->
      <div class="container flex flex-col mx-auto w-full items-start justify-center bg-main">
        <div class="flex flex-row items-center justify-between w-full px-4 py-2">
          <span class="text-gray-600 font-bold ">Activity</span>
          <div class="relative">
            <svg class="text-gray-600 h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <!-- новые уведомления -->
            <div class="absolute bg-accent h-2 w-2 rounded-md top-0 right-0"></div>
          </div>
          
        </div>
          <ul class="flex flex-col w-full">
              <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-red-100 rounded-md">
                          <svg class="text-red-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left text-gray-500 text-sm overflow-ellipsis w-full">
                              Your plan is expires in 
                              <span class="font-bold">3 days.</span>
                          </div>
                          <div class="text-left text-sm underline text-accent font-normal text-gray-400 w-full">
                              Renew Now 
                          </div>
                      </div>
                  </div>
              </li>

               <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-green-100 rounded-md">
                          <svg class="text-green-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                              There are  
                              <span class="font-bold">3 new applications</span>
                              for 
                              <span class="font-bold">UI Developer</span>
                          </div>
                      </div>
                  </div>
              </li>
               <li class="flex flex-row w-full">
                  <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-yellow-100 rounded-md">
                        <svg class="text-yellow-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                          <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                              Your teammate, 
                              <span class="font-bold"> Wade Wilson</span>
                              has closed the job post of 
                              <span class="font-bold">IOS Developer</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li class="flex flex-row w-full">
                <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-green-100 rounded-md">
                      <svg class="text-green-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                        <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                            There are  
                            <span class="font-bold">4 new applications</span>
                            for 
                            <span class="font-bold">Front-End Developer</span>
                        </div>
                    </div>
                </div>
             </li>
              <li class="flex flex-row w-full">
                <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-green-100 rounded-md">
                      <svg class="text-green-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                        <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                            There are  
                            <span class="font-bold">2 new applications</span>
                            for 
                            <span class="font-bold">Design Lead</span>
                        </div>
                    </div>
                </div>
              </li>
              <li class="flex flex-row w-full">
                <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-yellow-100 rounded-md">
                        <svg class="text-yellow-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                    </div>
                    <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                        <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                            Your teammate,  
                            <span class="font-bold">Wade Wilson</span>
                            has closed the job post of 
                            <span class="font-bold">Back-End Developer</span>
                        </div>
                    </div>
                </div>
              </li>
              <li class="flex flex-row w-full">
                <div class="select-none cursor-pointer flex flex-1 items-center pr-6 p-4 w-full">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4 bg-pink-100 rounded-md">
                      <svg class="text-pink-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="pl-1 flex flex-col justify-start items-start w-10/12">
                        <div class="text-left text-gray-600 text-sm overflow-ellipsis w-full">
                            You have drafted a job post for 
                            <span class="font-bold">HR Specialist</span>
                        </div>
                        <div class="text-left text-sm underline text-accent font-normal text-gray-400 w-full">
                            Complete Now
                        </div>
                    </div>
                </div>
              </li>
          </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "UserSideBar",
    data: () => {
    return {
      isUserMenuOpen: false,
    }
  },
  props: {
    isMenuOpen: Boolean,
    currentUser: Object
  },
  methods: {
    openUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen
    },

  }
};
</script>

<style scoped>
.nav-li:hover span{
  color: #fff;
}
.nav-li:hover a {
  color: #3d7eff;
}
/* .outlineBtn {
  outline: none;
  border: 3px solid #fff;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
  -moz-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
  box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
}
button.userpic:focus {
  outline: none;
} */
</style>
