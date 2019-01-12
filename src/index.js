/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter} from 'react-router-dom'

import App from './App'

/*
HashRouter: 路由路径都有一个#, 复用的是history的hash值为实现路由的
BrowserRouter: 利用h5新语法实现的, 路由路径都没有#
 */

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))


