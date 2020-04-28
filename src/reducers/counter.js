import {ADD, MINUS, CHANGE_APP_ON_LAUNCH, INSERT_AUTHORIZE, INSERT_USERINFO} from '../constants/counter'

const INITIAL_STATE = {
  //应用首次加载
  appOnLaunch: true,
  //请求token
  authorize: null,
  userInfo: null,
  num: 0
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case CHANGE_APP_ON_LAUNCH:
      return {
        ...state,
        appOnLaunch: false
      }
    case INSERT_AUTHORIZE:
      return {
        ...state,
        authorize: action.authorize
      }
    case INSERT_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return state
  }
}
