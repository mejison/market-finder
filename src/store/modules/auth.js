import { auth as api } from "@/api";

const auth = {
  namespaced: true,
  state: () => ({
    token: '',
  }),
  actions: {
    login({ commit }, data) {
      api.login(data).then(({ data: { token } }) => {
        commit('setToken', token)
        localStorage.setItem('_token', token);
      })
    }
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    }
  },
}

export default auth