/*
包含n个用来根据现有的state和指定的action来返回一个新的state
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'
/*
管理count状态数据的reducer函数
state: 本身就是我要管理的数据
 */
export default function count(state=1, action) {
  console.log('count()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state  // 返回原本的状态值
  }
}