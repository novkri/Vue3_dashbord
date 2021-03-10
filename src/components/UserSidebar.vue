<template>
<!-- transition ease-in duration-700  -->
<!-- <transition name="slide-fade"> -->
  <nav class="bg-secondMain w-80 z-1000 right-0 md:w-96 h-screen md:block absolute overflow-auto" :class="{ block: isMenuOpen, hidden: !isMenuOpen }">

<!-- <transition name="slide-fade"> -->
    <!-- Mobile menu, show/hide based on menu state. -->



      <div class="flex flex-col items-center justify-center relative">
        <header class="sticky top-0 h-60 bg-secondMain py-6 w-full shadow">
          <div class="flex justify-end pr-8">
            <button @click="$emit('openUserMenu')" type="button" class="bg-transparent inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> 
          </div>
          <div class="py-2 flex flex-col items-center justify-center">
            <button @click="openUserMenu" type="button" :class="{ outlineBtn: isUserMenuOpen }" class="userpic max-w-xs bg-gray-800 rounded-full flex items-center text-sm" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
            <span>Julia Pellegrini</span>
            <span>Recruiting Manager</span>
          </div>
        </header>

      
      <ul class="flex flex-col items-baseline w-full">
        <li class="w-full  py-4 nav-li hover:cursor-pointer border-r-4 border-transparent hover:border-accent">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Dashboard</a>
        </li>
        <li class="w-full  py-4 nav-li hover:cursor-pointer border-r-4 border-transparent hover:border-accent">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Jobs</a>
        </li>
        <li class="w-full  py-4 nav-li hover:cursor-pointer border-r-4 border-transparent hover:border-accent">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Applications</a>
        </li>
        <li class="w-full  py-4 nav-li hover:cursor-pointer border-r-4 border-transparent hover:border-accent">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Team</a>
        </li>
        <li class="w-full  py-4 nav-li hover:cursor-pointer border-r-4 border-transparent hover:border-accent">
          <a href="#" class="text-gray-400 px-6 py-2 font-bold">Reports</a>
        </li>
      </ul>
      <!-- </div>      -->
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
