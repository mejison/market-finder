import api from './request'

const auth = {
  login(data) {
    return api.post(`/login`, data)
  }
}

export default auth