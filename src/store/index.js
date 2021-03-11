import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [],
    acquisitions: [],
    applicants: [],
    currentUser: {}
  },
  mutations: {
    setCardsInfo(state, info) {
      info.map(el => {
        el.amount =  el.amount > 1000 ? el.amount / 1000 + ' K' : el.amount
      });
      state.cards = info
    },

    setAcquisitions(state, info) {
      state.acquisitions = info
    },

    setApplicants(state, info) {
      state.applicants = info
    },

    setCurrentUser(state, info) {
      // !!!!!!
      state.currentUser = info[0]
    },
  },
  actions: {
    async getCardsInfo({commit}) {
      let response = await fetch("http://localhost:3000/dummyData")
      .then((response) => {
        return response.json();
      });
      commit("setCardsInfo", response)
    },

    async getAcquisitions({commit}) {
      let response = await fetch("http://localhost:3000/Acquisitions")
      .then((response) => {
        return response.json();
      });
      commit("setAcquisitions", response)
    },

    async getNewApplicants({commit}) {
      let response = await fetch("http://localhost:3000/Applicants")
      .then((response) => {
        return response.json();
      });
      commit("setApplicants", response)
    },

    // !!!!! это пока не current User !!!
    async getCurrentUser({commit}) {
      let response = await fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      });
      commit("setCurrentUser", response)
    },
  },
  modules: {},
  getters: {
    cardsInfo: state => {
      return state.cards;
    },

    acquisitions: state => {
      return state.acquisitions;
    },

    applicants: state => {
      return state.applicants;
    },

    currentUser: state => {
      return state.currentUser;
    }
  }
});

// раскидать по модулям