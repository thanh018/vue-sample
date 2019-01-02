import axios from 'axios'
axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.delete['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

export const ApiService = {
  get (url, slug = '') {
    return axios.get(`${url}/${slug}`)
      .catch((error) => console.log(error))
  }
}
