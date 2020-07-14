import api from './request'
import qs from 'qs'

const orders = {
  getOrders(query) {
    return api.get(`/orders/get-my-orders?${decodeURI(qs.stringify(query))}`)
  },
  deleteOrder(order_id) {
    return api.delete(`/orders/${order_id}`)
  }
}

export default orders