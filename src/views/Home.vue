<template>
  <div class="home flex">
    <Sidebar :isMenuOpen="isMenuOpen" />

  <div class="flex flex-col w-full">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <div class="inline-flex md:hidden">
            <!-- Mobile menu button -->
            <button @click="openMenu" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg :class="{ block: !isMenuOpen, hidden: isMenuOpen }" class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <Card :cardsInfo="cardsInfo" />
          </div>
        </div>
        
      </div>
    </main>
  </div>

</div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    Sidebar,
    Card
  },
  data: () => {
    return {
      isMenuOpen: false,
    }
  },
  computed: {
    // смешиваем результат mapGetters с внешним объектом computed
    ...mapGetters([
      'cardsInfo',
      // 'anotherGetter'
      // ...
    ])
    // cardsInfo() {
    //   return this.$store.getters.cards;
    // }
  },
  async mounted() {
    // let response = await fetch("http://localhost:3000/dummyData")
    //   .then((response) => {
    //     return response.json();
    //   });
    // console.log(response);
    this.$store.dispatch("getCardsInfo")
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
};
</script>

<style scoped>

</style>
