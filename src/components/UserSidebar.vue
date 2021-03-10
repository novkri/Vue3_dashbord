<template>
<!-- transition ease-in duration-700  -->
<!-- <transition name="slide-fade"> -->
  <nav class="w-80 z-1000 right-0 md:w-96 h-screen md:block absolute" :class="{ block: isMenuOpen, hidden: !isMenuOpen }">

<!-- <transition name="slide-fade"> -->
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="py-6">
      <div class="flex justify-end pr-8">
        <button @click="$emit('openUserMenu')" type="button" class="bg-transparent inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
          <svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> 
      </div>


      <div class="flex items-center justify-center">
        <!-- Profile dropdown -->
        <div class="relative">
          <div class="py-2">
            <!-- <button @click="openUserMenu" type="button" :class="{ outlineBtn: isUserMenuOpen }" class="userpic max-w-xs bg-gray-800 rounded-full flex items-center text-sm" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button> -->
          </div>

          <div :class="{ block: isUserMenuOpen, hidden: !isUserMenuOpen }" class="origin-top-right absolute -left-12 w-32 rounded-md shadow-lg py-1 mt-3 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>
      </div>
              
      <ul class="flex flex-col items-baseline w-full ">
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Dashboard</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Jobs</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Applications</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Team</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Reports</a>
        </li>
      </ul>
    </div>
<!-- </transition> -->
  </nav>
<!-- </transition> -->
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
    isMenuOpen: Boolean
  },
  methods: {
    openUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen
    },

  }
};
</script>

<style scoped>
nav {
  background-color: #01081f;
}

.nav-li:hover {
  cursor: pointer;
  border-right: 3px solid #3d7eff;
  background-color: #020b2a;
}

.nav-li:hover span{
  color: #fff;
}
.nav-li:hover a {
  color: #3d7eff;
}
.outlineBtn {
  outline: none;
  border: 3px solid #fff;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
  -moz-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
  box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
}
button.userpic:focus {
  outline: none;
}
</style>
