import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    loading: false,
    token: null
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    }
  },
  actions: {
    fetchData({ commit }) {
      commit('setLoading', true);
      axios
        .get('/api/data')
        .then((response) => {
          // Handle successful response
        })
        .catch((error) => {
          // Handle error
        })
        .finally(() => {
          commit('setLoading', false);
        });
    }
  }
});
