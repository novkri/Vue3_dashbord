<template>
  <div class="home flex">
    <transition name="fade">
    <Sidebar :isMenuOpen="isMenuOpen" @openMenu="openMenu()" />
    </transition>

    <div class="flex flex-col w-full">
      <header class="">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 class="font-semibold text-white md:text-3xl text-xl">
            Applications Dashboard
          </h1>
          

          <div class="inline-flex">
            <button @click="openUserMenu" type="button" class="h-12 w-12 bg-secondMain inline-flex self-center items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open user menu</span>
                <svg class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </button>
          
            <!-- Mobile menu button -->
            <button @click="openMenu" type="button" class="h-12 w-12 bg-secondMain md:hidden inline-flex self-center items-center justify-center p-2 ml-6 mr-2 rounded-md text-white hover:text-white focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 sm:px-0">
          <div>
              <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <Card :cardsInfo="cardsInfo" />
                <div class="lg:col-span-2 lg:row-span-2">
                  <TopActiveJobs />
                </div>
                
                <div>
                  <Acquisitions :acquisitions="acquisitions" />
                </div>
                <div class="lg:col-start-3 lg:row-span-2">
                  <NewApplicants :applicants="applicants" />
                </div>
                
              </div>
          </div>
        </div>
        
      </div>
    </main>
<transition name="fade"> 
      <UserSideBar v-show="isUserMenuOpen" :isUserMenuOpen="isUserMenuOpen" @openUserMenu="openUserMenu()" :currentUser="currentUser" />
</transition>
  </div>
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Card from "@/components/Card.vue";
import TopActiveJobs from "@/components/TopActiveJobs.vue";
import Acquisitions from "@/components/Acquisitions.vue";
import NewApplicants from "@/components/NewApplicants.vue";
import UserSideBar from "@/components/UserSidebar.vue";

import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    Sidebar,
    UserSideBar,
    Card,
    TopActiveJobs,
    Acquisitions,
    NewApplicants
  },
  data: () => {
    return {
      isMenuOpen: false,
      isUserMenuOpen: false
    }
  },
  computed: {
    ...mapGetters([
      'cardsInfo',
      'acquisitions',
      'applicants',
      'currentUser'
    ])
  },
  async mounted() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("getCardsInfo");
    this.$store.dispatch("getAcquisitions");
    this.$store.dispatch("getNewApplicants");
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
      this.isMenuOpen ? document.getElementsByTagName('body')[0].classList.add('overflow-hidden') : document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
    },
    openUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen
      this.isUserMenuOpen ? document.getElementsByTagName('body')[0].classList.add('overflow-hidden') : document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
    }
  }
};
</script>

<style>
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
