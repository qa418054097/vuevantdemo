import api from '../../api'
import * as TYPE from '../actionType/testType'

const { baseDataApi } = api
const state = {
  sysParams: ['test']
}

const getters = {
  sysParams: state => state.sysParams
}

const actions = {
  sysParams({ commit, state, rootState }) {
    rootState.requesting = true
    commit(TYPE.SYSPARAMS_REQUEST)
    baseDataApi.GetSysParams().then((response) => {
      rootState.requesting = false
      commit(TYPE.SYSPARAMS_SUCCESS, response)
    }).catch((e) => {
      commit(TYPE.SYSPARAMS_FAILURE, e)
    })
  }
}

const mutations = {
  [TYPE.SYSPARAMS_REQUEST](state) {},
  [TYPE.SYSPARAMS_SUCCESS](state, sysParams) {
    state.sysParams = sysParams.data.Data
  },
  [TYPE.SYSPARAMS_FAILURE](state) {
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
