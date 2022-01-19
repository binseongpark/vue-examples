import client from './client'
import mock from './mock'

export default {
  publishPost: () => {

  },
  getPosts: ({ page = 0, size = 5 }) => {
    console.log('@@@@ page: ', page)
    console.log('@@@@ size: ', size)
    return new Promise((resolve, reject) => {
      client.get('./mock.json')
        .then((response) => resolve(response.data))
        .catch((error) => reject(new Error(error.response.data.message || error.message)))
    })
  }
}
