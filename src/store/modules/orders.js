import { orders as api } from "@/api";

const orders = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: {
    items: state => state.items,
  },
  actions: {
    getOrders({ commit }, data) {
      return api.getOrders(data).then(({ data }) => {
        commit('setOrders', data.data)
        return data
      })
    },
    deleteOrder({ commit }, order_id) {
      return api.deleteOrder(order_id)
        .then(() => {
          commit('sdf')
        })
    }
  },
  mutations: {
    setOrders(state, data) {
      state.items = data
    }
  },
}

export default orders