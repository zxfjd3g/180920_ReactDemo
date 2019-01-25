import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import Counter from './components/counter'
import {increment, decrement} from './redux/actions'


export default connect(
  state => ({count: state}),
  {increment, decrement}
)(Counter)
