import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import store from './redux/store'


ReactDOM.render(<App store={store}/>, document.getElementById('root'))

store.subscribe(() => { // 绑定状态更新的监听, 一旦状态数据变化了, 立即回调
  console.log('-------')
  // 移除div中原本组件标签
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // 再次渲染
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})