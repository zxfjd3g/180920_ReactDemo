import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import Counter from './components/counter'
import {increment, decrement} from './redux/actions'

/*
读取state数据, 映射成UI组件的一般属性
 */
function mapStateToprops(state) {
  return {
    count: state
  }
}

/*
为UI组件函数属性, 函数内部必须分发action, 产生新的状态, 从而让组件重新渲染
 */
function mapDispatchToProps (dispatch) {
  return {
    increment: number => dispatch(increment(number)),
    decrement: number => dispatch(decrement(number)),
  }
}

export default connect(
  mapStateToprops, // 用来确定向UI组件传递哪些一般属性
  mapDispatchToProps // 用来确定向UI组件传递哪些函数属性
)(Counter)

/*
connect是一个函数, 它执行返回也是一个函数, 这个函数执行返回是一个新的组件

class 'Connect(Counter)' extends component {
  // 内部可以看到store
  render() {
    const props1 = mapStateToprops(store.getState())

    return <Counter {...props1}/>
  }
}
 */