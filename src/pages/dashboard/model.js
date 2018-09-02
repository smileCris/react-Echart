import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from './services/dashboard'
import { model } from 'utils/model'

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    rentalPeakSeriesDate: [],
    usageRateSeries: [],
    washUsageRateSeries: [],
    dryUsageRateSeries: [],
    scoringSeries: [],
    rentIncomeSeries: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard' || pathname === '/') {
          dispatch({ type: 'query' })
        }
      })
    },
  },
  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },
  },
})
