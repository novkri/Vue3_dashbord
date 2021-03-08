<template>
  <nav class="w-auto md:w-64 h-screen md:block" :class="{ block: isMenuOpen, hidden: !isMenuOpen }">
    <div class="max-w-7xl mx-auto py-3 md:py-4">
      <div class="flex items-center justify-center">
        <div class="items-center w-full hidden md:flex flex-col">
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <div class="relative">
              <div class="py-5">
                <button @click="openUserMenu" type="button" :class="{ outlineBtn: isUserMenuOpen }" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
 
                  <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  <!-- <span>Recruiter</span> -->
                </button>
              </div>

              <div :class="{ block: isUserMenuOpen, hidden: !isUserMenuOpen }" class="origin-top-right absolute -left-16 w-44 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>
          </div>
              
            <ul class="flex flex-col w-full">
              <li class=" py-3 nav-li">
                <a href="#" class="px-4 font-medium flex jystify-start items-center pl-8">
                  <svg class="md:h-9 md:w-9 md:inline hidden pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                  <span class="text-gray-600 font-bold">Dashboard</span>
                </a>
              </li>
              <li class=" py-3 nav-li">
                <a href="#" class="px-4 font-medium flex jystify-start items-center pl-8">
                  <svg class="md:h-9 md:w-9 md:inline hidden pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-600 font-bold">Jobs</span>
                </a>
              </li>
              <li class=" py-3 nav-li">
                <a href="#" class="px-4 font-medium flex jystify-start items-center pl-8">
                  <svg class="md:h-9 md:w-9 md:inline hidden pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-600 font-bold">Applications</span>
                </a>
              </li>
              <li class=" py-3 nav-li">
                <a href="#" class="px-4 font-medium flex jystify-start items-center pl-8">
                  <svg class="md:h-9 md:w-9 md:inline hidden pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span class="text-gray-600 font-bold">Team</span>
                </a>
              </li>
              <li class=" py-3 nav-li">
                <a href="#" class="px-4 font-medium flex jystify-start items-center pl-8">
                  <svg class="md:h-9 md:w-9 md:inline hidden pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                  <span class="text-gray-600 font-bold">Reports</span>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="flex items-center justify-center">
        <!-- Profile dropdown -->
        <div class="relative">
          <div class="py-2">
            <button @click="openUserMenu" type="button" :class="{ outlineBtn: isUserMenuOpen }" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <!-- <span>Recruiter</span> -->
            </button>
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
          <a href="#" class="text-gray-600 px-6 py-2 font-bold">Dashboard</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-600 px-6 py-2 font-bold">Jobs</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-600 px-6 py-2 font-bold">Applications</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-600 px-6 py-2 font-bold">Team</a>
        </li>
        <li class="w-full  py-4 nav-li">
          <a href="#" class="text-gray-600 px-6 py-2 font-bold">Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
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
    }
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
  /* box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  --tw-ring-offset-width: 2px;
box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);
--tw-ring-offset-color: #1f2937;
box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);
--tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity)); */
border: 3px solid #fff;
/* -webkit-box-shadow: 0px 0px 0px 4px rgba(34, 60, 80, 0.39);
-moz-box-shadow: 0px 0px 0px 4px rgba(34, 60, 80, 0.39);
box-shadow: 0px 0px 0px 4px rgba(34, 60, 80, 0.39); */

-webkit-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
-moz-box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;
box-shadow: 0px 0px 0px 2px rgba(34, 60, 80, 0.39) inset;

}
button:focus {
    outline: none;
}
/* }focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white */
</style>
