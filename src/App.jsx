import React from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import About from './views/about'
import Home from './views/home'


/*
应用根组件
 */
export default class App extends React.Component {

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              {/*定义路由链接*/}
              <NavLink className='list-group-item' to='/about' activeClassName='activeClass'>About</NavLink>
              <NavLink className='list-group-item' to='/home' activeClassName='activeClass'>Home</NavLink>
            </div>
          </div>

          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                {/*在此定义所有在此显示的路由*/}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}