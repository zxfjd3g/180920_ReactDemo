/*
包含n个 action creator函数的模块
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'

/*
增加的action creator
 */
export const increment = (number) => ({type: INCREMENT, number})
/*
减少的action creator
 */
export const decrement = (number) => ({type: DECREMENT, number})