import api from '@/api'
import * as types from './mutation-types'

export default {
  getPosts({ commit }, { page, size }) {
    return api.getPosts({ page, size })
      .then(data => {
        console.log('@@@@ data: ', data)

        let list = data.list.slice(page * size, page * size + size)
        console.log('@@@@ list: ', list)

        commit(types.DEFAULT_ASSIGN, {
          key: 'list',
          value: list
        })

        return true
      })
    // return api.getList()
    //   .then(data => {
    //     console.log('@@@@ success')
    //     console.log(data)

    //     commit(types.DEFAULT_ASSIGN, {
    //       key: 'list',
    //       value: data
    //     })
    //   })
    //   .catch(error => { throw error })
  },
  publishPost() {

  }
}
