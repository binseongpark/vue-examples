import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export const rootComputed = {
  console: () => console,
  ...mapState('board', [
    'list',
    'yesno',
    'test'
  ])
}

export const rootMethods = {
  ...mapActions('board', [
    'login'
  ]),
  ...mapActions('board', [
    'getList',
    'getYesNo'
  ])
}
