/*
redux最核心的管理对象
  state
  reducer
 */
import {createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer) // 创建store对象, 内部会第次调用reducer函数得到初始状态值保存
