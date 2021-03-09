import { createStore } from "vuex";

export default createStore({
  state: {
    cards: []
  },
  mutations: {
    setCardsInfo(state, info) {
      info.map(el => {
        el.amount =  el.amount > 1000 ? el.amount / 1000 + ' K' : el.amount
      });
      state.cards = info
    }
  },
  actions: {
    async getCardsInfo({commit}) {
      let response = await fetch("http://localhost:3000/dummyData")
      .then((response) => {
        return response.json();
      });
    commit("setCardsInfo", response)
    }
  },
  modules: {},
  getters: {
    cardsInfo: state => {
      return state.cards;
    }
  }
});
