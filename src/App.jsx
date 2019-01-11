import React from 'react'

import Add from './components/add/add'
import List from './components/list/list'

/*
应用根组件
 */
export default class App extends React.Component {

  state = {
    comments: [
      {username: 'Tom', content: 'React有点难'},
      {username: 'Jack', content: 'React很难'},
      {username: 'Bob', content: 'React So So'}
    ]
  }

  render() {
    const {comments} = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论222</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add/>
          <List comments={comments}/>
        </div>
      </div>
    )
  }
}