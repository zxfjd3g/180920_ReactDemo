import React, {PureComponent} from 'react'

export default class App extends PureComponent {

  state = {
    count: 0
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.state.count + number
    this.setState({
      count
    })
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.state.count - number
    this.setState({
      count
    })
  }
  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.state.count
    if(count%2===1) {
      this.setState({
        count: count + number
      })
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.numberSelect.value * 1
      const count = this.state.count + number
      this.setState({
        count
      })
    }, 1000)
  }

  render () {
    const {count} = this.state
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