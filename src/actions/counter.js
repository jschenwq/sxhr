import {
  ADD,
  MINUS,
  CHANGE_APP_ON_LAUNCH,
  INSERT_AUTHORIZE
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

//更改登录状态
export const changeAppOnLaunch = ()=> ({
  type: CHANGE_APP_ON_LAUNCH
})

//写入请求token
export const inserToken = (authorize) => ({
  type: INSERT_AUTHORIZE,
  authorize
})

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
