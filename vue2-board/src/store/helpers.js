import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export const rootComputed = {
  console: () => console,
  ...mapState('board', [
    'list',
  ])
}

export const rootMethods = {
  ...mapActions('board', [
    'getPosts'
  ]),
}
