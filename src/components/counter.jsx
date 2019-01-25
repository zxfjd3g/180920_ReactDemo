import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

/*
UI组件: 用来显示界面的, 不会使用任何redux相关的语法
 */
export default class Counter extends PureComponent {

  static propTypes = {
    count: PropTypes.number.isRequired, // 最终它的值是通过store.getState()得到状态值
    increment: PropTypes.func.isRequired, // 最终函数内部通过store.dispatch()产生新的状态
    decrement: PropTypes.func.isRequired,
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.increment(number)
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.decrement(number)
  }
  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.count
    if(count%2===1) {
      this.props.increment(number)
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.numberSelect.value * 1
      this.props.increment(number)
    }, 1000)
  }

  render () {
    const count = this.props.count
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