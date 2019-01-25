import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {increment, decrement} from './redux/actions'
import * as actions from './redux/actions'

export default class App extends PureComponent {

  static propTypes = {
    store: PropTypes.object.isRequired
    /*
    getState(): 得到内部管理的状态值
    dispatch(action): 分发action, 触发reducer调用, 产生新的state
     */
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(actions.increment(number))
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(actions.decrement(number))
  }
  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.store.getState()
    if(count%2===1) {
      this.props.store.dispatch(actions.increment(number))
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.numberSelect.value * 1
      this.props.store.dispatch(actions.increment(number))
    }, 1000)
  }

  render () {
    const count = this.props.store.getState()
    console.log('App render()', count)
    return (
      <div>
        <p>click {count}</p>
        <div>
          <select ref='numberSelect'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>&nbsp;
        </div>
      </div>
    )
  }
}